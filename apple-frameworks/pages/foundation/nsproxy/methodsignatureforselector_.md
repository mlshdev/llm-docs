> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy/methodsignatureforselector:](https://developer.apple.com/documentation/foundation/nsproxy/methodsignatureforselector:)

# methodSignatureForSelector:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Raises `NSInvalidArgumentException`. Override this method in your concrete subclass to return a proper `NSMethodSignature` object for the given selector and the class your proxy objects stand in for.

## Declaration

```objectivec
- (NSMethodSignature *) methodSignatureForSelector:(SEL) sel;
```

## Parameters

- `sel`: The selector for which to return a method signature.

<a id="return-value"></a>

## Return Value

Not applicable. The implementation provided by `NSProxy` raises an exception.

<a id="Discussion"></a>

## Discussion

Be sure to avoid an infinite loop when necessary by checking that `sel` isn’t the selector for this method itself and by not sending any message that might invoke this method.

For example, if your proxy merely forwards messages to an instance variable named `realObject`, it can implement [methodSignatureForSelector:](methodsignatureforselector_.md) like this:

```objc
– (NSMethodSignature *)methodSignatureForSelector:(SEL)aSelector
{
    return [realObject methodSignatureForSelector:aSelector];
}
```

## See Also

### Related Documentation

- [methodSignatureForSelector:](../../objectivec/nsobject-swift.class/methodsignatureforselector_.md): Returns an `NSMethodSignature` object that contains a description of the method identified by a given selector.

### Handling Unimplemented Methods

- [forwardInvocation:](forwardinvocation%28__%29.md): Passes a given invocation to the real object the proxy represents.
