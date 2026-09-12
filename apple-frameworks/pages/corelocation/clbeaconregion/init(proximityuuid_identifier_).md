> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconregion/init(proximityuuid:identifier:)](https://developer.apple.com/documentation/corelocation/clbeaconregion/init(proximityuuid:identifier:))

# init(proximityUUID:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Creates and returns a region object that targets a beacon with the specified UUID.

> Use [init(uuid:identifier:)](init%28uuid_identifier_%29-6hg8v.md) instead.

## Declaration

```swift
init(proximityUUID: UUID, identifier: String)
```

## Parameters

- `proximityUUID`: The unique ID of the beacons you’re targeting. This value can’t be `nil`.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized beacon region object.

<a id="Discussion"></a>

## Discussion

This method creates a region that results in the reporting of all beacons with the specified `proximityUUID` value. The system ignores the [major](major.md) and [minor](minor.md) values of the beacons.

## See Also

### Deprecated

- [init(proximityUUID:major:identifier:)](init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [init(proximityUUID:major:minor:identifier:)](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.

# initWithProximityUUID:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

Creates and returns a region object that targets a beacon with the specified UUID.

> Use [initWithUUID:identifier:](init%28uuid_identifier_%29-6hg8v.md) instead.

## Declaration

```objectivec
- (instancetype) initWithProximityUUID:(NSUUID *) proximityUUID identifier:(NSString *) identifier;
```

## Parameters

- `proximityUUID`: The unique ID of the beacons you’re targeting. This value can’t be `nil`.
- `identifier`: A unique identifier to associate with the returned region object. You use this identifier to differentiate regions within your app. This value can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized beacon region object.

<a id="Discussion"></a>

## Discussion

This method creates a region that results in the reporting of all beacons with the specified `proximityUUID` value. The system ignores the [major](major.md) and [minor](minor.md) values of the beacons.

## See Also

### Deprecated

- [initWithProximityUUID:major:identifier:](init%28proximityuuid_major_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID and major value.
- [initWithProximityUUID:major:minor:identifier:](init%28proximityuuid_major_minor_identifier_%29.md): Deprecated. Creates and returns a region object that targets a beacon with the specified proximity ID, major value, and minor value.
- [proximityUUID](proximityuuid.md): Deprecated. The unique ID of the beacons you’re targeting.
