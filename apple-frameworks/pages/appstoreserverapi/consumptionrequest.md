> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/consumptionrequest](https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest)

# ConsumptionRequest

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.19+

The request body that contains consumption information for an In-App Purchase.

## Declaration

```
object ConsumptionRequest
```

## Properties

- `customerConsented` — `customerConsented`: **(Required)** A Boolean value of `true` or `false` that indicates whether the customer consented to provide consumption data.
- `consumptionPercentage` — `consumptionPercentage`: An integer that indicates the percentage of the In-App Purchase the customer consumed, in milliunits.
  **Minimum:** `0`  
  **Maximum:** `100000`
- `deliveryStatus` — `deliveryStatus`: **(Required)**  A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- `refundPreference` — `refundPreference`: A value that indicates your preference, based on your operational logic, as to whether the App Store should grant the refund.
- `sampleContentProvided` — `sampleContentProvided`: **(Required)**  A Boolean value of `true` or `false` that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.

<a id="Discussion"></a>

## Discussion

Use `ConsumptionRequest` to provide information about the customer’s In-App Purchase when you call the [Send Consumption Information](send-consumption-information.md) endpoint.

> **Note**

> The App Store server rejects requests that have a [customerConsented](customerconsented.md) value other than `true` by returning an `HTTP 400` error with an [InvalidCustomerConsentedError](invalidcustomerconsentederror.md).

You can provide consumption information for any type of product: consumable, non-consumable, non-renewing subscription, and auto-renewable subscription.

Consider the following constraints when providing an optional [refundPreference](https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest/refundpreference):

- The system supports the `GRANT_FULL` and `DECLINE` values for all product types.
- If you choose `GRANT_PRORATED` for an auto-renewable subscription, don’t include a [consumptionPercentage](https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest/consumptionpercentage). The system automatically calculates the percentage.

If the [deliveryStatus](https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest/deliverystatus) isn’t `DELIVERED`, set the `consumptionPercentage` to `0`; otherwise the request fails with an error.

## Topics

### Consumption data types

- [customerConsented](customerconsented.md): A Boolean value that indicates whether the customer consented to provide consumption data to the App Store.
- [consumptionPercentage](consumptionpercentage.md): An integer that indicates the percentage, in milliunits, of the In-App Purchase the customer consumed.
- [deliveryStatus](deliverystatus.md): A value that indicates whether the app successfully delivered an In-App Purchase that works properly.
- [refundPreference](refundpreference.md): A value that indicates your preferred outcome for the refund request.
- [sampleContentProvided](samplecontentprovided.md): A Boolean value that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality.

## See Also

### Consumption information

- [Send Consumption Information](send-consumption-information.md): Send consumption information about an In-App Purchase to the App Store after your server receives a consumption request notification.
- [Send Consumption Information V1](send-consumption-information-v1.md): Send consumption information about a consumable In-App Purchase or auto-renewable subscription to the App Store after your server receives a consumption request notification.
- [ConsumptionRequestV1](consumptionrequestv1.md): The request body containing consumption information.
