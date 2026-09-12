> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/instancemethod(for:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/instancemethod(for:))

# instanceMethod(for:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Locates and returns the address of the implementation of the instance method identified by a given selector.

## Declaration

```swift
class func instanceMethod(for aSelector: Selector!) -> IMP!
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method for which to return the implementation address. The selector must be non-`NULL` and valid for the receiver. If in doubt, use the [responds(to:)](../nsobjectprotocol/responds%28to_%29.md) method to check before passing the selector to [method(for:)](method%28for_%29.md).

<a id="return-value"></a>

## Return Value

The address of the implementation of the `aSelector` instance method.

<a id="Discussion"></a>

## Discussion

An error is generated if instances of the receiver can’t respond to `aSelector` messages.

Use this method to ask the class object for the implementation of instance methods only. To ask the class for the implementation of a class method, send the [method(for:)](method%28for_%29.md) instance method to the class instead.

## See Also

### Obtaining Information About Methods

- [method(for:)](method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.

# instanceMethodForSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Locates and returns the address of the implementation of the instance method identified by a given selector.

## Declaration

```objectivec
+ (IMP) instanceMethodForSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method for which to return the implementation address. The selector must be non-`NULL` and valid for the receiver. If in doubt, use the [respondsToSelector:](../nsobjectprotocol/responds%28to_%29.md) method to check before passing the selector to [methodForSelector:](method%28for_%29.md).

<a id="return-value"></a>

## Return Value

The address of the implementation of the `aSelector` instance method.

<a id="Discussion"></a>

## Discussion

An error is generated if instances of the receiver can’t respond to `aSelector` messages.

Use this method to ask the class object for the implementation of instance methods only. To ask the class for the implementation of a class method, send the [methodForSelector:](method%28for_%29.md) instance method to the class instead.

## See Also

### Obtaining Information About Methods

- [methodForSelector:](method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.
- [instanceMethodSignatureForSelector:](instancemethodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the instance method identified by a given selector.
- [methodSignatureForSelector:](methodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the method identified by a given selector.
