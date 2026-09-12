> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriverdelegate/tokendriver(_:terminatetoken:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendriverdelegate/tokendriver(_:terminatetoken:))

# tokenDriver(\_:terminateToken:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to terminate the token you specify.

## Declaration

```swift
optional func tokenDriver(_ driver: TKTokenDriver, terminateToken token: TKToken)
```

## Parameters

- `driver`: The token driver.
- `token`: The token to be terminated.

## See Also

### Creating and Removing Tokens

- [tokenDriver(\_:tokenFor:)](tokendriver%28__tokenfor_%29.md): Creates a new token for the configuration you specify.

# tokenDriver:terminateToken: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to terminate the token you specify.

## Declaration

```objectivec
- (void) tokenDriver:(TKTokenDriver *) driver terminateToken:(TKToken *) token;
```

## Parameters

- `driver`: The token driver.
- `token`: The token to be terminated.

## See Also

### Creating and Removing Tokens

- [tokenDriver:tokenForConfiguration:error:](tokendriver%28__tokenfor_%29.md): Creates a new token for the configuration you specify.
