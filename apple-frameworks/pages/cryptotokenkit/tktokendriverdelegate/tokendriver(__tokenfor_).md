> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriverdelegate/tokendriver(_:tokenfor:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendriverdelegate/tokendriver(_:tokenfor:))

# tokenDriver(\_:tokenFor:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new token for the configuration you specify.

## Declaration

```swift
optional func tokenDriver(_ driver: TKTokenDriver, tokenFor configuration: TKToken.Configuration) throws -> TKToken
```

## Parameters

- `driver`: The token driver.
- `configuration`: The configuration that identifies the token to create.

<a id="return-value"></a>

## Return Value

The created token.

<a id="Discussion"></a>

## Discussion

The system invokes this method to request creation of a token instance, which the [instanceID](../tktoken/configuration-swift.class/instanceid.md) property of the configuration you specify identifies.

The created token has access to its current configuration using the [configurationData](../tktoken/configuration-swift.class/configurationdata.md) property, which can provide token-implementation-specific additional data. The token can access keychain items this token exports with the methods [key(for:)](../tktoken/configuration-swift.class/key%28for_%29.md) and [certificate(for:)](../tktoken/configuration-swift.class/certificate%28for_%29.md) that the configuration provides.

> **Note**

>  Smart card token drivers must not implement this method.

## See Also

### Creating and Removing Tokens

- [tokenDriver(\_:terminateToken:)](tokendriver%28__terminatetoken_%29.md): Tells the delegate to terminate the token you specify.

# tokenDriver:tokenForConfiguration:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a new token for the configuration you specify.

## Declaration

```objectivec
- (TKToken *) tokenDriver:(TKTokenDriver *) driver tokenForConfiguration:(TKTokenConfiguration *) configuration error:(NSError **) error;
```

## Parameters

- `driver`: The token driver.
- `configuration`: The configuration that identifies the token to create.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The created token. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

The system invokes this method to request creation of a token instance, which the [instanceID](../tktoken/configuration-swift.class/instanceid.md) property of the configuration you specify identifies.

The created token has access to its current configuration using the [configurationData](../tktoken/configuration-swift.class/configurationdata.md) property, which can provide token-implementation-specific additional data. The token can access keychain items this token exports with the methods [keyForObjectID:error:](../tktoken/configuration-swift.class/key%28for_%29.md) and [certificateForObjectID:error:](../tktoken/configuration-swift.class/certificate%28for_%29.md) that the configuration provides.

> **Note**

>  Smart card token drivers must not implement this method.

## See Also

### Creating and Removing Tokens

- [tokenDriver:terminateToken:](tokendriver%28__terminatetoken_%29.md): Tells the delegate to terminate the token you specify.
