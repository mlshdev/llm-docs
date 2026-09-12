> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/doesnotrecognizeselector(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/doesnotrecognizeselector(_:))

# doesNotRecognizeSelector(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Handles messages the receiver doesn’t recognize.

## Declaration

```swift
func doesNotRecognizeSelector(_ aSelector: Selector!)
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies a method not implemented or recognized by the receiver.

<a id="Discussion"></a>

## Discussion

The runtime system invokes this method whenever an object receives an `aSelector` message it can’t respond to or forward. This method, in turn, raises an `NSInvalidArgumentException`, and generates an error message.

Any [doesNotRecognizeSelector(\_:)](doesnotrecognizeselector%28__%29.md) messages are generally sent only by the runtime system. However, they can be used in program code to prevent a method from being inherited. For example, an `NSObject` subclass might renounce the [copy()](copy%28%29.md) or [init()](init%28%29.md) method by re-implementing it to include a [doesNotRecognizeSelector(\_:)](doesnotrecognizeselector%28__%29.md) message as follows:

```objc
- (id)copy
{
    [self doesNotRecognizeSelector:_cmd];
}
```

The `_cmd` variable is a hidden argument passed to every method that is the current selector; in this example, it identifies the selector for the `copy` method. This code prevents instances of the subclass from responding to `copy` messages or superclasses from forwarding `copy` messages—although [responds(to:)](../nsobjectprotocol/responds%28to_%29.md) will still report that the receiver has access to a `copy` method.

If you override this method, you must call `super` or raise an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception at the end of your implementation. In other words, this method must not return normally; it must always result in an exception being thrown.

# doesNotRecognizeSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Handles messages the receiver doesn’t recognize.

## Declaration

```objectivec
- (void) doesNotRecognizeSelector:(SEL) aSelector;
```

## Parameters

- `aSelector`: A [Selector](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Selector.html#//apple_ref/doc/uid/TP40008195-CH48) that identifies a method not implemented or recognized by the receiver.

<a id="Discussion"></a>

## Discussion

The runtime system invokes this method whenever an object receives an `aSelector` message it can’t respond to or forward. This method, in turn, raises an `NSInvalidArgumentException`, and generates an error message.

Any [doesNotRecognizeSelector:](doesnotrecognizeselector%28__%29.md) messages are generally sent only by the runtime system. However, they can be used in program code to prevent a method from being inherited. For example, an `NSObject` subclass might renounce the [copy](copy%28%29.md) or [init](init%28%29.md) method by re-implementing it to include a [doesNotRecognizeSelector:](doesnotrecognizeselector%28__%29.md) message as follows:

```objc
- (id)copy
{
    [self doesNotRecognizeSelector:_cmd];
}
```

The `_cmd` variable is a hidden argument passed to every method that is the current selector; in this example, it identifies the selector for the `copy` method. This code prevents instances of the subclass from responding to `copy` messages or superclasses from forwarding `copy` messages—although [respondsToSelector:](../nsobjectprotocol/responds%28to_%29.md) will still report that the receiver has access to a `copy` method.

If you override this method, you must call `super` or raise an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception at the end of your implementation. In other words, this method must not return normally; it must always result in an exception being thrown.

## See Also

### Related Documentation

- [forwardInvocation:](forwardinvocation_.md): Overridden by subclasses to forward messages to other objects.
