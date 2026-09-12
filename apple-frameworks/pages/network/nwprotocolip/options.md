> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocolip/options](https://developer.apple.com/documentation/network/nwprotocolip/options)

# NWProtocolIP.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A container of options for configuring how IP is used on a connection.

## Declaration

```swift
class Options
```

## Topics

### Selecting an IP Version

- [version](options/version-swift.property.md): A required IP version that disables all other versions for a connection.
- [NWProtocolIP.Options.Version](options/version-swift.enum.md): IP versions to require on connections and listeners.

### Customizing IP Behavior

- [shouldCalculateReceiveTime](options/shouldcalculatereceivetime.md): A Boolean that indicates whether a connection delivers receive timestamps for IP packets.
- [hopLimit](options/hoplimit.md): The default hop limit for packets a connection generates.
- [useMinimumMTU](options/useminimummtu.md): A Boolean indicating that the connection uses the minimum MTU value, which is 1280 bytes for IPv6.
- [disableFragmentation](options/disablefragmentation.md): A Boolean that indicates whether fragmentation is disabled on outbound packets.

### Instance Properties

- [disableMulticastLoopback](options/disablemulticastloopback.md)
- [localAddressPreference](options/localaddresspreference.md)

### Enumerations

- [NWProtocolIP.Options.AddressPreference](options/addresspreference.md)

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring IP Connections

- [definition](definition.md): The system definition of the Internet Protocol.
