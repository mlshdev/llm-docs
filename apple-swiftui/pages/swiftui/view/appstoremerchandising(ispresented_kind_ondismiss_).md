> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/appstoremerchandising(ispresented:kind:ondismiss:)](https://developer.apple.com/documentation/swiftui/view/appstoremerchandising(ispresented:kind:ondismiss:))

# appStoreMerchandising(isPresented:kind:onDismiss:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.2+ · tvOS 26.0+

Display a merchandising view.

## Declaration

```swift
nonisolated func appStoreMerchandising(isPresented: Binding<Bool>, kind: AppStoreMerchandisingKind, onDismiss: ((Result<AppStoreMerchandisingKind.PresentationResult, any Error>) async -> ())? = nil) -> some View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether the App Store merchandising view is presented.
- `kind`: The merchandising kind to merchandise.
- `onDismiss`: The closure to execute when the merchandising view is dismissed, with the presetation result of the App Store merchandising view provided as a parameter.

## See Also

### StoreKit

- [appStoreOverlay(isPresented:configuration:)](appstoreoverlay%28ispresented_configuration_%29.md): Presents a StoreKit overlay when a given condition is true.
- [manageSubscriptionsSheet(isPresented:)](managesubscriptionssheet%28ispresented_%29.md)
- [refundRequestSheet(for:isPresented:onDismiss:)](refundrequestsheet%28for_ispresented_ondismiss_%29.md): Display the refund request sheet for the given transaction.
- [offerCodeRedemption(options:isPresented:onCompletion:)](offercoderedemption%28options_ispresented_oncompletion_%29.md): Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.
