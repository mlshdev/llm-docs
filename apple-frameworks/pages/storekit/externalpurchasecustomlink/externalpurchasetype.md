> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/externalpurchasetype

# ExternalPurchaseCustomLink.ExternalPurchaseType

**Framework:** StoreKit  
**Kind:** Enumeration  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Values that represent the types of external purchase an app can perform.

## Declaration

```swift
enum ExternalPurchaseType
```

## Topics

### External purchase types

- [ExternalPurchaseCustomLink.ExternalPurchaseType.outOfApp(destinationURL:)](externalpurchasetype/outofapp%28destinationurl_%29.md): Beta. The external purchase happens outside of the app.
- [ExternalPurchaseCustomLink.ExternalPurchaseType.withinApp](externalpurchasetype/withinapp.md): Beta. The external purchase happens inside the app.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the disclosure sheet

- [showNotice(for:)](shownotice%28for_%29.md): Beta. Displays the system disclosure notice sheet for a custom link type and asks the customer whether to continue.
- [ExternalPurchaseCustomLink.NoticeResult](noticeresult.md): The result of showing the disclosure notice.
