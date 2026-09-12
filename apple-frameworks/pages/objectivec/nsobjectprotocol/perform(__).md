> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/perform(_:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform(_:))

# perform(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 1.0+ · macOS 10.0+ · tvOS 1.0+ · visionOS 1.0+ · watchOS 1.0+

Sends a specified message to the receiver and returns the result of the message.

## Declaration

```swift
func perform(_ aSelector: Selector!) -> Unmanaged<AnyObject>!
```

## Parameters

- `aSelector`: A selector identifying the message to send. The message should take no arguments. If `aSelector` is `NULL`, an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised.

<a id="return-value"></a>

## Return Value

An object that is the result of the message.

<a id="Discussion"></a>

## Discussion

Calling the [perform(\_:)](perform%28__%29.md) method is equivalent to sending the `aSelector` message directly to the receiver. For example, the following both do the same thing if `anObject` is an instance of `MyObject`:

**Swift**

```swift
let aClone = anObject.copy()
let aClone = anObject.perform(#selector(MyObject.copy)).takeRetainedValue()
```

**Objective-C**

```objc
id aClone = [anObject copy];
id aClone = [anObject performSelector:@selector(copy)];
id aClone = [anObject performSelector:sel_getUid("copy")];
```

The [perform(\_:)](perform%28__%29.md) method allows you to send messages that aren’t determined until run-time. This means that you can pass a variable selector as the argument:

**Swift**

```swift
let aSelector = findTheAppropriateSelectorForTheCurrentSituation()
let returnedObject = anObject.perform(aSelector).takeUnretainedValue()
```

**Objective-C**

```objc
SEL aSelector = findTheAppropriateSelectorForTheCurrentSituation();
id returnedObject = [anObject performSelector:aSelector];
```

Use caution when doing this. This method returns an implicitly unwrapped optional unmanaged pointer to an `AnyObject` instance ([Unmanaged](https://developer.apple.com/documentation/swift/unmanaged)`<`[AnyObject](https://developer.apple.com/documentation/swift/anyobject)`>!`).  It’s up to you to decide how to bring the instance into Swift’s memory management scheme.  Different messages require different memory management strategies for their returned objects, and it might not be obvious which to use.

Usually, a caller isn’t responsible for the memory of a returned instance, in which case you use [takeUnretainedValue()](https://developer.apple.com/documentation/swift/unmanaged/takeunretainedvalue%28%29), as shown above. However, for any of the creation methods, such as [copy()](../nsobject-swift.class/copy%28%29.md), the caller is responsible, and you use [takeRetainedValue()](https://developer.apple.com/documentation/swift/unmanaged/takeretainedvalue%28%29) instead. See [Memory Management Policy](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmRules.html#//apple_ref/doc/uid/20000994) in [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i) for a description of ownership expectations.

Due to this uncertainty, the compiler generates a warning if you supply a variable selector while using ARC to manage memory. Because it can’t determine ownership of the returned object at compile-time, ARC makes the assumption that the caller does *not* need to take ownership, but this may not be true. The compiler warning alerts you to the potential for a memory leak.

To avoid the warning, if you know that `aSelector` has no return value, you might be able to use [performSelector(onMainThread:with:waitUntilDone:)](../nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md) or one of the related methods available in [NSObject](../nsobject-swift.class.md).

For a more general solution, use [NSInvocation](../../foundation/nsinvocation.md) to construct a message that you can invoke with an arbitrary argument list and return value.

Alternatively, consider restructuring your code to use blocks as a means of passing chunks of functionality through an API. See [Blocks Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40007502) for details.

> **Important**

>  Because of the inherent lack of type safety, this API isn’t recommended for use in Swift unless your code specifically relies on the dynamic method resolution provided by the Objective-C run-time.
>
> For more information about using selectors in Swift and alternatives to the [perform(\_:)](perform%28__%29.md) function, read [Using Objective-C Runtime Features in Swift](https://developer.apple.com/documentation/swift/using-objective-c-runtime-features-in-swift).

## See Also

### Sending Messages

- [perform(\_:with:)](perform%28__with_%29.md): Sends a message to the receiver with an object as the argument.
- [perform(\_:with:with:)](perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.

# performSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Sends a specified message to the receiver and returns the result of the message.

## Declaration

```objectivec
- (id) performSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A selector identifying the message to send. The message should take no arguments. If `aSelector` is `NULL`, an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) is raised.

<a id="return-value"></a>

## Return Value

An object that is the result of the message.

<a id="Discussion"></a>

## Discussion

Calling the [performSelector:](perform%28__%29.md) method is equivalent to sending the `aSelector` message directly to the receiver. For example, the following both do the same thing if `anObject` is an instance of `MyObject`:

**Swift**

```swift
let aClone = anObject.copy()
let aClone = anObject.perform(#selector(MyObject.copy)).takeRetainedValue()
```

**Objective-C**

```objc
id aClone = [anObject copy];
id aClone = [anObject performSelector:@selector(copy)];
id aClone = [anObject performSelector:sel_getUid("copy")];
```

The [performSelector:](perform%28__%29.md) method allows you to send messages that aren’t determined until run-time. This means that you can pass a variable selector as the argument:

**Swift**

```swift
let aSelector = findTheAppropriateSelectorForTheCurrentSituation()
let returnedObject = anObject.perform(aSelector).takeUnretainedValue()
```

**Objective-C**

```objc
SEL aSelector = findTheAppropriateSelectorForTheCurrentSituation();
id returnedObject = [anObject performSelector:aSelector];
```

Use caution when doing this. This method returns an implicitly unwrapped optional unmanaged pointer to an `AnyObject` instance ([Unmanaged](https://developer.apple.com/documentation/swift/unmanaged)`<`[AnyObject](https://developer.apple.com/documentation/swift/anyobject)`>!`).  It’s up to you to decide how to bring the instance into Swift’s memory management scheme.  Different messages require different memory management strategies for their returned objects, and it might not be obvious which to use.

Usually, a caller isn’t responsible for the memory of a returned instance, in which case you use [takeUnretainedValue()](https://developer.apple.com/documentation/swift/unmanaged/takeunretainedvalue%28%29), as shown above. However, for any of the creation methods, such as [copy](../nsobject-swift.class/copy%28%29.md), the caller is responsible, and you use [takeRetainedValue()](https://developer.apple.com/documentation/swift/unmanaged/takeretainedvalue%28%29) instead. See [Memory Management Policy](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmRules.html#//apple_ref/doc/uid/20000994) in [Advanced Memory Management Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html#//apple_ref/doc/uid/10000011i) for a description of ownership expectations.

Due to this uncertainty, the compiler generates a warning if you supply a variable selector while using ARC to manage memory. Because it can’t determine ownership of the returned object at compile-time, ARC makes the assumption that the caller does *not* need to take ownership, but this may not be true. The compiler warning alerts you to the potential for a memory leak.

To avoid the warning, if you know that `aSelector` has no return value, you might be able to use [performSelectorOnMainThread:withObject:waitUntilDone:](../nsobject-swift.class/performselector%28onmainthread_with_waituntildone_%29.md) or one of the related methods available in [NSObject](../nsobject-swift.class.md).

For a more general solution, use [NSInvocation](../../foundation/nsinvocation.md) to construct a message that you can invoke with an arbitrary argument list and return value.

Alternatively, consider restructuring your code to use blocks as a means of passing chunks of functionality through an API. See [Blocks Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html#//apple_ref/doc/uid/TP40007502) for details.

> **Important**

>  Because of the inherent lack of type safety, this API isn’t recommended for use in Swift unless your code specifically relies on the dynamic method resolution provided by the Objective-C run-time.
>
> For more information about using selectors in Swift and alternatives to the [performSelector:](perform%28__%29.md) function, read [Using Objective-C Runtime Features in Swift](https://developer.apple.com/documentation/swift/using-objective-c-runtime-features-in-swift).

## See Also

### Sending Messages

- [performSelector:withObject:](perform%28__with_%29.md): Sends a message to the receiver with an object as the argument.
- [performSelector:withObject:withObject:](perform%28__with_with_%29.md): Sends a message to the receiver with two objects as arguments.
