> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrary/issuppressingautomaticpasspresentation()](https://developer.apple.com/documentation/passkit/pkpasslibrary/issuppressingautomaticpasspresentation())

# isSuppressingAutomaticPassPresentation() (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.

## Declaration

```swift
class func isSuppressingAutomaticPassPresentation() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system suppresses Apple Pay passes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Presenting and suppressing passes

- [present(\_:)](present%28__%29-9467u.md): Presents a Secure Element pass.
- [requestAutomaticPassPresentationSuppression(responseHandler:)](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppression(withRequestToken:)](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.

# isSuppressingAutomaticPassPresentation (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 10.2+

Returns a Boolean value that indicates whether the system suppresses the automatic presentation of Apple Pay passes.

## Declaration

```objectivec
+ (BOOL) isSuppressingAutomaticPassPresentation;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system suppresses Apple Pay passes; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Presenting and suppressing passes

- [presentSecureElementPass:](present%28__%29-9467u.md): Presents a Secure Element pass.
- [requestAutomaticPassPresentationSuppressionWithResponseHandler:](requestautomaticpasspresentationsuppression%28responsehandler_%29.md): Prevents the device from automatically displaying the Apple Pay interface.
- [PKAutomaticPassPresentationSuppressionResult](../pkautomaticpasspresentationsuppressionresult.md): The result of an attempt to suppress automatic pass presentation.
- [endAutomaticPassPresentationSuppressionWithRequestToken:](endautomaticpasspresentationsuppression%28withrequesttoken_%29.md): Reenables the automatic display of the Apple Pay interface.
- [PKSuppressionRequestToken](../pksuppressionrequesttoken.md): A token that represents a request to suppress the automatic presentation of payment passes.
