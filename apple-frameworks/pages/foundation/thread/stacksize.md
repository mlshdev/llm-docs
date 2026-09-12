> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/stacksize](https://developer.apple.com/documentation/foundation/thread/stacksize)

# stackSize (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stack size of the receiver, in bytes.

## Declaration

```swift
var stackSize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value must be in bytes and a multiple of 4KB.

To change the stack size, you must set this property before starting your thread. Setting the stack size after the thread has started changes the attribute size (which is reflected by the [stackSize](stacksize.md) method), but it does not affect the actual number of pages set aside for the thread.

## See Also

### Working with Thread Properties

- [threadDictionary](threaddictionary.md): The thread object’s dictionary.
- [NSAssertionHandlerKey](../nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](name.md): The name of the receiver.

# stackSize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stack size of the receiver, in bytes.

## Declaration

```objectivec
@property NSUInteger stackSize;
```

<a id="Discussion"></a>

## Discussion

This value must be in bytes and a multiple of 4KB.

To change the stack size, you must set this property before starting your thread. Setting the stack size after the thread has started changes the attribute size (which is reflected by the [stackSize](stacksize.md) method), but it does not affect the actual number of pages set aside for the thread.

## See Also

### Working with Thread Properties

- [threadDictionary](threaddictionary.md): The thread object’s dictionary.
- [NSAssertionHandlerKey](../nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](name.md): The name of the receiver.
