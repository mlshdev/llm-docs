> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread/threaddictionary](https://developer.apple.com/documentation/foundation/thread/threaddictionary)

# threadDictionary (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The thread object’s dictionary.

## Declaration

```swift
var threadDictionary: NSMutableDictionary { get }
```

<a id="Discussion"></a>

## Discussion

You can use the returned dictionary to store thread-specific data. The thread dictionary is not used during any manipulations of the `NSThread` object—it is simply a place where you can store any interesting data. For example, Foundation uses it to store the thread’s default `NSConnection` and `NSAssertionHandler` instances. You may define your own keys for the dictionary.

## See Also

### Working with Thread Properties

- [NSAssertionHandlerKey](../nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](name.md): The name of the receiver.
- [stackSize](stacksize.md): The stack size of the receiver, in bytes.

# threadDictionary (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The thread object’s dictionary.

## Declaration

```objectivec
@property (retain, readonly) NSMutableDictionary * threadDictionary;
```

<a id="Discussion"></a>

## Discussion

You can use the returned dictionary to store thread-specific data. The thread dictionary is not used during any manipulations of the `NSThread` object—it is simply a place where you can store any interesting data. For example, Foundation uses it to store the thread’s default `NSConnection` and `NSAssertionHandler` instances. You may define your own keys for the dictionary.

## See Also

### Working with Thread Properties

- [NSAssertionHandlerKey](../nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](name.md): The name of the receiver.
- [stackSize](stacksize.md): The stack size of the receiver, in bytes.
