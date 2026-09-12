> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterproviderconfiguration](https://developer.apple.com/documentation/networkextension/nefilterproviderconfiguration)

# NEFilterProviderConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Configuration parameters for a content filter.

## Declaration

```swift
class NEFilterProviderConfiguration
```

## Topics

### Configuring filter behavior

- [filterBrowsers](nefilterproviderconfiguration/filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterSockets](nefilterproviderconfiguration/filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.
- [filterPackets](nefilterproviderconfiguration/filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.

### Accessing the filter configuration

- [vendorConfiguration](nefilterproviderconfiguration/vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](nefilterproviderconfiguration/serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](nefilterproviderconfiguration/username.md): A string that identifies the user.
- [organization](nefilterproviderconfiguration/organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](nefilterproviderconfiguration/passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](nefilterproviderconfiguration/identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.

### Accessing bundle identifiers

- [filterDataProviderBundleIdentifier](nefilterproviderconfiguration/filterdataproviderbundleidentifier.md): The bundle identifier of the filter data provider system extension.
- [filterPacketProviderBundleIdentifier](nefilterproviderconfiguration/filterpacketproviderbundleidentifier.md): The bundle identifier of the filter packet provider system extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filter configuration

- [NEFilterManager](nefiltermanager.md): An object to create and manage a content filter’s configuration.

# NEFilterProviderConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Configuration parameters for a content filter.

## Declaration

```objectivec
@interface NEFilterProviderConfiguration : NSObject
```

## Topics

### Configuring filter behavior

- [filterBrowsers](nefilterproviderconfiguration/filterbrowsers.md): Deprecated. A Boolean value that indicates that the system applies the filter to flows of network data originated from WebKit browser objects.
- [filterSockets](nefilterproviderconfiguration/filtersockets.md): A Boolean value that indicates that the system applies the filter to flows of network data originated from sockets.
- [filterPackets](nefilterproviderconfiguration/filterpackets.md): A Boolean value that indicates that the system applies the filter to packets of network data.

### Accessing the filter configuration

- [vendorConfiguration](nefilterproviderconfiguration/vendorconfiguration.md): A dictionary of provider-specific configuration settings.
- [serverAddress](nefilterproviderconfiguration/serveraddress.md): The address of a server that the Filter Control Provider may contact for rules and other configuration information.
- [username](nefilterproviderconfiguration/username.md): A string that identifies the user.
- [organization](nefilterproviderconfiguration/organization.md): A string that identifies the organization that administers the filter.
- [passwordReference](nefilterproviderconfiguration/passwordreference.md): A persistent reference to a keychain item containing a password associated with the filter.
- [identityReference](nefilterproviderconfiguration/identityreference.md): A persistent reference to a keychain item containing a certificate and private key associated with the filter.

### Accessing bundle identifiers

- [filterDataProviderBundleIdentifier](nefilterproviderconfiguration/filterdataproviderbundleidentifier.md): The bundle identifier of the filter data provider system extension.
- [filterPacketProviderBundleIdentifier](nefilterproviderconfiguration/filterpacketproviderbundleidentifier.md): The bundle identifier of the filter packet provider system extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filter configuration

- [NEFilterManager](nefiltermanager.md): An object to create and manage a content filter’s configuration.
