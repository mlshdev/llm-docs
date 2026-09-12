> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpclistener/delegate](https://developer.apple.com/documentation/foundation/nsxpclistener/delegate)

# delegate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate for the listener.

## Declaration

```swift
weak var delegate: (any NSXPCListenerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

If no delegate is set, all new connections are rejected. See the documentation for [NSXPCListenerDelegate](../nsxpclistenerdelegate.md) for implementation details.

# delegate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The delegate for the listener.

## Declaration

```objectivec
@property (weak, nullable) id<NSXPCListenerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

If no delegate is set, all new connections are rejected. See the documentation for [NSXPCListenerDelegate](../nsxpclistenerdelegate.md) for implementation details.
