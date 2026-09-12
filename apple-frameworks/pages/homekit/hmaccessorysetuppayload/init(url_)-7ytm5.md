> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuppayload/init(url:)-7ytm5](https://developer.apple.com/documentation/homekit/hmaccessorysetuppayload/init(url:)-7ytm5)

# init(url:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 27.0+ · visionOS 1.0+

Creates an accessory setup payload.

## Declaration

```swift
init?(url setupPayloadURL: URL?)
```

## Parameters

- `setupPayloadURL`: The payload used to securely authenticate the accessory. This is the same payload you would receive by scanning the accessory’s QR code.

<a id="Discussion"></a>

## Discussion

For details about the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

## See Also

### Creating a Payload

- [init(url:ownershipToken:)](init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.
- [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.

# initWithURL: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 27.0+ · visionOS 1.0+

Creates an accessory setup payload.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) setupPayloadURL;
```

## Parameters

- `setupPayloadURL`: The payload used to securely authenticate the accessory. This is the same payload you would receive by scanning the accessory’s QR code.

<a id="Discussion"></a>

## Discussion

For details about the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

## See Also

### Creating a Payload

- [initWithURL:ownershipToken:](init%28url_ownershiptoken_%29-32mrj.md): Creates an accessory setup payload instance that includes an ownership token.
- [HMAccessoryOwnershipToken](../hmaccessoryownershiptoken.md): Authentication data that your app provides when adding an accessory to a home.
