> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cavaluefunctionname/scale](https://developer.apple.com/documentation/quartzcore/cavaluefunctionname/scale)

# scale (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A value function scales by the input value along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) scale values.

## Declaration

```swift
static let scale: CAValueFunctionName
```

## See Also

### Constants

- [scaleX](scalex.md): A value function scales by the input value along the x-axis. Animations referencing this value transform function must provide a single animation value.
- [scaleY](scaley.md): A value function scales by the input value along the y-axis. Animations referencing this value function must provide a single animation value.
- [scaleZ](scalez.md): A value function that scales by the input value along the z-axis. Animations referencing this value function must provide a single animation value.

# kCAValueFunctionScale (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A value function scales by the input value along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) scale values.

## Declaration

```objectivec
extern CAValueFunctionName const kCAValueFunctionScale;
```

## See Also

### Constants

- [kCAValueFunctionScaleX](scalex.md): A value function scales by the input value along the x-axis. Animations referencing this value transform function must provide a single animation value.
- [kCAValueFunctionScaleY](scaley.md): A value function scales by the input value along the y-axis. Animations referencing this value function must provide a single animation value.
- [kCAValueFunctionScaleZ](scalez.md): A value function that scales by the input value along the z-axis. Animations referencing this value function must provide a single animation value.
