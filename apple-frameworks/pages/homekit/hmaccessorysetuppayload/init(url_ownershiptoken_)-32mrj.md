> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuppayload/init(url:ownershiptoken:)-32mrj](https://developer.apple.com/documentation/homekit/hmaccessorysetuppayload/init(url:ownershiptoken:)-32mrj)

# init(url:ownershipToken:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an accessory setup payload instance that includes an ownership token.

## Declaration

```swift
init?(url setupPayloadURL: URL, ownershipToken: HMAccessoryOwnershipToken?)
```

## Parameters

- `setupPayloadURL`: The payload used to securely authenticate the accessory. This is the same payload you would receive by scanning the accessory’s QR code.
- `ownershipToken`: A token that proves ownership of the accessory. You typically negotiate this token with the accessory outside of HomeKit.

<a id="Discussion"></a>

## Discussion

For details about the payload’s content, join the [MFi Program](https://developer.apple.com/programs/mfi/).

## See Also

### Creating a Payload

- [init(url:)](init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.

# initWithURL:ownershipToken: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 27.0+ · visionOS 1.0+

Creates an accessory setup payload instance that includes an ownership token.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) setupPayloadURL ownershipToken:(HMAccessoryOwnershipToken *) ownershipToken;
```

## Parameters

- `setupPayloadURL`: The payload used to securely authenticate the accessory. This is the same payload you would receive by scanning the accessory’s QR code.
- `ownershipToken`: A token that proves ownership of the accessory. You typically negotiate this token with the accessory outside of HomeKit.

<a id="Discussion"></a>

## Discussion

For details about the payload’s content, join the [MFi Program](https://developer.apple.com/programs/mfi/).

## See Also

### Creating a Payload

- [initWithURL:](init%28url_%29-7ytm5.md): Creates an accessory setup payload.
- [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.
