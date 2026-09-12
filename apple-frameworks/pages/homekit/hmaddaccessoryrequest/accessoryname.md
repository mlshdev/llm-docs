> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/accessoryname](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/accessoryname)

# accessoryName (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The name of the accessory to add.

## Declaration

```swift
var accessoryName: String { get }
```

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

# accessoryName (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

The name of the accessory to add.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * accessoryName;
```

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.
