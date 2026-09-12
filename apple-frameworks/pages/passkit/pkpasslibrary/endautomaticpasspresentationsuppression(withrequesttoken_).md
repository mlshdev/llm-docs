> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/endautomaticpasspresentationsuppression(withrequesttoken:)](https://developer.apple.com/documentation/passkit/pkpasslibrary/endautomaticpasspresentationsuppression(withrequesttoken:))

# endAutomaticPassPresentationSuppression(withRequestToken:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Reenables the automatic display of the Apple Pay interface.

## Declaration

```swift
class func endAutomaticPassPresentationSuppression(withRequestToken requestToken: PKSuppressionRequestToken)
```

## Parameters

- `requestToken`: The token you receive when you call the [PKPassLibrary](../pkpasslibrary.md) method. If you pass in an invalid request token, the system ignores the end request.

<a id="Discussion"></a>

## Discussion

This method reenables the automatic presentation of Apple Pay passes when the device detects a compatible reader.

## See Also

### Presenting and suppressing passes

- [present(\_:)](present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation()](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

# endAutomaticPassPresentationSuppressionWithRequestToken: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Reenables the automatic display of the Apple Pay interface.

## Declaration

```objectivec
+ (void) endAutomaticPassPresentationSuppressionWithRequestToken:(PKSuppressionRequestToken) requestToken;
```

## Parameters

- `requestToken`: The token you receive when you call the [PKPassLibrary](../pkpasslibrary.md) method. If you pass in an invalid request token, the system ignores the end request.

<a id="Discussion"></a>

## Discussion

This method reenables the automatic presentation of Apple Pay passes when the device detects a compatible reader.

## See Also

### Presenting and suppressing passes

- [presentSecureElementPass:](present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.
