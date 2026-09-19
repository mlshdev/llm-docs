> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/modelcontext/notificationkey/updatedidentifiers

# ModelContext.NotificationKey.updatedIdentifiers

**Framework:** SwiftData  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

A set of values identifying the context’s updated models.

## Declaration

```swift
case updatedIdentifiers
```

## See Also

### Accessing notification keys

- [ModelContext.NotificationKey.deletedIdentifiers](deletedidentifiers.md): A set of values identifying the context’s deleted models.
- [ModelContext.NotificationKey.insertedIdentifiers](insertedidentifiers.md): A set of values identifying the context’s inserted models.
- [ModelContext.NotificationKey.invalidatedAllIdentifiers](invalidatedallidentifiers.md): A set of values identifying the context’s invalidated models.
- [ModelContext.NotificationKey.queryGeneration](querygeneration.md): A token that indicates which generation of the model store SwiftData is using.
- [ModelContext.NotificationKey.historyTokens](historytokens.md): A history token representing the persistent store state after the save.
