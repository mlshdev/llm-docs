> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/transaction/ownershiptype-swift.struct/familyshared

# familyShared

**Framework:** StoreKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The transaction belongs to a family member who benefits from the service.

## Declaration

```swift
static let familyShared: Transaction.OwnershipType
```

## Mentioned In

- [Testing Family Sharing](../../testing-family-sharing.md)

<a id="Discussion"></a>

## Discussion

For more information about Family Sharing, see [Turn on Family Sharing for Apple In-App Purchases](https://help.apple.com/app-store-connect/#/dev45b03fab9).

## See Also

### Getting ownership types

- [purchased](purchased.md): The transaction belongs to the purchaser.
