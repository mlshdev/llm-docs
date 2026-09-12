> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result](https://developer.apple.com/documentation/network/nwbrowser/result)

# NWBrowser.Result

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A set of discovered services and changes from the last result.

## Declaration

```swift
struct Result
```

## Topics

### Evaluating Browser Results

- [endpoint](result/endpoint.md): The discovered service endpoint.
- [interfaces](result/interfaces.md): The list of interfaces on which the service was discovered.
- [metadata](result/metadata-swift.property.md): The metadata associated with the discovered service, such as the TXT record.
- [NWBrowser.Result.Metadata](result/metadata-swift.enum.md): Values associated with discovered services, such as TXT records.
- [NWTXTRecord](../nwtxtrecord.md): A dictionary representing a TXT record in a DNS packet.

### Comparing Results

- [NWBrowser.Result.Change](result/change.md): Ways in which discovered services can change between specific results.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Browsing for Services

- [init(for:using:)](init%28for_using_%29.md): Initializes a browser with a type of service to discover.
- [NWBrowser.Descriptor](descriptor-swift.enum.md): A service description used to discover Bonjour services.
- [start(queue:)](start%28queue_%29.md): Starts browsing for services, and sets the queue on which all browser events will be delivered.
- [browseResultsChangedHandler](browseresultschangedhandler.md): A handler that delivers updates about discovered services.
- [browseResults](browseresults.md): The list of discovered services.
