> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktoken/configuration-swift.class/configurationdata](https://developer.apple.com/documentation/cryptotokenkit/tktoken/configuration-swift.class/configurationdata)

# configurationData (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Additional configuration information for the token instance.

## Declaration

```swift
var configurationData: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

[configurationData](configurationdata.md) can provide token-implementation-specific additional data, which the app that hosts the token driver extension and configures the token provides. The system doesn’t interpret this data in any way.

For example, the network-based hardware security module (HSM) can store encoded target network addresses, access credentials, or the list of identities the HSM contains.

## See Also

### Reporting Configuration Information

- [instanceID](instanceid.md): The unique, persistent identifier of this token that the token implementation creates.

# configurationData (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Additional configuration information for the token instance.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSData * configurationData;
```

<a id="Discussion"></a>

## Discussion

[configurationData](configurationdata.md) can provide token-implementation-specific additional data, which the app that hosts the token driver extension and configures the token provides. The system doesn’t interpret this data in any way.

For example, the network-based hardware security module (HSM) can store encoded target network addresses, access credentials, or the list of identities the HSM contains.

## See Also

### Reporting Configuration Information

- [instanceID](instanceid.md): The unique, persistent identifier of this token that the token implementation creates.
