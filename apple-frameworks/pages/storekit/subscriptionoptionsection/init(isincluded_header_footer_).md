> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/subscriptionoptionsection/init(isincluded:header:footer:)](https://developer.apple.com/documentation/storekit/subscriptionoptionsection/init(isincluded:header:footer:))

# init(isIncluded:header:footer:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@MainActor @preconcurrency init(isIncluded: @escaping (Product) -> Bool, @ViewBuilder header: () -> Header = EmptyView.init, @ViewBuilder footer: () -> Footer = EmptyView.init)
```

## See Also

### Creating subscription option sections

- [init(\_:isIncluded:footer:)](init%28__isincluded_footer_%29-17lo3.md): Conforms when `Header` is `Text`, `Content` is `Never`, and `Footer` conforms to `View`.
- [init(\_:isIncluded:footer:)](init%28__isincluded_footer_%29-36k79.md): Conforms when `Header` is `Text`, `Content` is `Never`, and `Footer` conforms to `View`.
