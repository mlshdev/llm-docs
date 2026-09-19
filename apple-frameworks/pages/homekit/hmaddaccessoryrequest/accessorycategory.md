> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/accessorycategory

# accessoryCategory (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The category of the accessory to add.

## Declaration

```swift
var accessoryCategory: HMAccessoryCategory { get }
```

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

# accessoryCategory (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

The category of the accessory to add.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) HMAccessoryCategory * accessoryCategory;
```

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.
