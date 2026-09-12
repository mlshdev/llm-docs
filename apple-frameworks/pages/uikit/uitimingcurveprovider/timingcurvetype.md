> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitimingcurveprovider/timingcurvetype](https://developer.apple.com/documentation/uikit/uitimingcurveprovider/timingcurvetype)

# timingCurveType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The type of timing information to use.

## Declaration

```swift
var timingCurveType: UITimingCurveType { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of timing information your timing curve object supplies. The value of this property determines whether the view property animator uses the object in the [cubicTimingParameters](cubictimingparameters.md) or [springTimingParameters](springtimingparameters.md) property for timing information.

## See Also

### Getting the timing information

- [cubicTimingParameters](cubictimingparameters.md): The cubic timing parameters to use.
- [springTimingParameters](springtimingparameters.md): The spring-based timing parameters to use.

# timingCurveType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The type of timing information to use.

## Declaration

```objectivec
@property (nonatomic, readonly) UITimingCurveType timingCurveType;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the type of timing information your timing curve object supplies. The value of this property determines whether the view property animator uses the object in the [cubicTimingParameters](cubictimingparameters.md) or [springTimingParameters](springtimingparameters.md) property for timing information.

## See Also

### Getting the timing information

- [cubicTimingParameters](cubictimingparameters.md): The cubic timing parameters to use.
- [springTimingParameters](springtimingparameters.md): The spring-based timing parameters to use.
