> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/portdelegate/handle(_:)](https://developer.apple.com/documentation/foundation/portdelegate/handle(_:))

# handle(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Processes a given incoming message on the port.

## Declaration

```swift
optional func handle(_ message: NSPortMessage)
```

```swift
optional func handle(_ message: PortMessage)
```

## Parameters

- `message`: An incoming port message.

<a id="Discussion"></a>

## Discussion

See [Port](../port.md) for more information.

The delegate should implement either [handle(\_:)](handle%28__%29.md) or the [NSMachPortDelegate](../nsmachportdelegate.md) protocol method [handleMachMessage(\_:)](../nsmachportdelegate/handlemachmessage%28__%29.md). You must not implement both delegate methods.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)

# handlePortMessage: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Processes a given incoming message on the port.

## Declaration

```objectivec
- (void) handlePortMessage:(NSPortMessage *) message;
```

## Parameters

- `message`: An incoming port message.

<a id="Discussion"></a>

## Discussion

See [NSPort](../port.md) for more information.

The delegate should implement either [handlePortMessage:](handle%28__%29.md) or the [NSMachPortDelegate](../nsmachportdelegate.md) protocol method [handleMachMessage:](../nsmachportdelegate/handlemachmessage%28__%29.md). You must not implement both delegate methods.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
