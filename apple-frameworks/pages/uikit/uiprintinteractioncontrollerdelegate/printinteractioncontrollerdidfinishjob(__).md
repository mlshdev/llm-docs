> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidfinishjob(_:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerdidfinishjob(_:))

# printInteractionControllerDidFinishJob(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the print job has ended.

## Declaration

```swift
optional func printInteractionControllerDidFinishJob(_ printInteractionController: UIPrintInteractionController)
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="Discussion"></a>

## Discussion

You can implement this method to do clean-up tasks related to the print job. This method is called after the last page of the print job is generated but before the completion handler (a block handler of type [UIPrintInteractionController.CompletionHandler](../uiprintinteractioncontroller/completionhandler.md)) is called.

## See Also

### Responding to the Start and End of a Print Job

- [printInteractionControllerWillStartJob(\_:)](printinteractioncontrollerwillstartjob%28__%29.md): Tells the delegate that the print job is about to start.

# printInteractionControllerDidFinishJob: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the print job has ended.

## Declaration

```objectivec
- (void) printInteractionControllerDidFinishJob:(UIPrintInteractionController *) printInteractionController;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="Discussion"></a>

## Discussion

You can implement this method to do clean-up tasks related to the print job. This method is called after the last page of the print job is generated but before the completion handler (a block handler of type [UIPrintInteractionCompletionHandler](../uiprintinteractioncontroller/completionhandler.md)) is called.

## See Also

### Responding to the Start and End of a Print Job

- [printInteractionControllerWillStartJob:](printinteractioncontrollerwillstartjob%28__%29.md): Tells the delegate that the print job is about to start.
