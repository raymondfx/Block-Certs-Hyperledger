/**
 * Trade a product to a new player
 * @param {org.hyperledger_composer.scms.MoveProduct} moveProduct - the trade product transaction
 * @transaction
 */
async function moveProduct(moveProduct) { // eslint-disable-line no-unused-vars
    moveProduct.product.issuer = moveProduct.product.owner;
    moveProduct.product.owner = moveProduct.newOwner;
    const assetRegistry = await getAssetRegistry('org.hyperledger_composer.scms.Product');
    await assetRegistry.update(moveProduct.product);
   }