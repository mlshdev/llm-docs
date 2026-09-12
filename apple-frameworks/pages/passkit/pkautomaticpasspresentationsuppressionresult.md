> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticpasspresentationsuppressionresult](https://developer.apple.com/documentation/passkit/pkautomaticpasspresentationsuppressionresult)

# PKAutomaticPassPresentationSuppressionResult (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The result of an attempt to suppress automatic pass presentation.

## Declaration

```swift
enum PKAutomaticPassPresentationSuppressionResult
```

## Topics

### Constants

- [PKAutomaticPassPresentationSuppressionResult.notSupported](pkautomaticpasspresentationsuppressionresult/notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResult.alreadyPresenting](pkautomaticpasspresentationsuppressionresult/alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResult.denied](pkautomaticpasspresentationsuppressionresult/denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResult.cancelled](pkautomaticpasspresentationsuppressionresult/cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResult.success](pkautomaticpasspresentationsuppressionresult/success.md): Suppression of automatic presentation successful.

### Initializers

- [init(rawValue:)](pkautomaticpasspresentationsuppressionresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presenting and suppressing passes

- [present(\_:)](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation()](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

# PKAutomaticPassPresentationSuppressionResult (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The result of an attempt to suppress automatic pass presentation.

## Declaration

```objectivec
enum PKAutomaticPassPresentationSuppressionResult : NSUInteger;
```

## Topics

### Constants

- [PKAutomaticPassPresentationSuppressionResultNotSupported](pkautomaticpasspresentationsuppressionresult/notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResultAlreadyPresenting](pkautomaticpasspresentationsuppressionresult/alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResultDenied](pkautomaticpasspresentationsuppressionresult/denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResultCancelled](pkautomaticpasspresentationsuppressionresult/cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResultSuccess](pkautomaticpasspresentationsuppressionresult/success.md): Suppression of automatic presentation successful.

## See Also

### Presenting and suppressing passes

- [presentSecureElementPass:](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.
