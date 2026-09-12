> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/requiresownershiptoken](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/requiresownershiptoken)

# requiresOwnershipToken (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

An indication of whether the add operation requires an ownership token.

> No longer supported

## Declaration

```swift
var requiresOwnershipToken: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In practice, this value is always `true`.

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

# requiresOwnershipToken (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

An indication of whether the add operation requires an ownership token.

> No longer supported

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL requiresOwnershipToken;
```

<a id="Discussion"></a>

## Discussion

In practice, this value is always `true`.

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.
