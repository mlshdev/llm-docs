> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/onetimechargeitem](https://developer.apple.com/documentation/advancedcommerceapi/onetimechargeitem)

# OneTimeChargeItem

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The details of a one-time charge product, including its display name, price, SKU, and metadata.

## Declaration

```
object OneTimeChargeItem
```

## Properties

- `description` — `description` (required): A description of the product that doesn’t display to customers.
  **Maximum length:** `45`
- `displayName` — `displayName` (required): The product name, suitable for display to customers.
  **Maximum length:** `30`
- `price` — `price` (required): The price, in milliunits of the currency, of the one-time charge product.
- `SKU` — `SKU` (required): The product identifier.
  **Maximum length:** `128`

## Mentioned In

- [Creating SKUs for your In-App Purchases](creating-your-purchases.md)

## See Also

### One-time charge creation in the app

- [OneTimeChargeCreateRequest](onetimechargecreaterequest.md): The request data your app provides when a customer purchases a one-time-charge product.
