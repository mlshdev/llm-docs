> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/organization](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/organization)

# organization (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string that identifies the organization that administers the filter.

## Declaration

```swift
var organization: String? { get set }
```

## See Also

### Accessing the filter configuration

- [vendorConfiguration](vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.

# organization (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A string that identifies the organization that administers the filter.

## Declaration

```objectivec
@property (copy, nullable) NSString * organization;
```

## See Also

### Accessing the filter configuration

- [vendorConfiguration](vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.
