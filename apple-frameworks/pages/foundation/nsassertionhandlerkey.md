> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsassertionhandlerkey](https://developer.apple.com/documentation/foundation/nsassertionhandlerkey)

# NSAssertionHandlerKey (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value in the thread dictionary.

## Declaration

```swift
let NSAssertionHandlerKey: String
```

<a id="discussion"></a>

## Discussion

If you need to customize the behavior of `NSAssertionHandler`, create a subclass, overriding [handleFailureInMethod:object:file:lineNumber:description:](nsassertionhandler/handlefailureinmethod_object_file_linenumber_description_.md) and [handleFailureInFunction:file:lineNumber:description:](nsassertionhandler/handlefailureinfunction_file_linenumber_description_.md), and install your instance into the current thread’s attributes dictionary with this key.

## See Also

### Working with Thread Properties

- [threadDictionary](thread/threaddictionary.md): The thread object’s dictionary.
- [name](thread/name.md): The name of the receiver.
- [stackSize](thread/stacksize.md): The stack size of the receiver, in bytes.

# NSAssertionHandlerKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key with a corresponding value in the thread dictionary.

## Declaration

```objectivec
extern NSString * const NSAssertionHandlerKey;
```

<a id="discussion"></a>

## Discussion

If you need to customize the behavior of `NSAssertionHandler`, create a subclass, overriding [handleFailureInMethod:object:file:lineNumber:description:](nsassertionhandler/handlefailureinmethod_object_file_linenumber_description_.md) and [handleFailureInFunction:file:lineNumber:description:](nsassertionhandler/handlefailureinfunction_file_linenumber_description_.md), and install your instance into the current thread’s attributes dictionary with this key.

## See Also

### Working with Thread Properties

- [threadDictionary](thread/threaddictionary.md): The thread object’s dictionary.
- [name](thread/name.md): The name of the receiver.
- [stackSize](thread/stacksize.md): The stack size of the receiver, in bytes.
