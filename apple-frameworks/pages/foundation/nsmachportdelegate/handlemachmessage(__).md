> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmachportdelegate/handlemachmessage(_:)](https://developer.apple.com/documentation/foundation/nsmachportdelegate/handlemachmessage(_:))

# handleMachMessage(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Process an incoming Mach message.

## Declaration

```swift
optional func handleMachMessage(_ msg: UnsafeMutableRawPointer)
```

## Parameters

- `msg`: A pointer to a Mach message, cast as a pointer to void.

<a id="Discussion"></a>

## Discussion

The delegate should interpret this data as a pointer to a Mach message beginning with a msg_header_t structure and should handle the message appropriately.

The delegate should implement either `handleMachMessage:` or the [PortDelegate](../portdelegate.md) protocol method handlePortMessage:.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

# handleMachMessage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Process an incoming Mach message.

## Declaration

```objectivec
- (void) handleMachMessage:(void *) msg;
```

## Parameters

- `msg`: A pointer to a Mach message, cast as a pointer to void.

<a id="Discussion"></a>

## Discussion

The delegate should interpret this data as a pointer to a Mach message beginning with a msg_header_t structure and should handle the message appropriately.

The delegate should implement either `handleMachMessage:` or the [NSPortDelegate](../portdelegate.md) protocol method handlePortMessage:.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
