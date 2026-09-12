> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/beaconidentitycondition/init(uuid:major:minor:)](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/beaconidentitycondition/init(uuid:major:minor:))

# init(uuid:major:minor:)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · macOS 14.0+

Creates a beacon identity condition with UUID, and major and minor characteristics.

## Declaration

```swift
init(uuid: UUID, major: UInt16, minor: UInt16)
```

## Parameters

- `uuid`: The [NSUUID](../../../foundation/nsuuid.md) that identifies the beacon.
- `major`: The [CLBeaconMajorValue](../../clbeaconmajorvalue.md) that represents the beacon’s major value.
- `minor`: The [CLBeaconMinorValue](../../clbeaconminorvalue.md) that represents the beacon’s minor value.

## See Also

### Creating a beacon identity condition

- [init(uuid:)](init%28uuid_%29.md): Creates a beacon identity condition with the UUID characteristic only, and wildcard values for the major and minor characteristics.
- [init(uuid:major:)](init%28uuid_major_%29.md): Creates a beacon identity condition with UUID and major characteristics, and a wildcard for the minor characteristic.
