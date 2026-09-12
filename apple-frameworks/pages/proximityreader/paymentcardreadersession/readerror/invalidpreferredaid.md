> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/readerror/invalidpreferredaid](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/readerror/invalidpreferredaid)

# PaymentCardReaderSession.ReadError.invalidPreferredAID

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 17.0+

The preferred AID specified in the transaction request is invalid.

## Declaration

```swift
case invalidPreferredAID
```

<a id="discussion"></a>

## Discussion

This error occurs when you specify preferred AIDs or RIDs that aren’t between the range of 5 to 16 bytes, or the list has too many entries.

## See Also

### Getting the error

- [PaymentCardReaderSession.ReadError.cardReadFailed](cardreadfailed.md): An error occurred when reading the card.
- [PaymentCardReaderSession.ReadError.invalidAmount](invalidamount.md): The request contained an invalid amount.
- [PaymentCardReaderSession.ReadError.invalidCurrencyCode](invalidcurrencycode.md): The request included an invalid currency code.
- [PaymentCardReaderSession.ReadError.invalidVASMerchants(\_:)](invalidvasmerchants%28__%29.md): The specified list of VAS merchants list is invalid.
- [PaymentCardReaderSession.ReadError.invalidVASRequestParameters(\_:)](invalidvasrequestparameters%28__%29.md): The specified VAS parameters are invalid.
- [PaymentCardReaderSession.ReadError.nfcDisabled](nfcdisabled.md): NFC is disabled on the device.
- [PaymentCardReaderSession.ReadError.noReaderSession](noreadersession.md): No reader session available or the session isn’t ready.
- [PaymentCardReaderSession.ReadError.passcodeDisabled](passcodedisabled.md): Read operations aren’t allowed when the device’s passcode is disabled.
- [PaymentCardReaderSession.ReadError.paymentCardDeclined](paymentcarddeclined.md): The payment card declined the transaction.
- [PaymentCardReaderSession.ReadError.paymentReadFailed](paymentreadfailed.md): An internal failure prevented the read operation.
- [PaymentCardReaderSession.ReadError.pinCancelled](pincancelled.md): The current PIN capture was cancelled, also cancelling any ongoing read operation.
- [PaymentCardReaderSession.ReadError.pinNotAllowed](pinnotallowed.md): The time window allowed for a PIN capture after a card read has expired or requesting the PIN is simply not supported by your current configuration.
- [PaymentCardReaderSession.ReadError.pinEntryFailed](pinentryfailed.md): An error occurred when capturing the PIN.
- [PaymentCardReaderSession.ReadError.pinEntryTimeout](pinentrytimeout.md): The current PIN capture was not completed in allowed time.
- [PaymentCardReaderSession.ReadError.pinTokenInvalid](pintokeninvalid.md): An error that indicates an invalid PIN token.
