> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdateinfo/estimatedpresentationtime](https://developer.apple.com/documentation/uikit/uiupdateinfo/estimatedpresentationtime)

# estimatedPresentationTime (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents an estimate for when current UI update changes become visible onscreen.

## Declaration

```swift
var estimatedPresentationTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

This time is an estimate, so the actual time when changes become visible might differ.

## See Also

### Getting information about timing

- [modelTime](modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [completionDeadlineTime](completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.

# estimatedPresentationTime (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

The time interval that represents an estimate for when current UI update changes become visible onscreen.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval estimatedPresentationTime;
```

<a id="Discussion"></a>

## Discussion

This time is an estimate, so the actual time when changes become visible might differ.

## See Also

### Getting information about timing

- [modelTime](modeltime.md): The time interval that represents a reference point for the current time of the UI update.
- [completionDeadlineTime](completiondeadlinetime.md): The time interval that represents the time by which an app needs to finish submitting changes to the render server.
