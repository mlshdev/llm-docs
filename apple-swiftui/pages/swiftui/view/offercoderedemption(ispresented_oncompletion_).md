> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:)](https://developer.apple.com/documentation/swiftui/view/offercoderedemption(ispresented:oncompletion:))

# offerCodeRedemption(isPresented:onCompletion:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 15.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

> Use [offerCodeRedemption(options:isPresented:onCompletion:)](offercoderedemption%28options_ispresented_oncompletion_%29.md) instead.

## Declaration

```swift
nonisolated func offerCodeRedemption(isPresented: Binding<Bool>, onCompletion: @escaping @MainActor (Result<Void, any Error>) -> Void = { _ in }) -> some View

```

## Parameters

- `isPresented`: A binding to a Boolean value that determines whether the system displays the sheet. You set the Boolean value to true to cause the system to display the sheet. The system sets it to false when it dismisses the sheet.
- `onCompletion`: A closure that returns the result of the presentation. In Mac apps built with Mac Catalyst, the completion handler returns a failure with an error prior to macOS 15.

<a id="discussion"></a>

## Discussion

Presents a sheet that enables customers to redeem offer codes that you configure in App Store Connect.

The `offerCodeRedemption(isPresented:onCompletion:)` method displays a system sheet where customers can enter and redeem offer codes. If you generate offer codes in App Store Connect, call this function to enable customers to redeem the offer. To display the sheet using UIKit, see `presentOfferCodeRedeemSheet(in:)`.

> **Important**

> Set up offer codes in App Store Connect before calling this API. Customers can only redeem these offers in your app through the redemption sheet; don’t use a custom UI. For more information, see [Supporting offer codes in your app](https://developer.apple.com/documentation/storekit/supporting-offer-codes-in-your-app).

The following code example shows a view that displays the offer code redemption sheet upon a button press:

```swift
import SwiftUI
import StoreKit
    
    
struct ContentView: View {
    @State private var redeemSheetIsPresented = false
    
    
    var body: some View {
        Button("Present offer code redemption sheet.") {
            redeemSheetIsPresented = true
        }
        .offerCodeRedemption(isPresented: $redeemSheetIsPresented) { result in
            // Handle result
        }
    }
}
```

When customers redeem an offer code, StoreKit emits the resulting transaction in [updates](https://developer.apple.com/documentation/storekit/transaction/updates). Set up a transaction listener as soon as your app launches to receive new transactions while the app is running.

## See Also

### Technology-specific modifiers

- [postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)](posttophotossharedalbumsheet%28ispresented_items_photolibrary_defaultalbumidentifier_completion_%29.md): Deprecated. Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.
- [subscriptionPromotionalOffer(offer:signature:)](subscriptionpromotionaloffer%28offer_signature_%29.md): Deprecated. Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
