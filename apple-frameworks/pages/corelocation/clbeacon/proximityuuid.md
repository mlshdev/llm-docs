> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeacon/proximityuuid](https://developer.apple.com/documentation/corelocation/clbeacon/proximityuuid)

# proximityUUID (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

The proximity ID of the beacon.

> Use [uuid](uuid.md) instead.

## Declaration

```swift
var proximityUUID: UUID { get }
```

## See Also

### Getting the beacon identity

- [uuid](uuid.md): The UUID that the observed beacon transmitted.
- [major](major.md): The major value that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.

# proximityUUID (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15)

The proximity ID of the beacon.

> Use [UUID](uuid.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUUID * proximityUUID;
```

## See Also

### Getting the beacon identity

- [UUID](uuid.md): The UUID that the observed beacon transmitted.
- [major](major.md): The major value that the observed beacon transmitted.
- [minor](minor.md): The minor value that the observed beacon transmitted.
