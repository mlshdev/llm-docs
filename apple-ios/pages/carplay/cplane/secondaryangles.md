> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplane/secondaryangles](https://developer.apple.com/documentation/carplay/cplane/secondaryangles)

# secondaryAngles (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 18.0) · iPadOS 17.4+ (deprecated in 18.0) · Mac Catalyst 17.4+ (deprecated in 18.0)

A list of the remaining angles of this lane guidance.

> Use angles to get value, Use -\[CPLane initWithAngles:\] or -\[CPLane initAngles:highlightedAngle:isPreferred:\] to create a CPLane with angles

## Declaration

```swift
var secondaryAngles: [Measurement<UnitAngle>] { get set }
```

<a id="Discussion"></a>

### Discussion

This doesn’t include the `primaryAngle`.

## See Also

### Properties

- [primaryAngle](primaryangle.md): Deprecated. A value that represents the angle the framework highlights if this lane is preferred or good.
- [status](status.md): A value that describes the lane’s status.

# secondaryAngles (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 18.0) · iPadOS 17.4+ (deprecated in 18.0) · Mac Catalyst 17.4+ (deprecated in 18.0)

A list of the remaining angles of this lane guidance.

> Use angles to get value, Use -\[CPLane initWithAngles:\] or -\[CPLane initAngles:highlightedAngle:isPreferred:\] to create a CPLane with angles

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<NSMeasurement<NSUnitAngle *> *> * secondaryAngles;
```

<a id="Discussion"></a>

### Discussion

This doesn’t include the `primaryAngle`.

## See Also

### Properties

- [primaryAngle](primaryangle.md): Deprecated. A value that represents the angle the framework highlights if this lane is preferred or good.
- [status](status.md): A value that describes the lane’s status.
