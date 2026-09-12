> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/init(beaconidentityconstraint:identifier:)](https://developer.apple.com/documentation/corelocation/clbeaconregion/init(beaconidentityconstraint:identifier:))

# init(beaconIdentityConstraint:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.

## Declaration

```swift
init(beaconIdentityConstraint: CLBeaconIdentityConstraint, identifier: String)
```

## Parameters

- `beaconIdentityConstraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) that describes the characteristics of beacons for the framework to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

## See Also

### Creating a beacon region

- [init(uuid:identifier:)](init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [init(uuid:major:identifier:)](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [init(uuid:major:minor:identifier:)](init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.

# initWithBeaconIdentityConstraint:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Creates and returns a region object that targets beacons that satisfy the specified beacon identity constraints.

## Declaration

```objectivec
- (instancetype) initWithBeaconIdentityConstraint:(CLBeaconIdentityConstraint *) beaconIdentityConstraint identifier:(NSString *) identifier;
```

## Parameters

- `beaconIdentityConstraint`: A [CLBeaconIdentityConstraint](../clbeaconidentityconstraint.md) that describes the characteristics of beacons for the framework to target.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

## See Also

### Creating a beacon region

- [initWithUUID:identifier:](init%28uuid_identifier_%29-6hg8v.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID.
- [initWithUUID:major:identifier:](init%28uuid_major_identifier_%29-8ur0j.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID and major value.
- [initWithUUID:major:minor:identifier:](init%28uuid_major_minor_identifier_%29-24h7w.md): Deprecated. Creates and returns a region object that targets beacons with the specified UUID, and major and minor values.
- [CLBeaconMajorValue](../clbeaconmajorvalue.md): The most significant value in a beacon.
- [CLBeaconMinorValue](../clbeaconminorvalue.md): The least significant value in a beacon.
