> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovider/reasserting](https://developer.apple.com/documentation/networkextension/netunnelprovider/reasserting)

# reasserting (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Indicate to the system that the tunnel is being re-established.

## Declaration

```swift
var reasserting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The Tunnel Provider should set this property to [true](https://developer.apple.com/documentation/swift/true) whenever it starts to reconnect to the tunnel server. Once the Tunnel Provider completes the process of reconnecting it should set this property to [false](https://developer.apple.com/documentation/swift/false).

# reasserting (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Indicate to the system that the tunnel is being re-established.

## Declaration

```objectivec
@property BOOL reasserting;
```

<a id="Discussion"></a>

## Discussion

The Tunnel Provider should set this property to [true](https://developer.apple.com/documentation/swift/true) whenever it starts to reconnect to the tunnel server. Once the Tunnel Provider completes the process of reconnecting it should set this property to [false](https://developer.apple.com/documentation/swift/false).
