> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview/progress](https://developer.apple.com/documentation/uikit/uiprogressview/progress)

# progress (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current progress of the progress view.

## Declaration

```swift
var progress: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The current progress is represented by a floating-point value between 0.0 and 1.0, inclusive, where 1.0 indicates the completion of the task. The default value is 0.0. Values less than 0.0 and greater than 1.0 are pinned to those limits.

## See Also

### Managing the progress bar

- [setProgress(\_:animated:)](setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.
- [observedProgress](observedprogress.md): The progress object to use for updating the progress view.

# progress (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current progress of the progress view.

## Declaration

```objectivec
@property (nonatomic) float progress;
```

<a id="Discussion"></a>

## Discussion

The current progress is represented by a floating-point value between 0.0 and 1.0, inclusive, where 1.0 indicates the completion of the task. The default value is 0.0. Values less than 0.0 and greater than 1.0 are pinned to those limits.

## See Also

### Managing the progress bar

- [setProgress:animated:](setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.
- [observedProgress](observedprogress.md): The progress object to use for updating the progress view.
