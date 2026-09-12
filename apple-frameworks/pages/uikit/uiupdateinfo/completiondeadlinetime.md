> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/completiondeadlinetime](https://developer.apple.com/documentation/uikit/uiupdateinfo/completiondeadlinetime)

# completionDeadlineTime (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents the time by which an app needs to finish submitting changes to the render server.

## Declaration

```swift
var completionDeadlineTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Missing this completion deadline results in a presentation delay.

## See Also

### Getting information about timing

- [modelTime](modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [estimatedPresentationTime](estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.

# completionDeadlineTime (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents the time by which an app needs to finish submitting changes to the render server.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval completionDeadlineTime;
```

<a id="Discussion"></a>

## Discussion

Missing this completion deadline results in a presentation delay.

## See Also

### Getting information about timing

- [modelTime](modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [estimatedPresentationTime](estimatedpresentationtime.md): The time interval that represents an estimate for when current UI update changes become visible onscreen.
