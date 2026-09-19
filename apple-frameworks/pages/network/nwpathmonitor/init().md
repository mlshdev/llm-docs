> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwpathmonitor/init()

# init()

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a path monitor to observe all available interface types.

## Declaration

```swift
init()
```

## See Also

### Creating Path Monitors

- [init(requiredInterfaceType:)](init%28requiredinterfacetype_%29.md): Initializes a path monitor to observe a specific interface type.
- [init(prohibitedInterfaceTypes:)](init%28prohibitedinterfacetypes_%29.md): Initializes a path monitor to observe interface types that are not explicitly prohibited.
- [start(queue:)](start%28queue_%29.md): Starts monitoring path changes, and sets a queue on which to deliver path events.
- [queue](queue.md): The queue on which path events are delivered.
