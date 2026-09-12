> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpathmonitor/init(prohibitedinterfacetypes:)](https://developer.apple.com/documentation/network/nwpathmonitor/init(prohibitedinterfacetypes:))

# init(prohibitedInterfaceTypes:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a path monitor to observe interface types that are not explicitly prohibited.

## Declaration

```swift
init(prohibitedInterfaceTypes: [NWInterface.InterfaceType])
```

## See Also

### Creating Path Monitors

- [init()](init%28%29.md): Initializes a path monitor to observe all available interface types.
- [init(requiredInterfaceType:)](init%28requiredinterfacetype_%29.md): Initializes a path monitor to observe a specific interface type.
- [start(queue:)](start%28queue_%29.md): Starts monitoring path changes, and sets a queue on which to deliver path events.
- [queue](queue.md): The queue on which path events are delivered.
