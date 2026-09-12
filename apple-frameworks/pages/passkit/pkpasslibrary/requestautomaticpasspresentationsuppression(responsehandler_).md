> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/requestautomaticpasspresentationsuppression(responsehandler:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/requestautomaticpasspresentationsuppression(responsehandler:))

# requestAutomaticPassPresentationSuppression(responseHandler:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Prevents the device from automatically displaying the Apple Pay interface.

## Declaration

```swift
class func requestAutomaticPassPresentationSuppression(responseHandler: @escaping (PKAutomaticPassPresentationSuppressionResult) -> Void) -> PKSuppressionRequestToken
```

## Parameters

- `responseHandler`: The response handler for the request.

  - **result**: The success or failure of the request.

<a id="return-value"></a>

## Return Value

A [PKPassLibrary](../pkpasslibrary.md) value that represents this request. Use this token to end the suppression of Apple Pay passes.

<a id="discussion"></a>

## Discussion

If the device doesn’t support this feature, this method fails immediately and returns a token value of `0`. However, PassKit still calls the response handler.

<a id="Discussion"></a>

## Discussion

Use this method only in apps that must stay in the foreground when operating near NFC or other RF readers. This method prevents the device from automatically displaying the Apple Pay passes when it detects a compatible reader. This suppression occurs only while the app is in the foreground. The system automatically reenables the Apple Pay interface when the app goes to the background. If the app resumes, the system automatically suppresses the Apple Pay interface again.

This method operates asynchronously, and schedules the request and returns immediately. The system performs the actual request on a background thread, and after it completes, the system calls the response handler on an arbitrary queue and provides the result.

The first time the system calls this method, it alerts the user that Apple Pay is unavailable. This alert doesn’t display again until you uninstall and reinstall the app.

> **Important**

>  This method requires a special entitlement from Apple. If the entitlement isn’t present, the request fails with a [PKPassLibrary](../pkpasslibrary.md) result. For more information, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Presenting and suppressing passes

- [present(\_:)](present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation()](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

# requestAutomaticPassPresentationSuppressionWithResponseHandler: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Prevents the device from automatically displaying the Apple Pay interface.

## Declaration

```objectivec
+ (PKSuppressionRequestToken) requestAutomaticPassPresentationSuppressionWithResponseHandler:(void (^)(PKAutomaticPassPresentationSuppressionResult result)) responseHandler;
```

## Parameters

- `responseHandler`: The response handler for the request.

  - **result**: The success or failure of the request.

<a id="return-value"></a>

## Return Value

A [PKPassLibrary](../pkpasslibrary.md) value that represents this request. Use this token to end the suppression of Apple Pay passes.

<a id="discussion"></a>

## Discussion

If the device doesn’t support this feature, this method fails immediately and returns a token value of `0`. However, PassKit still calls the response handler.

<a id="Discussion"></a>

## Discussion

Use this method only in apps that must stay in the foreground when operating near NFC or other RF readers. This method prevents the device from automatically displaying the Apple Pay passes when it detects a compatible reader. This suppression occurs only while the app is in the foreground. The system automatically reenables the Apple Pay interface when the app goes to the background. If the app resumes, the system automatically suppresses the Apple Pay interface again.

This method operates asynchronously, and schedules the request and returns immediately. The system performs the actual request on a background thread, and after it completes, the system calls the response handler on an arbitrary queue and provides the result.

The first time the system calls this method, it alerts the user that Apple Pay is unavailable. This alert doesn’t display again until you uninstall and reinstall the app.

> **Important**

>  This method requires a special entitlement from Apple. If the entitlement isn’t present, the request fails with a [PKPassLibrary](../pkpasslibrary.md) result. For more information, see [developer.apple.com/apple-pay/](https://developer.apple.com/apple-pay/).

## See Also

### Presenting and suppressing passes

- [presentSecureElementPass:](present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.
