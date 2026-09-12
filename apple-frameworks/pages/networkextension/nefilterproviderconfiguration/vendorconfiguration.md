> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration/vendorconfiguration](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration/vendorconfiguration)

# vendorConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A dictionary of provider-specific configuration settings.

## Declaration

```swift
var vendorConfiguration: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

All of the values in this dictionary must be [NSSecureCoding](../../foundation/nssecurecoding.md)-compliant.

## See Also

### Accessing the filter configuration

- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [organization](organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.

# vendorConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A dictionary of provider-specific configuration settings.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * vendorConfiguration;
```

<a id="Discussion"></a>

## Discussion

All of the values in this dictionary must be [NSSecureCoding](../../foundation/nssecurecoding.md)-compliant.

## See Also

### Accessing the filter configuration

- [serverAddress](serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](username.md): A string that identifies the user.
- [organization](organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.
