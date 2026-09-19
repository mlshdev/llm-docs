> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/init(from:)

# init(from:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Create the request from a decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to use.

## See Also

### Creating the request

- [init(topology:setupPayload:showing:)](init%28topology_setuppayload_showing_%29.md): Create the request.
- [init(topology:setupPayload:showing:shouldScanNetworks:)](init%28topology_setuppayload_showing_shouldscannetworks_%29.md): Create the request with an optional network scan.
