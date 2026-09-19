> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwlistener/service-swift.struct/txtrecordobject

# txtRecordObject

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The TXT record to advertise with the service.

## Declaration

```swift
var txtRecordObject: NWTXTRecord? { get set }
```

## See Also

### Inspecting Services

- [name](name.md): The Bonjour name of the service.
- [type](type.md): The Bonjour type of the service.
- [domain](domain.md): The Bonjour domain of the service.
- [txtRecord](txtrecord.md): The TXT record as a raw buffer to advertise with the service.
