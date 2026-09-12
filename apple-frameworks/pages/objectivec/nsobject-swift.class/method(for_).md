> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/method(for:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/method(for:))

# method(for:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.

## Declaration

```swift
func method(for aSelector: Selector!) -> IMP!
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method for which to return the implementation address. The selector must be a valid and non-`NULL`. If in doubt, use the [responds(to:)](../nsobjectprotocol/responds%28to_%29.md) method to check before passing the selector to [method(for:)](method%28for_%29.md).

<a id="return-value"></a>

## Return Value

The address of the receiver’s implementation of the `aSelector`.

<a id="Discussion"></a>

## Discussion

If the receiver is an instance, `aSelector` should refer to an instance method; if the receiver is a class, it should refer to a class method.

## See Also

### Obtaining Information About Methods

- [instanceMethod(for:)](instancemethod%28for_%29.md): Locates and returns the address of the implementation of the instance method identified by a given selector.

# methodForSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.

## Declaration

```objectivec
- (IMP) methodForSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method for which to return the implementation address. The selector must be a valid and non-`NULL`. If in doubt, use the [respondsToSelector:](../nsobjectprotocol/responds%28to_%29.md) method to check before passing the selector to [methodForSelector:](method%28for_%29.md).

<a id="return-value"></a>

## Return Value

The address of the receiver’s implementation of the `aSelector`.

<a id="Discussion"></a>

## Discussion

If the receiver is an instance, `aSelector` should refer to an instance method; if the receiver is a class, it should refer to a class method.

## See Also

### Obtaining Information About Methods

- [instanceMethodForSelector:](instancemethod%28for_%29.md): Locates and returns the address of the implementation of the instance method identified by a given selector.
- [instanceMethodSignatureForSelector:](instancemethodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the instance method identified by a given selector.
- [methodSignatureForSelector:](methodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the method identified by a given selector.
