> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/progress](https://developer.apple.com/documentation/classkit/clsactivity/progress)

# progress (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A measure of progress through the task, given as a fraction in the range \[0, 1\].

## Declaration

```swift
var progress: Double { get set }
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

It’s up to you to define what progress means for each task in your app. For example, you might define progress through a quiz context as the fraction of questions answered. You could report the progress through a video context as a fraction representing the number of minutes watched out of the total minutes in the video.

## See Also

### Measuring progress

- [addProgressRange(fromStart:toEnd:)](addprogressrange%28fromstart_toend_%29.md): Adds a progress range to a given activity.

# progress (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A measure of progress through the task, given as a fraction in the range \[0, 1\].

## Declaration

```objectivec
@property (nonatomic, assign) double progress;
```

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

<a id="Discussion"></a>

## Discussion

It’s up to you to define what progress means for each task in your app. For example, you might define progress through a quiz context as the fraction of questions answered. You could report the progress through a video context as a fraction representing the number of minutes watched out of the total minutes in the video.

## See Also

### Measuring progress

- [addProgressRangeFromStart:toEnd:](addprogressrange%28fromstart_toend_%29.md): Adds a progress range to a given activity.
