> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaysession/applepaysession](https://developer.apple.com/documentation/applepayontheweb/applepaysession/applepaysession)

# ApplePaySession

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Initializer  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

The entry point for Apple Pay on the web.

## Declaration

```
new ApplePaySession();
```

## Parameters

- `version`: The Apple Pay version number your website supports. See [Apple Pay on the Web version history](../apple-pay-on-the-web-version-history.md) for version information.
- `paymentRequest`: An [ApplePayPaymentRequest](../applepaypaymentrequest.md) object that contains the information to be displayed on the Apple Pay payment sheet.

## Mentioned In

- [Apple Pay on the Web Version 12 Release Notes](../apple-pay-on-the-web-version-12-release-notes.md)
- [Creating an Apple Pay Session](../creating-an-apple-pay-session.md)

<a id="Discussion"></a>

## Discussion

Creating an `ApplePaySession` object throws a JavaScript exception if any of the following occur:

- Any Apple Pay JS API is called from an insecure page.
- You pass an invalid payment request. Payment requests are invalid if they contain missing, unknown, or invalid properties, or if the total is zero or less.
- You attempt to create [ApplePaySession](../applepaysession.md) outside of a gesture handler.

Check [supportsVersion](supportsversion.md) before using any Apple Pay JS API that depends on Safari to support a particular version number.

## See Also

### Related Documentation

- [begin](begin.md): Begins the merchant validation process.
- [supportsVersion](supportsversion.md): Detects whether a web browser supports a particular Apple Pay version.
