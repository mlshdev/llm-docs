> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/capropertyanimation/iscumulative](https://developer.apple.com/documentation/quartzcore/capropertyanimation/iscumulative)

# isCumulative (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle.

## Declaration

```swift
var isCumulative: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle. If [false](https://developer.apple.com/documentation/swift/false), the value of the property is simply the value calculated for the current repeat cycle. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Property Value Calculation Behavior

- [isAdditive](isadditive.md): Determines if the value specified by the animation is added to the current render tree value to produce the new render tree value.
- [valueFunction](valuefunction.md): An optional value function that is applied to interpolated values.

# cumulative (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines if the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle.

## Declaration

```objectivec
@property (getter=isCumulative) BOOL cumulative;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), then the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle. If [false](https://developer.apple.com/documentation/swift/false), the value of the property is simply the value calculated for the current repeat cycle. The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Property Value Calculation Behavior

- [additive](isadditive.md): Determines if the value specified by the animation is added to the current render tree value to produce the new render tree value.
- [valueFunction](valuefunction.md): An optional value function that is applied to interpolated values.
