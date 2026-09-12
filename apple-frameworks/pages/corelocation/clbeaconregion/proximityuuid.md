> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/proximityuuid](https://developer.apple.com/documentation/corelocation/clbeaconregion/proximityuuid)

# proximityUUID (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

The unique ID of the beacons you’re targeting.

> Use [uuid](uuid.md) instead.

## Declaration

```swift
var proximityUUID: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Typically, the UUID is unique to your company and is the same for all of the beacons that you install. Use the [major](major.md) and [minor](minor.md) values to differentiate the beacons in your installation.

## See Also

### Deprecated

- [init(proximityUUID:identifier:)](init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [init(proximityUUID:major:identifier:)](init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [init(proximityUUID:major:minor:identifier:)](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.

# proximityUUID (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

The unique ID of the beacons you’re targeting.

> Use [UUID](uuid.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * proximityUUID;
```

<a id="Discussion"></a>

## Discussion

Typically, the UUID is unique to your company and is the same for all of the beacons that you install. Use the [major](major.md) and [minor](minor.md) values to differentiate the beacons in your installation.

## See Also

### Deprecated

- [initWithProximityUUID:identifier:](init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [initWithProximityUUID:major:identifier:](init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [initWithProximityUUID:major:minor:identifier:](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
