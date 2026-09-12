> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsproxy/forwardinvocation(_:)](https://developer.apple.com/documentation/foundation/nsproxy/forwardinvocation(_:))

# forwardInvocation(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Passes a given invocation to the real object the proxy represents.

## Declaration

```swift
func forwardInvocation(_ invocation: NSInvocation)
```

## Parameters

- `invocation`: The invocation to forward.

<a id="Discussion"></a>

## Discussion

`NSProxy`’s implementation merely raises `NSInvalidArgumentException`. Override this method in your subclass to handle `invocation` appropriately, at the very least by setting its return value.

For example, if your proxy merely forwards messages to an instance variable named `realObject`, it can implement [forwardInvocation(\_:)](forwardinvocation%28__%29.md) like this:

```objc
- (void)forwardInvocation:(NSInvocation *)anInvocation
{
    [anInvocation setTarget:realObject];
    [anInvocation invoke];
    return;
}
```

# forwardInvocation: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Passes a given invocation to the real object the proxy represents.

## Declaration

```objectivec
- (void) forwardInvocation:(NSInvocation *) invocation;
```

## Parameters

- `invocation`: The invocation to forward.

<a id="Discussion"></a>

## Discussion

`NSProxy`’s implementation merely raises `NSInvalidArgumentException`. Override this method in your subclass to handle `invocation` appropriately, at the very least by setting its return value.

For example, if your proxy merely forwards messages to an instance variable named `realObject`, it can implement [forwardInvocation:](forwardinvocation%28__%29.md) like this:

```objc
- (void)forwardInvocation:(NSInvocation *)anInvocation
{
    [anInvocation setTarget:realObject];
    [anInvocation invoke];
    return;
}
```

## See Also

### Handling Unimplemented Methods

- [methodSignatureForSelector:](methodsignatureforselector_.md): Raises `NSInvalidArgumentException`. Override this method in your concrete subclass to return a proper `NSMethodSignature` object for the given selector and the class your proxy objects stand in for.
