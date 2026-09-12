> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/major](https://developer.apple.com/documentation/corelocation/clbeacon/major)

# major (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The major value that the observed beacon transmitted.

## Declaration

```swift
@NSCopying var major: NSNumber { get }
```

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

## See Also

### Getting the beacon identity

- [uuid](uuid.md): The UUID that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](proximityuuid.md): Deprecated. The proximity ID of the beacon.

# major (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The major value that the observed beacon transmitted.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSNumber * major;
```

## Mentioned In

- [Determining the proximity to an iBeacon device](../determining-the-proximity-to-an-ibeacon-device.md)

## See Also

### Getting the beacon identity

- [UUID](uuid.md): The UUID that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.
- [proximityUUID](proximityuuid.md): Deprecated. The proximity ID of the beacon.
