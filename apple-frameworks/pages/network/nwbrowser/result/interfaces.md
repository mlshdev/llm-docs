> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwbrowser/result/interfaces](https://developer.apple.com/documentation/network/nwbrowser/result/interfaces)

# interfaces

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The list of interfaces on which the service was discovered.

## Declaration

```swift
let interfaces: [NWInterface]
```

## See Also

### Evaluating Browser Results

- [endpoint](endpoint.md): The discovered service endpoint.
- [metadata](metadata-swift.property.md): The metadata associated with the discovered service, such as the TXT record.
- [NWBrowser.Result.Metadata](metadata-swift.enum.md): Values associated with discovered services, such as TXT records.
- [NWTXTRecord](../../nwtxtrecord.md): A dictionary representing a TXT record in a DNS packet.
