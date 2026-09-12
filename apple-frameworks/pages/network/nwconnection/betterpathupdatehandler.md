> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwconnection/betterpathupdatehandler](https://developer.apple.com/documentation/network/nwconnection/betterpathupdatehandler)

# betterPathUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A handler that receives updates when an alternative network path is preferred over the current path.

## Declaration

```swift
@preconcurrency final var betterPathUpdateHandler: (@Sendable (Bool) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

Better path events are an indication that a more preferable network path is available. If you can migrate your work to a new connection, try establishing a new connection. Once that new connection is ready, cancel the original connection.

## See Also

### Handling Path Updates

- [currentPath](currentpath.md): The network path the connection is using.
- [pathUpdateHandler](pathupdatehandler.md): A handler that receives network path updates.
- [viabilityUpdateHandler](viabilityupdatehandler.md): A handler that receives updates when data can be sent and received.
