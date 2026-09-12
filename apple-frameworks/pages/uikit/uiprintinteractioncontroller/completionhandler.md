> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/completionhandler](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/completionhandler)

# UIPrintInteractionController.CompletionHandler (Swift)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A completion handler for responding to the completion of a print job or for handling printing errors.

## Declaration

```swift
typealias CompletionHandler = (UIPrintInteractionController, Bool, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

You implement this block as the final argument of [present(animated:completionHandler:)](present%28animated_completionhandler_%29.md), [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md), or [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md). When a print job concludes, you can reset any state set up for printing and do related housekeeping tasks. If the print job encountered an error, it is likely to be a programming error, so you might want to log the error for debugging purposes.

- **`printInteractionController`**: The shared instance of `UIPrintInteractionController` that is managing the print job.
- **`completed`**: A Boolean value that indicates whether the print job completed successfully.
- **`error`**: An instance of the [NSError](../../foundation/nserror.md) that contains information about the printing error. The printing domain is [UIPrintErrorDomain](../uiprinterrordomain.md). The printing error codes are described in `UIKit Printing Error Codes`. If the print job completes successfully, this parameter is `nil`.

## See Also

### Printing directly to a printer

- [print(to:completionHandler:)](print%28to_completionhandler_%29.md): Prints directly to the specified printer.

# UIPrintInteractionCompletionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A completion handler for responding to the completion of a print job or for handling printing errors.

## Declaration

```objectivec
typedef void (^)(UIPrintInteractionController *, _Bool, NSError *) UIPrintInteractionCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

You implement this block as the final argument of [presentAnimated:completionHandler:](present%28animated_completionhandler_%29.md), [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md), or [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md). When a print job concludes, you can reset any state set up for printing and do related housekeeping tasks. If the print job encountered an error, it is likely to be a programming error, so you might want to log the error for debugging purposes.

- **`printInteractionController`**: The shared instance of `UIPrintInteractionController` that is managing the print job.
- **`completed`**: A Boolean value that indicates whether the print job completed successfully.
- **`error`**: An instance of the [NSError](../../foundation/nserror.md) that contains information about the printing error. The printing domain is [UIPrintErrorDomain](../uiprinterrordomain.md). The printing error codes are described in `UIKit Printing Error Codes`. If the print job completes successfully, this parameter is `nil`.

## See Also

### Printing directly to a printer

- [printToPrinter:completionHandler:](print%28to_completionhandler_%29.md): Prints directly to the specified printer.
