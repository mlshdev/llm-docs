> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/addprogressrange(fromstart:toend:)](https://developer.apple.com/documentation/classkit/clsactivity/addprogressrange(fromstart:toend:))

# addProgressRange(fromStart:toEnd:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Adds a progress range to a given activity.

## Declaration

```swift
func addProgressRange(fromStart start: Double, toEnd end: Double)
```

## Parameters

- `start`: The beginning of the new range to add. This should be fractional value between 0 and 1, inclusive.
- `end`: The end of the new range to add. This should be larger than the `start` value and less than or equal to one.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

## See Also

### Measuring progress

- [progress](progress.md): A measure of progress through the task, given as a fraction in the range \[0, 1\].

# addProgressRangeFromStart:toEnd: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Adds a progress range to a given activity.

## Declaration

```objectivec
- (void) addProgressRangeFromStart:(double) start toEnd:(double) end;
```

## Parameters

- `start`: The beginning of the new range to add. This should be fractional value between 0 and 1, inclusive.
- `end`: The end of the new range to add. This should be larger than the `start` value and less than or equal to one.

## Mentioned In

- [Recording student progress](../recording-student-progress.md)

## See Also

### Measuring progress

- [progress](progress.md): A measure of progress through the task, given as a fraction in the range \[0, 1\].
