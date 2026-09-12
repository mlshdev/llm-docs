> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurvetype/spring](https://developer.apple.com/documentation/uikit/uitimingcurvetype/spring)

# UITimingCurveType.spring (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Use a custom spring animation. Specify the desired curve using the [springTimingParameters](../uitimingcurveprovider/springtimingparameters.md) property.

## Declaration

```swift
case spring
```

## See Also

### Constants

- [UITimingCurveType.builtin](builtin.md): Use the built-in UIKit timing curves. Specify this value when you want to use one of the constants in the [UIView.AnimationCurve](../uiview/animationcurve.md) type. Specify the desired curve using the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveType.cubic](cubic.md): Use a custom cubic Bézier curve. Specify the curve information using the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveType.composed](composed.md): Use a combination of timing parameters. This type of curve starts with the curve defined by the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property and modifies it using the spring information in the [springTimingParameters](../uitimingcurveprovider/springtimingparameters.md) property.

# UITimingCurveTypeSpring (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Use a custom spring animation. Specify the desired curve using the [springTimingParameters](../uitimingcurveprovider/springtimingparameters.md) property.

## Declaration

```objectivec
UITimingCurveTypeSpring
```

## See Also

### Constants

- [UITimingCurveTypeBuiltin](builtin.md): Use the built-in UIKit timing curves. Specify this value when you want to use one of the constants in the [UIViewAnimationCurve](../uiview/animationcurve.md) type. Specify the desired curve using the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveTypeCubic](cubic.md): Use a custom cubic Bézier curve. Specify the curve information using the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveTypeComposed](composed.md): Use a combination of timing parameters. This type of curve starts with the curve defined by the [cubicTimingParameters](../uitimingcurveprovider/cubictimingparameters.md) property and modifies it using the spring information in the [springTimingParameters](../uitimingcurveprovider/springtimingparameters.md) property.
