> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticpasspresentationsuppressionresult/notsupported](https://developer.apple.com/documentation/passkit/pkautomaticpasspresentationsuppressionresult/notsupported)

# PKAutomaticPassPresentationSuppressionResult.notSupported (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The device doesn’t support the suppression of automatic pass presentation.

## Declaration

```swift
case notSupported
```

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResult.alreadyPresenting](alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResult.denied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResult.cancelled](cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResult.success](success.md): Suppression of automatic presentation successful.

# PKAutomaticPassPresentationSuppressionResultNotSupported (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 10.2+

The device doesn’t support the suppression of automatic pass presentation.

## Declaration

```objectivec
PKAutomaticPassPresentationSuppressionResultNotSupported
```

## See Also

### Constants

- [PKAutomaticPassPresentationSuppressionResultAlreadyPresenting](alreadypresenting.md): The device is already presenting passes.
- [PKAutomaticPassPresentationSuppressionResultDenied](denied.md): The user prevented the suppression, or an internal error occurred.
- [PKAutomaticPassPresentationSuppressionResultCancelled](cancelled.md): The system canceled the suppression before calling the response handler.
- [PKAutomaticPassPresentationSuppressionResultSuccess](success.md): Suppression of automatic presentation successful.
