> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/instancemethodsignatureforselector:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/instancemethodsignatureforselector:)

# instanceMethodSignatureForSelector:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns an `NSMethodSignature` object that contains a description of the instance method identified by a given selector.

## Declaration

```objectivec
+ (NSMethodSignature *) instanceMethodSignatureForSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies the method for which to return the implementation address.

<a id="return-value"></a>

## Return Value

An `NSMethodSignature` object that contains a description of the instance method identified by `aSelector`, or `nil` if the method can’t be found.

## See Also

### Obtaining Information About Methods

- [methodForSelector:](method%28for_%29.md): Locates and returns the address of the receiver’s implementation of a method so it can be called as a function.
- [instanceMethodForSelector:](instancemethod%28for_%29.md): Locates and returns the address of the implementation of the instance method identified by a given selector.
- [methodSignatureForSelector:](methodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the method identified by a given selector.
