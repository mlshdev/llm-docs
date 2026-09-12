> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurvetype](https://developer.apple.com/documentation/uikit/uitimingcurvetype)

# UITimingCurveType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating the type of timing information to use.

## Declaration

```swift
enum UITimingCurveType
```

## Topics

### Constants

- [UITimingCurveType.builtin](uitimingcurvetype/builtin.md): Use the built-in UIKit timing curves. Specify this value when you want to use one of the constants in the [UIView.AnimationCurve](uiview/animationcurve.md) type. Specify the desired curve using the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveType.cubic](uitimingcurvetype/cubic.md): Use a custom cubic Bézier curve. Specify the curve information using the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveType.spring](uitimingcurvetype/spring.md): Use a custom spring animation. Specify the desired curve using the [springTimingParameters](uitimingcurveprovider/springtimingparameters.md) property.
- [UITimingCurveType.composed](uitimingcurvetype/composed.md): Use a combination of timing parameters. This type of curve starts with the curve defined by the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property and modifies it using the spring information in the [springTimingParameters](uitimingcurveprovider/springtimingparameters.md) property.

### Initializers

- [init(rawValue:)](uitimingcurvetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UITimingCurveType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Constants indicating the type of timing information to use.

## Declaration

```objectivec
enum UITimingCurveType : NSInteger;
```

## Topics

### Constants

- [UITimingCurveTypeBuiltin](uitimingcurvetype/builtin.md): Use the built-in UIKit timing curves. Specify this value when you want to use one of the constants in the [UIViewAnimationCurve](uiview/animationcurve.md) type. Specify the desired curve using the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveTypeCubic](uitimingcurvetype/cubic.md): Use a custom cubic Bézier curve. Specify the curve information using the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property.
- [UITimingCurveTypeSpring](uitimingcurvetype/spring.md): Use a custom spring animation. Specify the desired curve using the [springTimingParameters](uitimingcurveprovider/springtimingparameters.md) property.
- [UITimingCurveTypeComposed](uitimingcurvetype/composed.md): Use a combination of timing parameters. This type of curve starts with the curve defined by the [cubicTimingParameters](uitimingcurveprovider/cubictimingparameters.md) property and modifies it using the spring information in the [springTimingParameters](uitimingcurveprovider/springtimingparameters.md) property.
