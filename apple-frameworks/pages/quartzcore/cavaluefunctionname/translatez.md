> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cavaluefunctionname/translatez](https://developer.apple.com/documentation/quartzcore/cavaluefunctionname/translatez)

# translateZ (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A value function translates by the input value along the z-axis. Animations referencing this value function must provide a single input value.

## Declaration

```swift
static let translateZ: CAValueFunctionName
```

## See Also

### Constants

- [translate](translate.md): A value function that translates by the input values along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) translate values.
- [translateX](translatex.md): A value function translates by the input value along the x-axis. Animations referencing this value function must provide a single input value.
- [translateY](translatey.md): A value function translates by the input value along the y-axis. Animations referencing this value function must provide a single input value.

# kCAValueFunctionTranslateZ (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

A value function translates by the input value along the z-axis. Animations referencing this value function must provide a single input value.

## Declaration

```objectivec
extern CAValueFunctionName const kCAValueFunctionTranslateZ;
```

## See Also

### Constants

- [kCAValueFunctionTranslate](translate.md): A value function that translates by the input values along all three axis. Animations using this value transform function must provide animation values in an `NSArray` of three `NSNumber` instances that specify the (x, y, z) translate values.
- [kCAValueFunctionTranslateX](translatex.md): A value function translates by the input value along the x-axis. Animations referencing this value function must provide a single input value.
- [kCAValueFunctionTranslateY](translatey.md): A value function translates by the input value along the y-axis. Animations referencing this value function must provide a single input value.
