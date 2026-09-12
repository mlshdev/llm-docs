> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/configuration-swift.property](https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.property)

# configuration (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current configuration for a token.

## Declaration

```swift
var configuration: TKToken.Configuration { get }
```

<a id="Discussion"></a>

## Discussion

Access keychain items exported by this token with the methods [key(for:)](configuration-swift.class/key%28for_%29.md) and [certificate(for:)](configuration-swift.class/certificate%28for_%29.md) provided by the configuration. You can access token-implementation-specific additional data using the [configurationData](configuration-swift.class/configurationdata.md) property of the configuration.

## See Also

### Configuring the Token

- [TKToken.Configuration](configuration-swift.class.md): A token’s configuration.

# configuration (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The current configuration for a token.

## Declaration

```objectivec
@property (readonly) TKTokenConfiguration * configuration;
```

<a id="Discussion"></a>

## Discussion

Access keychain items exported by this token with the methods [keyForObjectID:error:](configuration-swift.class/key%28for_%29.md) and [certificateForObjectID:error:](configuration-swift.class/certificate%28for_%29.md) provided by the configuration. You can access token-implementation-specific additional data using the [configurationData](configuration-swift.class/configurationdata.md) property of the configuration.

## See Also

### Configuring the Token

- [TKTokenConfiguration](configuration-swift.class.md): A token’s configuration.
