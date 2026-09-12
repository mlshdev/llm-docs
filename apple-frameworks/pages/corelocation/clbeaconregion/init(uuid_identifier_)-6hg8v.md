> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/init(uuid:identifier:)-6hg8v](https://developer.apple.com/documentation/corelocation/clbeaconregion/init(uuid:identifier:)-6hg8v)

# init(uuid:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons with the specified UUID.

## Declaration

```swift
init(uuid: UUID, identifier: String)
```

## Parameters

- `uuid`: A [NSUUID](../../foundation/nsuuid.md) that identifies the beacons to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil.`

## See Also

### Creating a beacon region

- [init(beaconIdentityConstraint:identifier:)](init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [init(uuid:major:identifier:)](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [init(uuid:major:minor:identifier:)](init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.

# initWithUUID:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons with the specified UUID.

## Declaration

```objectivec
- (instancetype) initWithUUID:(NSUUID *) uuid identifier:(NSString *) identifier;
```

## Parameters

- `uuid`: A [NSUUID](../../foundation/nsuuid.md) that identifies the beacons to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil.`

## See Also

### Creating a beacon region

- [initWithBeaconIdentityConstraint:identifier:](init%28beaconidentityconstraint_identifier_%29.md): Deprecated. Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.
- [initWithUUID:major:identifier:](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [initWithUUID:major:minor:identifier:](init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.
