> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview/setprogress(_:animated:)](https://developer.apple.com/documentation/uikit/uiprogressview/setprogress(_:animated:))

# setProgress(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adjusts the current progress of the progress view, optionally animating the change.

## Declaration

```swift
func setProgress(_ progress: Float, animated: Bool)
```

## Parameters

- `progress`: The new progress value.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the change should be animated, [false](https://developer.apple.com/documentation/swift/false) if the change should happen immediately.

<a id="Discussion"></a>

## Discussion

The current progress is represented by a floating-point value between 0.0 and 1.0, inclusive, where 1.0 indicates the completion of the task. The default value is 0.0. Values less than 0.0 and greater than 1.0 are pinned to those limits.

## See Also

### Managing the progress bar

- [progress](progress.md): The current progress of the progress view.
- [observedProgress](observedprogress.md): The progress object to use for updating the progress view.

# setProgress:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adjusts the current progress of the progress view, optionally animating the change.

## Declaration

```objectivec
- (void) setProgress:(float) progress animated:(BOOL) animated;
```

## Parameters

- `progress`: The new progress value.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) if the change should be animated, [false](https://developer.apple.com/documentation/swift/false) if the change should happen immediately.

<a id="Discussion"></a>

## Discussion

The current progress is represented by a floating-point value between 0.0 and 1.0, inclusive, where 1.0 indicates the completion of the task. The default value is 0.0. Values less than 0.0 and greater than 1.0 are pinned to those limits.

## See Also

### Managing the progress bar

- [progress](progress.md): The current progress of the progress view.
- [observedProgress](observedprogress.md): The progress object to use for updating the progress view.
