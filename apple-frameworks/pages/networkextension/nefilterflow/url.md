> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterflow/url](https://developer.apple.com/documentation/networkextension/nefilterflow/url)

# url (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The flow’s HTTP URL.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This parameter is only non-`nil` for flows that originate from WebKit browser objects.

## See Also

### Inspecting flow properties

- [identifier](identifier.md): The unique identifier of the flow.
- [direction](direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.

# URL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The flow’s HTTP URL.

## Declaration

```objectivec
@property (readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

This parameter is only non-`nil` for flows that originate from WebKit browser objects.

## See Also

### Inspecting flow properties

- [identifier](identifier.md): The unique identifier of the flow.
- [direction](direction.md): The initial direction of the flow: incoming or outgoing.
- [NETrafficDirection](../netrafficdirection.md): A type to represent the direction of network traffic.
- [NEFilterFlowBytesMax](../nefilterflowbytesmax.md): The maximum number of bytes to pass or peek for a flow.
