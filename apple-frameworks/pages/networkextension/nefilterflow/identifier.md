> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/identifier](https://developer.apple.com/documentation/networkextension/nefilterflow/identifier)

# identifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.1+ · iPadOS 13.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The unique identifier of the flow.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Inspecting flow properties

- [url](url.md): The flow’s HTTP URL.
- [direction](direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.

# identifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.1+ · iPadOS 13.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The unique identifier of the flow.

## Declaration

```objectivec
@property (readonly) NSUUID * identifier;
```

## See Also

### Inspecting flow properties

- [URL](url.md): The flow’s HTTP URL.
- [direction](direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.
