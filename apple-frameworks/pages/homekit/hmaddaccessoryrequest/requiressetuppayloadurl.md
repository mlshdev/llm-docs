> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/requiressetuppayloadurl](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/requiressetuppayloadurl)

# requiresSetupPayloadURL (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

An indication of whether the add operation requires a setup payload URL.

## Declaration

```swift
var requiresSetupPayloadURL: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, look up the URL for the given accessory based on its category and name, given by the request’s [accessoryCategory](accessorycategory.md) and [accessoryName](accessoryname.md) parameters. Include the URL in the setup payload by calling the request’s [makePayload(url:ownershipToken:)](makepayload%28url_ownershiptoken_%29.md) method.

If [requiresSetupPayloadURL](requiressetuppayloadurl.md) is `false`, you can still use the [makePayload(url:ownershipToken:)](makepayload%28url_ownershiptoken_%29.md) method, if appropriate. Alternatively, you can construct the payload by calling the request’s [makePayload(ownershipToken:)](makepayload%28ownershiptoken_%29.md) command instead.

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.

# requiresSetupPayloadURL (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

An indication of whether the add operation requires a setup payload URL.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL requiresSetupPayloadURL;
```

<a id="Discussion"></a>

## Discussion

If this value is `true`, look up the URL for the given accessory based on its category and name, given by the request’s [accessoryCategory](accessorycategory.md) and [accessoryName](accessoryname.md) parameters. Include the URL in the setup payload by calling the request’s [payloadWithURL:ownershipToken:](makepayload%28url_ownershiptoken_%29.md) method.

If [requiresSetupPayloadURL](requiressetuppayloadurl.md) is `false`, you can still use the [payloadWithURL:ownershipToken:](makepayload%28url_ownershiptoken_%29.md) method, if appropriate. Alternatively, you can construct the payload by calling the request’s [payloadWithOwnershipToken:](makepayload%28ownershiptoken_%29.md) command instead.

## See Also

### Characterizing the Request

- [home](home.md): The home to which to add the accessory.
- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
