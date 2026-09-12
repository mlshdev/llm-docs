> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/direction](https://developer.apple.com/documentation/networkextension/nefilterflow/direction)

# direction (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The initial direction of the flow: incoming or outgoing.

## Declaration

```swift
var direction: NETrafficDirection { get }
```

## See Also

### Inspecting flow properties

- [url](url.md): The flow’s HTTP URL.
- [identifier](identifier.md): The unique identifier of the flow.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.

# direction (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The initial direction of the flow: incoming or outgoing.

## Declaration

```objectivec
@property (readonly) NETrafficDirection direction;
```

## See Also

### Inspecting flow properties

- [URL](url.md): The flow’s HTTP URL.
- [identifier](identifier.md): The unique identifier of the flow.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.
