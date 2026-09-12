> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result/metadata-swift.enum](https://developer.apple.com/documentation/network/nwbrowser/result/metadata-swift.enum)

# NWBrowser.Result.Metadata

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Values associated with discovered services, such as TXT records.

## Declaration

```swift
enum Metadata
```

## Topics

### Metadata Types

- [NWBrowser.Result.Metadata.bonjour(\_:)](metadata-swift.enum/bonjour%28__%29.md): A TXT record associated with a discovered service.
- [NWBrowser.Result.Metadata.none](metadata-swift.enum/none.md): A value indicating that no associated data was discovered on a service.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Evaluating Browser Results

- [endpoint](endpoint.md): The discovered service endpoint.
- [interfaces](interfaces.md): The list of interfaces on which the service was discovered.
- [metadata](metadata-swift.property.md): The metadata associated with the discovered service, such as the TXT record.
- [NWTXTRecord](../../nwtxtrecord.md): A dictionary representing a TXT record in a DNS packet.
