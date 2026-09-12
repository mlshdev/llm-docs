> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/modeltime](https://developer.apple.com/documentation/uikit/uiupdateinfo/modeltime)

# modelTime (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents a reference point for the current time of the UI update.

## Declaration

```swift
var modelTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This time provides a reference point for driving time-based model changes, like animations or physics. This property attempts to maintain constant latency between model changes and their onscreen presentation. It uses the same units as [CACurrentMediaTime()](../../quartzcore/cacurrentmediatime%28%29.md). Numerically, this time is close to the start of the UI update, but its precise relation to the UI update start time might change, depending on frame rate and other UI update parameters.

## See Also

### Getting information about timing

- [completionDeadlineTime](completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.
- [estimatedPresentationTime](estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.

# modelTime (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents a reference point for the current time of the UI update.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval modelTime;
```

<a id="Discussion"></a>

## Discussion

This time provides a reference point for driving time-based model changes, like animations or physics. This property attempts to maintain constant latency between model changes and their onscreen presentation. It uses the same units as [CACurrentMediaTime](../../quartzcore/cacurrentmediatime%28%29.md). Numerically, this time is close to the start of the UI update, but its precise relation to the UI update start time might change, depending on frame rate and other UI update parameters.

## See Also

### Getting information about timing

- [completionDeadlineTime](completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.
- [estimatedPresentationTime](estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.
