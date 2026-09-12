> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob(_:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontrollerdelegate/printinteractioncontrollerwillstartjob(_:))

# printInteractionControllerWillStartJob(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the print job is about to start.

## Declaration

```swift
optional func printInteractionControllerWillStartJob(_ printInteractionController: UIPrintInteractionController)
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="Discussion"></a>

## Discussion

You can implement this method to do set-up tasks related to the print job. For example, an application that needs to do intensive rendering could implement this method to pause animations. This method is called before drawing begins but after the printing user interface is dismissed.

## See Also

### Related Documentation

- [printInteractionControllerDidDismissPrinterOptions(\_:)](printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.

### Responding to the Start and End of a Print Job

- [printInteractionControllerDidFinishJob(\_:)](printinteractioncontrollerdidfinishjob%28__%29.md): Tells the delegate that the print job has ended.

# printInteractionControllerWillStartJob: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the print job is about to start.

## Declaration

```objectivec
- (void) printInteractionControllerWillStartJob:(UIPrintInteractionController *) printInteractionController;
```

## Parameters

- `printInteractionController`: The shared instance of [UIPrintInteractionController](../uiprintinteractioncontroller.md) that is managing the print job.

<a id="Discussion"></a>

## Discussion

You can implement this method to do set-up tasks related to the print job. For example, an application that needs to do intensive rendering could implement this method to pause animations. This method is called before drawing begins but after the printing user interface is dismissed.

## See Also

### Related Documentation

- [printInteractionControllerDidDismissPrinterOptions:](printinteractioncontrollerdiddismissprinteroptions%28__%29.md): Tells the delegate that the device is dismissing the printing-options user interface.

### Responding to the Start and End of a Print Job

- [printInteractionControllerDidFinishJob:](printinteractioncontrollerdidfinishjob%28__%29.md): Tells the delegate that the print job has ended.
