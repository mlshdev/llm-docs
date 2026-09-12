> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardtokendriverdelegate/tokendriver(_:createtokenfor:aid:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardtokendriverdelegate/tokendriver(_:createtokenfor:aid:))

# tokenDriver(\_:createTokenFor:aid:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate that a new Smart Card is detected.

## Declaration

```swift
func tokenDriver(_ driver: TKSmartCardTokenDriver, createTokenFor smartCard: TKSmartCard, aid AID: Data?) throws -> TKSmartCardToken
```

## Parameters

- `driver`: The Smart Card token driver.
- `smartCard`: The detected Smart Card.
- `AID`: The ISO 7816-4 application identifier that is selected on the Smart Card. If the `com.apple.ctk.aid` attributes is not present in the Smart Card token extension property list, no application is selected.

<a id="return-value"></a>

## Return Value

The token created for the Smart Card, or `nil` if an error occurs or the delegate decides not to provide a token.

# tokenDriver:createTokenForSmartCard:AID:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate that a new Smart Card is detected.

## Declaration

```objectivec
- (TKSmartCardToken *) tokenDriver:(TKSmartCardTokenDriver *) driver createTokenForSmartCard:(TKSmartCard *) smartCard AID:(NSData *) AID error:(NSError **) error;
```

## Parameters

- `driver`: The Smart Card token driver.
- `smartCard`: The detected Smart Card.
- `AID`: The ISO 7816-4 application identifier that is selected on the Smart Card. If the `com.apple.ctk.aid` attributes is not present in the Smart Card token extension property list, no application is selected.
- `error`: If an error occurred, this parameter should be populated with an `NSError` object containing details about the error.

<a id="return-value"></a>

## Return Value

The token created for the Smart Card, or `nil` if an error occurs or the delegate decides not to provide a token.
