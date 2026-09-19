> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clbeaconregion/uuid

# uuid (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2)

The UUID value from the beacon identity constraint that defines the beacon region.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the UUID is unique to your company and is the same for all of the beacons that you install. Use the [major](major.md) and [minor](minor.md) values to differentiate the beacons in your installation.

## See Also

### Getting the beacon identity

- [major](major.md): Deprecated. The major value from the beacon identity constraint that defines the beacon region.
- [minor](minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.

# UUID (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2)

The UUID value from the beacon identity constraint that defines the beacon region.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

<a id="Discussion"></a>

## Discussion

Typically, the UUID is unique to your company and is the same for all of the beacons that you install. Use the [major](major.md) and [minor](minor.md) values to differentiate the beacons in your installation.

## See Also

### Getting the beacon identity

- [major](major.md): Deprecated. The major value from the beacon identity constraint that defines the beacon region.
- [minor](minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.
