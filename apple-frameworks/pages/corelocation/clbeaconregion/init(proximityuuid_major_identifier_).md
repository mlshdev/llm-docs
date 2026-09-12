> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/init(proximityuuid:major:identifier:)](https://developer.apple.com/documentation/corelocation/clbeaconregion/init(proximityuuid:major:identifier:))

# init(proximityUUID:major:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Creates and returns a region object that targets a beacon with the specified proximity ID and major value.

> Use [init(uuid:major:identifier:)](init%28uuid_major_identifier_%29-8ur0j.md) instead.

## Declaration

```swift
init(proximityUUID: UUID, major: CLBeaconMajorValue, identifier: String)
```

## Parameters

- `proximityUUID`: The unique ID of the beacons you’re targeting. This value can’t be `nil`.
- `major`: The major value that you use to identify one or more beacons.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized beacon region object.

<a id="Discussion"></a>

## Discussion

This method creates a region that reports all beacons with the specified `proximityUUID` and `major` values. The system ignores the beacon’s [minor](minor.md) value.

## See Also

### Deprecated

- [init(proximityUUID:identifier:)](init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [init(proximityUUID:major:minor:identifier:)](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.

# initWithProximityUUID:major:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Creates and returns a region object that targets a beacon with the specified proximity ID and major value.

> Use [initWithUUID:major:identifier:](init%28uuid_major_identifier_%29-8ur0j.md) instead.

## Declaration

```objectivec
- (instancetype) initWithProximityUUID:(NSUUID *) proximityUUID major:(CLBeaconMajorValue) major identifier:(NSString *) identifier;
```

## Parameters

- `proximityUUID`: The unique ID of the beacons you’re targeting. This value can’t be `nil`.
- `major`: The major value that you use to identify one or more beacons.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized beacon region object.

<a id="Discussion"></a>

## Discussion

This method creates a region that reports all beacons with the specified `proximityUUID` and `major` values. The system ignores the beacon’s [minor](minor.md) value.

## See Also

### Deprecated

- [initWithProximityUUID:identifier:](init%28proximityuuid_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified UUID.
- [initWithProximityUUID:major:minor:identifier:](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.
