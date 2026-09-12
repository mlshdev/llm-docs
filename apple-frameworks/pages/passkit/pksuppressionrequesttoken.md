> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuppressionrequesttoken](https://developer.apple.com/documentation/passkit/pksuppressionrequesttoken)

# PKSuppressionRequestToken (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A token that represents a request to suppress the automatic presentation of payment passes.

## Declaration

```swift
typealias PKSuppressionRequestToken = Int
```

<a id="Discussion"></a>

## Discussion

You receive a suppression request token when you begin suppressing the automatic presentation of passes. Use the token to end the suppression and reenable Apple Pay.

## See Also

### Presenting and suppressing passes

- [present(\_:)](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation()](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.

# PKSuppressionRequestToken (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A token that represents a request to suppress the automatic presentation of payment passes.

## Declaration

```objectivec
typedef NSUInteger PKSuppressionRequestToken;
```

<a id="Discussion"></a>

## Discussion

You receive a suppression request token when you begin suppressing the automatic presentation of passes. Use the token to end the suppression and reenable Apple Pay.

## See Also

### Presenting and suppressing passes

- [presentSecureElementPass:](pkpasslibrary/present%28__%29-9467u.md): Presents a Secure Element pass.
- [isSuppressingAutomaticPassPresentation](pkpasslibrary/issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](pkpasslibrary/requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](pkpasslibrary/endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
