> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/uuid](https://developer.apple.com/documentation/corelocation/clbeacon/uuid)

# uuid (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The UUID that the observed beacon transmitted.

## Declaration

```swift
var uuid: UUID { get }
```

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The UUID is the most significant beacon identity characteristic.  Multiple beacon can transmit the same UUID.

## See Also

### Getting the beacon identity

- [major](major.md): The major value that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](proximityuuid.md): Deprecated. The proximity ID of the beacon.

# UUID (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The UUID that the observed beacon transmitted.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * UUID;
```

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

<a id="Discussion"></a>

## Discussion

The UUID is the most significant beacon identity characteristic.  Multiple beacon can transmit the same UUID.

## See Also

### Getting the beacon identity

- [major](major.md): The major value that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](proximityuuid.md): Deprecated. The proximity ID of the beacon.
