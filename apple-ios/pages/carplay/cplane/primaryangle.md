> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplane/primaryangle](https://developer.apple.com/documentation/carplay/cplane/primaryangle)

# primaryAngle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 18.0) · iPadOS 17.4+ (deprecated in 18.0) · Mac Catalyst 17.4+ (deprecated in 18.0)

A value that represents the angle the framework highlights if this lane is preferred or good.

> Use highlightedAngle to get value, use -\[CPLane initAngles:highlightedAngle:isPreferred:\] to create a CPLane with highlightedAngle set

## Declaration

```swift
var primaryAngle: Measurement<UnitAngle> { get set }
```

<a id="Discussion"></a>

## Discussion

If `primaryAngle` is present it can’t be included in [secondaryAngles](secondaryangles.md).

## See Also

### Properties

- [secondaryAngles](secondaryangles.md): Deprecated. A list of the remaining angles of this lane guidance.
- [status](status.md): A value that describes the lane’s status.

# primaryAngle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 18.0) · iPadOS 17.4+ (deprecated in 18.0) · Mac Catalyst 17.4+ (deprecated in 18.0)

A value that represents the angle the framework highlights if this lane is preferred or good.

> Use highlightedAngle to get value, use -\[CPLane initAngles:highlightedAngle:isPreferred:\] to create a CPLane with highlightedAngle set

## Declaration

```objectivec
@property (nonatomic, strong) NSMeasurement<NSUnitAngle *> * primaryAngle;
```

<a id="Discussion"></a>

## Discussion

If `primaryAngle` is present it can’t be included in [secondaryAngles](secondaryangles.md).

## See Also

### Properties

- [secondaryAngles](secondaryangles.md): Deprecated. A list of the remaining angles of this lane guidance.
- [status](status.md): A value that describes the lane’s status.
