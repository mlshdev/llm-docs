> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtoken/init(smartcard:aid:instanceid:tokendriver:)-38ak2](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtoken/init(smartcard:aid:instanceid:tokendriver:)-38ak2)

# init(smartCard:aid:instanceID:tokenDriver:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a smart card token with the specified smart card, application identifier, and token driver.

## Declaration

```swift
init(smartCard: TKSmartCard, aid AID: Data?, instanceID: String, tokenDriver: TKSmartCardTokenDriver)
```

## Parameters

- `smartCard`: The smart card on which the created token should operate.
- `AID`: The ISO 7816-4 application identifier for the smart card.
- `instanceID`: A unique, persistent identifier for this token. This value is typically generated from the serial number of the target hardware.
- `tokenDriver`: The driver associated with the created token.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.

# initWithSmartCard:AID:instanceID:tokenDriver: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Initializes a smart card token with the specified smart card, application identifier, and token driver.

## Declaration

```objectivec
- (instancetype) initWithSmartCard:(TKSmartCard *) smartCard AID:(NSData *) AID instanceID:(NSString *) instanceID tokenDriver:(TKSmartCardTokenDriver *) tokenDriver;
```

## Parameters

- `smartCard`: The smart card on which the created token should operate.
- `AID`: The ISO 7816-4 application identifier for the smart card.
- `instanceID`: A unique, persistent identifier for this token. This value is typically generated from the serial number of the target hardware.
- `tokenDriver`: The driver associated with the created token.

<a id="Discussion"></a>

## Discussion

This is the designated initializer.
