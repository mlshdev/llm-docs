> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticpasspresentationsuppressionresult/cancelled](https://developer.apple.com/documentation/passkit/pkautomaticpasspresentationsuppressionresult/cancelled)

# PKAutomaticPassPresentationSuppressionResult.cancelled (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The system canceled the suppression before calling the response handler.

## Declaration

```swift
case cancelled
```

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResult.notSupported](notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResult.alreadyPresenting](alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResult.denied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResult.success](success.md): Suppression of automatic presentation successful.

# PKAutomaticPassPresentationSuppressionResultCancelled (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The system canceled the suppression before calling the response handler.

## Declaration

```objectivec
PKAutomaticPassPresentationSuppressionResultCancelled
```

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResultNotSupported](notsupported.md): The device doesn’t support the suppression of automatic pass presentation.
- [PKAutomaticPassPresentationSuppressionResultAlreadyPresenting](alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResultDenied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResultSuccess](success.md): Suppression of automatic presentation successful.
