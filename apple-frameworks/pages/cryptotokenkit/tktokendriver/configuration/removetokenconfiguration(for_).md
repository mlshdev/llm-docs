> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/configuration/removetokenconfiguration(for:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration/removetokenconfiguration(for:))

# removeTokenConfiguration(for:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes a configuration for a token with the token instance identifier you specify.

## Declaration

```swift
func removeTokenConfiguration(for instanceID: TKToken.InstanceID)
```

## Parameters

- `instanceID`: The token’s instance identifier.

<a id="Discussion"></a>

## Discussion

The method does nothing if the token configuration you specify doesn’t exist.

## See Also

### Adding and Removing Configurations

- [addTokenConfiguration(for:)](addtokenconfiguration%28for_%29.md): Creates a configuration object for a token with the token instance identifier you specify.

# removeTokenConfigurationForTokenInstanceID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes a configuration for a token with the token instance identifier you specify.

## Declaration

```objectivec
- (void) removeTokenConfigurationForTokenInstanceID:(TKTokenInstanceID) instanceID;
```

## Parameters

- `instanceID`: The token’s instance identifier.

<a id="Discussion"></a>

## Discussion

The method does nothing if the token configuration you specify doesn’t exist.

## See Also

### Adding and Removing Configurations

- [addTokenConfigurationForTokenInstanceID:](addtokenconfiguration%28for_%29.md): Creates a configuration object for a token with the token instance identifier you specify.
