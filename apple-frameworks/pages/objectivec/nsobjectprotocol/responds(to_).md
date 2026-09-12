> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobjectprotocol/responds(to:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/responds(to:))

# responds(to:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 1.0+ · macOS 10.0+ · tvOS 1.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.

## Declaration

```swift
func responds(to aSelector: Selector!) -> Bool
```

## Parameters

- `aSelector`: A selector that identifies a message.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver implements or inherits a method that can respond to `aSelector`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The application is responsible for determining whether a [NO](../no.md) response should be considered an error.

You cannot test whether an object inherits a method from its superclass by sending [responds(to:)](responds%28to_%29.md) to the object using the `super` keyword. This method will still be testing the object as a whole, not just the superclass’s implementation. Therefore, sending [responds(to:)](responds%28to_%29.md) to `super` is equivalent to sending it to `self`. Instead, you must invoke the `NSObject` class method [instancesRespond(to:)](../nsobject-swift.class/instancesrespond%28to_%29.md) directly on the object’s superclass, as illustrated in the following code fragment.

```objc
if( [MySuperclass instancesRespondToSelector:@selector(aMethod)] ) {
    // invoke the inherited method
    [super aMethod];
}
```

You cannot simply use `[[self superclass] instancesRespondToSelector:@selector(aMethod)]` since this may cause the method to fail if it is invoked by a subclass.

Note that if the receiver is able to forward `aSelector` messages to another object, it will be able to respond to the message, albeit indirectly, even though this method returns [NO](../no.md).

## See Also

### Related Documentation

- [instancesRespond(to:)](../nsobject-swift.class/instancesrespond%28to_%29.md): Returns a Boolean value that indicates whether instances of the receiver are capable of responding to a given selector.

### Testing Object Inheritance, Behavior, and Conformance

- [isKind(of:)](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMember(of:)](ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [conforms(to:)](conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.

# respondsToSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.

## Declaration

```objectivec
- (BOOL) respondsToSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A selector that identifies a message.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the receiver implements or inherits a method that can respond to `aSelector`, otherwise [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The application is responsible for determining whether a [NO](../no.md) response should be considered an error.

You cannot test whether an object inherits a method from its superclass by sending [respondsToSelector:](responds%28to_%29.md) to the object using the `super` keyword. This method will still be testing the object as a whole, not just the superclass’s implementation. Therefore, sending [respondsToSelector:](responds%28to_%29.md) to `super` is equivalent to sending it to `self`. Instead, you must invoke the `NSObject` class method [instancesRespondToSelector:](../nsobject-swift.class/instancesrespond%28to_%29.md) directly on the object’s superclass, as illustrated in the following code fragment.

```objc
if( [MySuperclass instancesRespondToSelector:@selector(aMethod)] ) {
    // invoke the inherited method
    [super aMethod];
}
```

You cannot simply use `[[self superclass] instancesRespondToSelector:@selector(aMethod)]` since this may cause the method to fail if it is invoked by a subclass.

Note that if the receiver is able to forward `aSelector` messages to another object, it will be able to respond to the message, albeit indirectly, even though this method returns [NO](../no.md).

## See Also

### Related Documentation

- [instancesRespondToSelector:](../nsobject-swift.class/instancesrespond%28to_%29.md): Returns a Boolean value that indicates whether instances of the receiver are capable of responding to a given selector.
- [forwardInvocation:](../nsobject-swift.class/forwardinvocation_.md): Overridden by subclasses to forward messages to other objects.

### Testing Object Inheritance, Behavior, and Conformance

- [isKindOfClass:](iskind%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of given class or an instance of any class that inherits from that class.
- [isMemberOfClass:](ismember%28of_%29.md): Returns a Boolean value that indicates whether the receiver is an instance of a given class.
- [conformsToProtocol:](conforms%28to_%29.md): Returns a Boolean value that indicates whether the receiver conforms to a given protocol.
