> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/configuration/addtokenconfiguration(for:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration/addtokenconfiguration(for:))

# addTokenConfiguration(for:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a configuration object for a token with the token instance identifier you specify.

## Declaration

```swift
func addTokenConfiguration(for instanceID: TKToken.InstanceID) -> TKToken.Configuration
```

## Parameters

- `instanceID`: The token’s instance identifier.

<a id="return-value"></a>

## Return Value

The configuration class for the token.

<a id="Discussion"></a>

## Discussion

This method adds the created configuration into the [tokenConfigurations](tokenconfigurations.md) dictionary. Adding a configuration with an `instanceID` that already exists replaces the existing configuration with a new empty configuration.

## See Also

### Adding and Removing Configurations

- [removeTokenConfiguration(for:)](removetokenconfiguration%28for_%29.md): Removes a configuration for a token with the token instance identifier you specify.

# addTokenConfigurationForTokenInstanceID: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a configuration object for a token with the token instance identifier you specify.

## Declaration

```objectivec
- (TKTokenConfiguration *) addTokenConfigurationForTokenInstanceID:(TKTokenInstanceID) instanceID;
```

## Parameters

- `instanceID`: The token’s instance identifier.

<a id="return-value"></a>

## Return Value

The configuration class for the token.

<a id="Discussion"></a>

## Discussion

This method adds the created configuration into the [tokenConfigurations](tokenconfigurations.md) dictionary. Adding a configuration with an `instanceID` that already exists replaces the existing configuration with a new empty configuration.

## See Also

### Adding and Removing Configurations

- [removeTokenConfigurationForTokenInstanceID:](removetokenconfiguration%28for_%29.md): Removes a configuration for a token with the token instance identifier you specify.
