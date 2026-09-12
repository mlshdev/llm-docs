> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflowbytesmax](https://developer.apple.com/documentation/networkextension/nefilterflowbytesmax)

# NEFilterFlowBytesMax (Swift)

**Framework:** Network Extension  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of bytes to pass or peek for a flow.

## Declaration

```swift
var NEFilterFlowBytesMax: UInt64 { get }
```

<a id="Discussion"></a>

## Discussion

When used as a pass value, this value directs to flow to pass all upcoming bytes. When used as a peek value, it indicates the flow should peek as many bytes as possible.

## See Also

### Inspecting flow properties

- [url](nefilterflow/url.md): The flow’s HTTP URL.
- [identifier](nefilterflow/identifier.md): The unique identifier of the flow.
- [direction](nefilterflow/direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.

# NEFilterFlowBytesMax (Objective-C)

**Framework:** Network Extension  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum number of bytes to pass or peek for a flow.

## Declaration

```objectivec
#define NEFilterFlowBytesMax
```

<a id="Discussion"></a>

## Discussion

When used as a pass value, this value directs to flow to pass all upcoming bytes. When used as a peek value, it indicates the flow should peek as many bytes as possible.

## See Also

### Inspecting flow properties

- [URL](nefilterflow/url.md): The flow’s HTTP URL.
- [identifier](nefilterflow/identifier.md): The unique identifier of the flow.
- [direction](nefilterflow/direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](netrafficdirection.md): A type to represent the direction of network traffic.
