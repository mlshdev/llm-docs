> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerdirectionpad/setvalueforxaxis(_:yaxis:)](https://developer.apple.com/documentation/gamecontroller/gccontrollerdirectionpad/setvalueforxaxis(_:yaxis:))

# setValueForXAxis(\_:yAxis:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the input values of a snapshot of a directional pad.

## Declaration

```swift
func setValueForXAxis(_ xAxis: Float, yAxis: Float)
```

## Parameters

- `xAxis`: A normalized value of the x-axis ranging from `-1` to `1`.
- `yAxis`: A normalized value for the y-axis ranging from `-1` to `1`.

<a id="Discussion"></a>

## Discussion

This method does nothing if the associated controller isn’t a snapshot (its [isSnapshot](../gccontroller/issnapshot.md) property is [false](https://developer.apple.com/documentation/swift/false)`)`. Otherwise, this method sets the value of the direction pad’s buttons as well.

# setValueForXAxis:yAxis: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Sets the input values of a snapshot of a directional pad.

## Declaration

```objectivec
- (void) setValueForXAxis:(float) xAxis yAxis:(float) yAxis;
```

## Parameters

- `xAxis`: A normalized value of the x-axis ranging from `-1` to `1`.
- `yAxis`: A normalized value for the y-axis ranging from `-1` to `1`.

<a id="Discussion"></a>

## Discussion

This method does nothing if the associated controller isn’t a snapshot (its [snapshot](../gccontroller/issnapshot.md) property is [false](https://developer.apple.com/documentation/swift/false)`)`. Otherwise, this method sets the value of the direction pad’s buttons as well.
