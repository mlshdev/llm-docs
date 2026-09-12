> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/identityreference](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/identityreference)

# identityReference (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A persistent reference to a keychain item containing a certificate and private key associated with the filter.

## Declaration

```swift
var identityReference: Data? { get set }
```

## See Also

### Accessing the filter configuration

- [vendorConfiguration](vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [organization](organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.

# identityReference (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A persistent reference to a keychain item containing a certificate and private key associated with the filter.

## Declaration

```objectivec
@property (copy, nullable) NSData * identityReference;
```

## See Also

### Accessing the filter configuration

- [vendorConfiguration](vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [organization](organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
