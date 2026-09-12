> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/defaultconnection](https://developer.apple.com/documentation/foundation/nsconnection/defaultconnection)

# defaultConnection

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the default `NSConnection` object for the current thread.

> Create individual connection instances as needed instead.

## Declaration

```objectivec
+ (NSConnection *) defaultConnection;
```

<a id="return-value"></a>

## Return Value

The default `NSConnection` object for the current thread, creating it if necessary.

<a id="Discussion"></a>

## Discussion

The default `NSConnection` object uses a single `NSPort` object for both receiving and sending and is useful only for vending an object; use the [rootObject](rootobject-c.property.md) and [registerName:](registername_.md) methods to do this.

<a id="Special-Considerations"></a>

### Special Considerations

The singleton method of `NSConnection` has been deprecated. It was difficult to ensure that the shared connection wasn’t being used by other operations on the thread on which the default connection was requested. Using `[NSConnection new]` ensures that you get a unique connection object, preventing such collisions.

## See Also

### Related Documentation

- [Distributed Objects Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DistrObjects/DistrObjects.html#//apple_ref/doc/uid/10000102i)
