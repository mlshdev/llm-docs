> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/prepare(using:)](https://developer.apple.com/documentation/proximityreader/paymentcardreader/prepare(using:))

# prepare(using:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

Configures the pipeline for reading payment or loyalty cards.

## Declaration

```swift
func prepare(using token: PaymentCardReader.Token) async throws -> PaymentCardReaderSession
```

## Parameters

- `token`: Valid and signed token from a participating payment service provider.

<a id="return-value"></a>

## Return Value

[PaymentCardReaderSession](../paymentcardreadersession.md) when successful.

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](../adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="discussion"></a>

## Discussion

Call this function to configure Tap to Pay on iPhone on someone’s device. This method verifies that the device is able to read contactless cards and is properly configured to process transactions.

Upon successful configuration of the device, this method returns a [PaymentCardReaderSession](../paymentcardreadersession.md) object, which you use to read card information. The session remains active while your app is in the foreground. If you release the returned session, call this method again before you start any new read operations.

After calling this method, there are four possible scenarios:

- The method returns an existing [PaymentCardReaderSession](../paymentcardreadersession.md) immediately if that session is still valid.
- The method retrieves and returns a new [PaymentCardReaderSession](../paymentcardreadersession.md) from the server if the device is fully configured.
- The method updates the device’s configuration and delivers progress updates to the [events](events.md) attribute. Upon completion, the method returns a new [PaymentCardReaderSession](../paymentcardreadersession.md) for the updated configuration. This process can take anywhere from a few seconds to several minutes.
- This method throws a [PaymentCardReaderError](../paymentcardreadererror.md) if a problem occurs.

> **Throws**

> [PaymentCardReaderError](../paymentcardreadererror.md) if the method fails to configure the device.
