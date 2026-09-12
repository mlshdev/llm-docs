> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/major](https://developer.apple.com/documentation/corelocation/clbeaconregion/major)

# major (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

The major value from the beacon identity constraint that defines the beacon region.

## Declaration

```swift
@NSCopying var major: NSNumber? { get }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a [major](../clbeaconidentityconstraint/major.md) value for the beacon, the value of this property is `nil`. Operations that compare a beacon’s identity characteristics with the constraint’s characteristics ignore the `major` value if this property is `nil`.

## See Also

### Getting the beacon identity

- [uuid](uuid.md): Deprecated. The UUID value from the beacon identity constraint that defines the beacon region.
- [minor](minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.

# major (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

The major value from the beacon identity constraint that defines the beacon region.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSNumber * major;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a [major](../clbeaconidentityconstraint/major.md) value for the beacon, the value of this property is `nil`. Operations that compare a beacon’s identity characteristics with the constraint’s characteristics ignore the `major` value if this property is `nil`.

## See Also

### Getting the beacon identity

- [UUID](uuid.md): Deprecated. The UUID value from the beacon identity constraint that defines the beacon region.
- [minor](minor.md): Deprecated. The minor value from the beacon identity constraint that defines the beacon region.
- [beaconIdentityConstraint](beaconidentityconstraint.md): Deprecated. The beacon identity constraint that defines the beacon region.
