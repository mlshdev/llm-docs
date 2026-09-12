> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/transaction/beginrefundrequest(for:in:)-9mscy](https://developer.apple.com/documentation/storekit/transaction/beginrefundrequest(for:in:)-9mscy)

# beginRefundRequest(for:in:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** macOS 12.0+

Presents the refund request sheet for the specified transaction in a view controller.

## Declaration

```swift
static func beginRefundRequest(for transactionID: UInt64, in controller: NSViewController) async throws -> Transaction.RefundRequestStatus
```

## Parameters

- `transactionID`: The identifier of the transaction the user is requesting a refund for.
- `controller`: The [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller) that the system displays the sheet on.

<a id="return-value"></a>

## Return Value

[Transaction.RefundRequestStatus](refundrequeststatus.md)

## Mentioned In

- [Testing refund requests](../testing-refund-requests.md)

<a id="Discussion"></a>

## Discussion

Call this function from account settings or a help menu to enable customers to request a refund for an in-app purchase within your app. When you call this function, the system displays a refund sheet with the customer’s purchase details and a list of reason codes for the customer to choose from. For design guidance, see [Human Interface Guidelines \> In-app purchase \> Providing help with in-app purchases](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase/overview/introduction/#providing-help-with-in-app-purchases).

When a customer requests a refund for consumable in-app purchases through your app, the App Stores sends a `CONSUMPTION_REQUEST` [notificationType](../../appstoreservernotifications/notificationtype.md) to your server. If the customer provided consent, respond by sending consumption data to the App Store using the [Send Consumption Information](../../appstoreserverapi/send-consumption-information.md) endpoint. If not, don’t respond to the `CONSUMPTION_REQUEST` notification.

The App Store takes up to 48 hours to either approve or deny a refund.

For information about setting up your server to receive notifications, see [Enabling App Store Server Notifications](../enabling-app-store-server-notifications.md).

> **Note**

>  If your app uses SwiftUI, use [refundRequestSheet(for:isPresented:onDismiss:)](https://developer.apple.com/documentation/swiftui/view/refundrequestsheet%28for:ispresented:ondismiss:%29) instead. For example usage, see [Food Truck: Building a SwiftUI multiplatform app](https://developer.apple.com/documentation/swiftui/food-truck-building-a-swiftui-multiplatform-app).

<a id="Test-refund-requests"></a>

### Test refund requests

The sandbox environment and StoreKit Testing in Xcode both support testing refund requests. For more information, see [Testing refund requests](../testing-refund-requests.md).

## See Also

### Requesting refunds

- [Testing refund requests](../testing-refund-requests.md): Test your app’s implementation of refund requests, and your app’s and server’s handling of approved and declined refunds.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-9k0pj.md): Presents the refund request sheet for the transaction in a window scene.
- [beginRefundRequest(in:)](beginrefundrequest%28in_%29-63bvd.md): Presents the refund request sheet for the transaction in a view controller.
- [beginRefundRequest(for:in:)](beginrefundrequest%28for_in_%29-65tph.md): Presents the refund request sheet for the specified transaction in a window scene.
- [Transaction.RefundRequestError](refundrequesterror.md): The error codes for refund requests.
- [Transaction.RefundRequestStatus](refundrequeststatus.md): The status codes for refund requests.
