> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/externalpurchasetype/outofapp(destinationurl:)

# ExternalPurchaseCustomLink.ExternalPurchaseType.outOfApp(destinationURL:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

The external purchase happens outside of the app.

## Declaration

```swift
case outOfApp(destinationURL: URL?)
```

<a id="Discussion"></a>

## Discussion

> **Note**

> This API requires the `destinationURL` parameter in all regions except the EU; omitting it in other regions throws an error.

## See Also

### External purchase types

- [ExternalPurchaseCustomLink.ExternalPurchaseType.withinApp](withinapp.md): Beta. The external purchase happens inside the app.
