> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/makepayload(url:ownershiptoken:)](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/makepayload(url:ownershiptoken:))

# makePayload(url:ownershipToken:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Builds an accessory setup payload with the given setup payload URL and ownership token.

## Declaration

```swift
func makePayload(url setupPayloadURL: URL, ownershipToken: HMAccessoryOwnershipToken) -> HMAccessorySetupPayload?
```

## Parameters

- `setupPayloadURL`: The setup payload URL for the accessory. Provide this URL when HomeKit sends an add request to the app associated with your accessory. You determine the URL based on the category and name of your accessory, as given in the [accessoryCategory](accessorycategory.md) and [accessoryName](accessoryname.md) properties of the associated [HMAddAccessoryRequest](../hmaddaccessoryrequest.md) instance.
- `ownershipToken`: A token proving ownership of the accessory. Your app negotiates the token with the accessory outside of HomeKit.

<a id="return-value"></a>

## Return Value

An accessory setup payload that you use to add the accessory. The method fails and returns `nil` if the setup payload URL is invalid.

## See Also

### Creating a Payload

- [makePayload(ownershipToken:)](makepayload%28ownershiptoken_%29.md): Builds an accessory setup payload with the given ownership token.

# payloadWithURL:ownershipToken: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Builds an accessory setup payload with the given setup payload URL and ownership token.

## Declaration

```objectivec
- (HMAccessorySetupPayload *) payloadWithURL:(NSURL *) setupPayloadURL ownershipToken:(HMAccessoryOwnershipToken *) ownershipToken;
```

## Parameters

- `setupPayloadURL`: The setup payload URL for the accessory. Provide this URL when HomeKit sends an add request to the app associated with your accessory. You determine the URL based on the category and name of your accessory, as given in the [accessoryCategory](accessorycategory.md) and [accessoryName](accessoryname.md) properties of the associated [HMAddAccessoryRequest](../hmaddaccessoryrequest.md) instance.
- `ownershipToken`: A token proving ownership of the accessory. Your app negotiates the token with the accessory outside of HomeKit.

<a id="return-value"></a>

## Return Value

An accessory setup payload that you use to add the accessory. The method fails and returns `nil` if the setup payload URL is invalid.

## See Also

### Creating a Payload

- [payloadWithOwnershipToken:](makepayload%28ownershiptoken_%29.md): Builds an accessory setup payload with the given ownership token.
