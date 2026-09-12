> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsport/port](https://developer.apple.com/documentation/foundation/nsport/port)

# port

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new `NSPort` object capable of both sending and receiving messages.

## Declaration

```objectivec
+ (NSPort *) port;
```

<a id="return-value"></a>

## Return Value

A new `NSPort` object capable of both sending and receiving messages.

## See Also

### Creating instances

- [allocWithZone:](../nsport-allocwithzone.md): Returns an instance of the `NSMachPort` class.
