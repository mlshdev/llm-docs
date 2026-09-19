> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreader/preparestoreandforward()

# prepareStoreAndForward()

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Configures the pipeline for reading payment or loyalty cards in Store and Forward mode.

## Declaration

```swift
func prepareStoreAndForward() async throws -> StoreAndForwardPaymentCardReaderSession
```

<a id="return-value"></a>

## Return Value

[StoreAndForwardPaymentCardReaderSession](../storeandforwardpaymentcardreadersession.md) when successful.

<a id="discussion"></a>

## Discussion

Call this function to configure Tap to Pay on iPhone on someone’s device. This method verifies that the device is able to read contactless cards and is properly configured to process reads in Store and Forward mode.

Prior to calling this method, make sure that your service provider has the Store and Forward feature enabled and that you created an online session in the last 24 hours.

> **Throws**

> [PaymentCardReaderError](../paymentcardreadererror.md) if the method fails to configure the device.
