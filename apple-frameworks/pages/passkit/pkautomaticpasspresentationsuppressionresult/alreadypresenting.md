> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticpasspresentationsuppressionresult/alreadypresenting](https://developer.apple.com/documentation/passkit/pkautomaticpasspresentationsuppressionresult/alreadypresenting)

# PKAutomaticPassPresentationSuppressionResult.alreadyPresenting (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The device is already presenting passes.

## Declaration

```swift
case alreadyPresenting
```

<a id="Discussion"></a>

## Discussion

The device is unable to suppress automatic presentation of passes.

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResult.notSupported](notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResult.denied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResult.cancelled](cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResult.success](success.md): Suppression of automatic presentation successful.

# PKAutomaticPassPresentationSuppressionResultAlreadyPresenting (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The device is already presenting passes.

## Declaration

```objectivec
PKAutomaticPassPresentationSuppressionResultAlreadyPresenting
```

<a id="Discussion"></a>

## Discussion

The device is unable to suppress automatic presentation of passes.

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResultNotSupported](notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResultDenied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResultCancelled](cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResultSuccess](success.md): Suppression of automatic presentation successful.
