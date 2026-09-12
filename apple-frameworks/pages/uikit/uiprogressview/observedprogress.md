> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprogressview/observedprogress](https://developer.apple.com/documentation/uikit/uiprogressview/observedprogress)

# observedProgress (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The progress object to use for updating the progress view.

## Declaration

```swift
var observedProgress: Progress? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set, the progress view updates its progress value automatically using information it receives from the [Progress](../../foundation/progress.md) object. (Progress updates are animated.) Set the property to `nil` when you want to update the progress manually. The default value of this property is `nil`.

For more information about configuring a progress object to manage progress information, see [Progress](../../foundation/progress.md).

## See Also

### Managing the progress bar

- [progress](progress.md): The current progress of the progress view.
- [setProgress(\_:animated:)](setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.

# observedProgress (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The progress object to use for updating the progress view.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSProgress * observedProgress;
```

<a id="Discussion"></a>

## Discussion

When this property is set, the progress view updates its progress value automatically using information it receives from the [NSProgress](../../foundation/progress.md) object. (Progress updates are animated.) Set the property to `nil` when you want to update the progress manually. The default value of this property is `nil`.

For more information about configuring a progress object to manage progress information, see [NSProgress](../../foundation/progress.md).

## See Also

### Managing the progress bar

- [progress](progress.md): The current progress of the progress view.
- [setProgress:animated:](setprogress%28__animated_%29.md): Adjusts the current progress of the progress view, optionally animating the change.
