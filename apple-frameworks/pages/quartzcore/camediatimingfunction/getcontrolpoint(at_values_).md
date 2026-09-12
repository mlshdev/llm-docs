> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/camediatimingfunction/getcontrolpoint(at:values:)](https://developer.apple.com/documentation/quartzcore/camediatimingfunction/getcontrolpoint(at:values:))

# getControlPoint(at:values:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the control point for the specified index.

## Declaration

```swift
func getControlPoint(at idx: Int, values ptr: UnsafeMutablePointer<Float>)
```

## Parameters

- `idx`: An integer specifying the index of the control point to return.
- `ptr`: A pointer to an array that, upon return, will contain the x and y values of the specified point.

<a id="Discussion"></a>

## Discussion

The value of `index` must be between 0 and 3.

# getControlPointAtIndex:values: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the control point for the specified index.

## Declaration

```objectivec
- (void) getControlPointAtIndex:(size_t) idx values:(float[2]) ptr;
```

## Parameters

- `idx`: An integer specifying the index of the control point to return.
- `ptr`: A pointer to an array that, upon return, will contain the x and y values of the specified point.

<a id="Discussion"></a>

## Discussion

The value of `index` must be between 0 and 3.
