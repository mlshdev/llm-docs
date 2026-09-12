> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/init(uuid:major:minor:identifier:)-24h7w](https://developer.apple.com/documentation/corelocation/clbeaconregion/init(uuid:major:minor:identifier:)-24h7w)

# init(uuid:major:minor:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.

## Declaration

```swift
init(uuid: UUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue, identifier: String)
```

## Parameters

- `uuid`: A [NSUUID](../../foundation/nsuuid.md) that identifies the beacons to target.
- `major`: The [CLBeaconMajorValue](../clbeaconmajorvalue.md) that characterizes beacons for this region to target.
- `minor`: The [CLBeaconMinorValue](../clbeaconminorvalue.md) that characterizes beacons for this region to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil.`

## See Also

### Creating a beacon region

- [init(beaconIdentityConstraint:identifier:)](init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [init(uuid:identifier:)](init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [init(uuid:major:identifier:)](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.

# initWithUUID:major:minor:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid major:(CLBeaconMajorValue) major minor:(CLBeaconMinorValue) minor identifier:(NSString *) identifier;
```

## Parameters

- `uuid`: A [NSUUID](../../foundation/nsuuid.md) that identifies the beacons to target.
- `major`: The [CLBeaconMajorValue](../clbeaconmajorvalue.md) that characterizes beacons for this region to target.
- `minor`: The [CLBeaconMinorValue](../clbeaconminorvalue.md) that characterizes beacons for this region to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil.`

## See Also

### Creating a beacon region

- [initWithBeaconIdentityConstraint:identifier:](init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [initWithUUID:identifier:](init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [initWithUUID:major:identifier:](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.
