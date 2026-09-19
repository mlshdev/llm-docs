> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/handle

# handle

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the underlying system handle associated with the specified dispatch source.

## Declaration

```swift
var handle: UInt { get }
```

## See Also

### Getting the Dispatch Source Attributes

- [data](data.md): Returns pending data for the dispatch source.
- [mask](mask.md): Returns the mask of events monitored by the dispatch source.
