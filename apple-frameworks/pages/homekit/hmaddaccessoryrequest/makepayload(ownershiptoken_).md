> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/makepayload(ownershiptoken:)](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/makepayload(ownershiptoken:))

# makePayload(ownershipToken:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

Builds an accessory setup payload with the given ownership token.

## Declaration

```swift
func makePayload(ownershipToken: HMAccessoryOwnershipToken) -> HMAccessorySetupPayload?
```

## Parameters

- `ownershipToken`: A token proving ownership of the accessory.

<a id="return-value"></a>

## Return Value

An accessory setup payload that you use to add the accessory. The method fails and returns `nil` if the request’s [requiresSetupPayloadURL](requiressetuppayloadurl.md) property is `true`. In that case, use [makePayload(url:ownershipToken:)](makepayload%28url_ownershiptoken_%29.md) instead.

## See Also

### Creating a Payload

- [makePayload(url:ownershipToken:)](makepayload%28url_ownershiptoken_%29.md): Builds an accessory setup payload with the given setup payload URL and ownership token.

# payloadWithOwnershipToken: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

Builds an accessory setup payload with the given ownership token.

## Declaration

```objectivec
- (HMAccessorySetupPayload *) payloadWithOwnershipToken:(HMAccessoryOwnershipToken *) ownershipToken;
```

## Parameters

- `ownershipToken`: A token proving ownership of the accessory.

<a id="return-value"></a>

## Return Value

An accessory setup payload that you use to add the accessory. The method fails and returns `nil` if the request’s [requiresSetupPayloadURL](requiressetuppayloadurl.md) property is `true`. In that case, use [payloadWithURL:ownershipToken:](makepayload%28url_ownershiptoken_%29.md) instead.

## See Also

### Creating a Payload

- [payloadWithURL:ownershipToken:](makepayload%28url_ownershiptoken_%29.md): Builds an accessory setup payload with the given setup payload URL and ownership token.
