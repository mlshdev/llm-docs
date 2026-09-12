> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessoryownershiptoken/init(data:)](https://developer.apple.com/documentation/homekit/hmaccessoryownershiptoken/init(data:))

# init(data:) (Swift)

**Framework:** HomeKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 27.0+ · visionOS 1.0+

Creates an ownership token from data.

## Declaration

```swift
init?(data: Data)
```

## Parameters

- `data`: Data to be sent to the accessory to prove ownership.

<a id="Discussion"></a>

## Discussion

Obtain token data by negotiating with an accessory outside of HomeKit. You typically obtain token data for an accessory that you manufacture.

Token creation can fail if the data doesn’t represent a valid ownership token.

# initWithData: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 27.0+ · visionOS 1.0+

Creates an ownership token from data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: Data to be sent to the accessory to prove ownership.

<a id="Discussion"></a>

## Discussion

Obtain token data by negotiating with an accessory outside of HomeKit. You typically obtain token data for an accessory that you manufacture.

Token creation can fail if the data doesn’t represent a valid ownership token.
