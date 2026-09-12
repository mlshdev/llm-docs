> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/present(_:)-9467u](https://developer.apple.com/documentation/passkit/pkpasslibrary/present(_:)-9467u)

# present(\_:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Presents a Secure Element pass.

## Declaration

```swift
func present(_ pass: PKSecureElementPass)
```

## Parameters

- `pass`: The Secure Element pass to present.

<a id="Discussion"></a>

## Discussion

Your app can only present provisioned passes. The library must contain `pass`. Otherwise, calling this method has no effect.

## See Also

### Presenting and suppressing passes

- [isSuppressingAutomaticPassPresentation()](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

# presentSecureElementPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.12+ · visionOS 1.0+

Presents a Secure Element pass.

## Declaration

```objectivec
- (void) presentSecureElementPass:(PKSecureElementPass *) pass;
```

## Parameters

- `pass`: The Secure Element pass to present.

<a id="Discussion"></a>

## Discussion

Your app can only present provisioned passes. The library must contain `pass`. Otherwise, calling this method has no effect.

## See Also

### Presenting and suppressing passes

- [isSuppressingAutomaticPassPresentation](issuppressingautomaticpasspresentation%28%29.md): Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.
