> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/capropertyanimation/valuefunction](https://developer.apple.com/documentation/quartzcore/capropertyanimation/valuefunction)

# valueFunction (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional value function that is applied to interpolated values.

## Declaration

```swift
var valueFunction: CAValueFunction? { get set }
```

<a id="Discussion"></a>

## Discussion

If the `valueFunction` property is not `nil`, the function is applied to the values interpolated by the animation as they are applied to the presentation layer. Defaults to `nil`.

## See Also

### Property Value Calculation Behavior

- [isCumulative](iscumulative.md): Determines if the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle.
- [isAdditive](isadditive.md): Determines if the value specified by the animation is added to the current render tree value to produce the new render tree value.

# valueFunction (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An optional value function that is applied to interpolated values.

## Declaration

```objectivec
@property (strong, nullable) CAValueFunction * valueFunction;
```

<a id="Discussion"></a>

## Discussion

If the `valueFunction` property is not `nil`, the function is applied to the values interpolated by the animation as they are applied to the presentation layer. Defaults to `nil`.

## See Also

### Property Value Calculation Behavior

- [cumulative](iscumulative.md): Determines if the value of the property is the value at the end of the previous repeat cycle, plus the value of the current repeat cycle.
- [additive](isadditive.md): Determines if the value specified by the animation is added to the current render tree value to produce the new render tree value.
