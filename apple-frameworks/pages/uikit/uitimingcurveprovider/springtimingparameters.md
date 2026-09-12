> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurveprovider/springtimingparameters](https://developer.apple.com/documentation/uikit/uitimingcurveprovider/springtimingparameters)

# springTimingParameters (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The spring-based timing parameters to use.

## Declaration

```swift
var springTimingParameters: UISpringTimingParameters? { get }
```

<a id="Discussion"></a>

## Discussion

Implement this property and use it to provide spring-based timing information. If the value of the [timingCurveType](timingcurvetype.md) property is [UITimingCurveType.spring](../uitimingcurvetype/spring.md) or [UITimingCurveType.composed](../uitimingcurvetype/composed.md), you must return an object from this property.

For more information about configuring spring-based timing parameters, see [UISpringTimingParameters](../uispringtimingparameters.md).

## See Also

### Getting the timing information

- [timingCurveType](timingcurvetype.md): The type of timing information to use.
- [cubicTimingParameters](cubictimingparameters.md): The cubic timing parameters to use.

# springTimingParameters (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The spring-based timing parameters to use.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UISpringTimingParameters * springTimingParameters;
```

<a id="Discussion"></a>

## Discussion

Implement this property and use it to provide spring-based timing information. If the value of the [timingCurveType](timingcurvetype.md) property is [UITimingCurveTypeSpring](../uitimingcurvetype/spring.md) or [UITimingCurveTypeComposed](../uitimingcurvetype/composed.md), you must return an object from this property.

For more information about configuring spring-based timing parameters, see [UISpringTimingParameters](../uispringtimingparameters.md).

## See Also

### Getting the timing information

- [timingCurveType](timingcurvetype.md): The type of timing information to use.
- [cubicTimingParameters](cubictimingparameters.md): The cubic timing parameters to use.
