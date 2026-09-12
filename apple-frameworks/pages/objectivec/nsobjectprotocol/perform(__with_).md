> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/perform(_:with:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform(_:with:))

# perform(\_:with:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 1.0+ · macOS 10.0+ · tvOS 1.0+ · visionOS 1.0+ · watchOS 1.0+

Sends a message to the receiver with an object as the argument.

## Declaration

```swift
func perform(_ aSelector: Selector!, with object: Any!) -> Unmanaged<AnyObject>!
```

## Parameters

- `aSelector`: A selector identifying the message to send. If `aSelector` is `NULL`, an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised.
- `object`: An object that is the sole argument of the message.

<a id="return-value"></a>

## Return Value

An object that is the result of the message.

<a id="Discussion"></a>

## Discussion

This method is the same as [perform(\_:)](perform%28__%29.md) except that you can supply an argument for `aSelector`. `aSelector` should identify a method that takes a single argument of type id. For methods with other argument types and return values, use [NSInvocation](../../foundation/nsinvocation.md).

## See Also

### Related Documentation

- [method(for:)](../nsobject-swift.class/method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.

### Sending Messages

- [perform(\_:)](perform%28__%29.md): Sends a specified message to the receiver and returns the result of the message.
- [perform(\_:with:with:)](perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.

# performSelector:withObject: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends a message to the receiver with an object as the argument.

## Declaration

```objectivec
- (id) performSelector:(SEL) aSelector withObject:(id) object;
```

## Parameters

- `aSelector`: A selector identifying the message to send. If `aSelector` is `NULL`, an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised.
- `object`: An object that is the sole argument of the message.

<a id="return-value"></a>

## Return Value

An object that is the result of the message.

<a id="Discussion"></a>

## Discussion

This method is the same as [performSelector:](perform%28__%29.md) except that you can supply an argument for `aSelector`. `aSelector` should identify a method that takes a single argument of type id. For methods with other argument types and return values, use [NSInvocation](../../foundation/nsinvocation.md).

## See Also

### Related Documentation

- [methodForSelector:](../nsobject-swift.class/method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.

### Sending Messages

- [performSelector:](perform%28__%29.md): Sends a specified message to the receiver and returns the result of the message.
- [performSelector:withObject:withObject:](perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.
