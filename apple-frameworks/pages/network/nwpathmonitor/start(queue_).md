> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwpathmonitor/start(queue:)](https://developer.apple.com/documentation/network/nwpathmonitor/start(queue:))

# start(queue:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Starts monitoring path changes, and sets a queue on which to deliver path events.

## Declaration

```swift
final func start(queue: DispatchQueue)
```

## See Also

### Creating Path Monitors

- [init()](init%28%29.md): Initializes a path monitor to observe all available interface types.
- [init(requiredInterfaceType:)](init%28requiredinterfacetype_%29.md): Initializes a path monitor to observe a specific interface type.
- [init(prohibitedInterfaceTypes:)](init%28prohibitedinterfacetypes_%29.md): Initializes a path monitor to observe interface types that are not explicitly prohibited.
- [queue](queue.md): The queue on which path events are delivered.
