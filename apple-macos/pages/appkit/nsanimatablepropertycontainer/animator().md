> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimatablepropertycontainer/animator()](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer/animator())

# animator() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

## Declaration

```swift
func animator() -> Self
```

<a id="return-value"></a>

## Return Value

Returns a proxy object for the receiver that can initiate implied animations in response to property changes.

<a id="Discussion"></a>

## Discussion

The animator proxy object  should be treated as if it was the receiver itself, and may be passed to any code that accepts the receiver as a parameter.

Sending key-value coding compliant “set” messages to the proxy will trigger animation for automatically animated properties of its target object, if the active [NSAnimationContext](../nsanimationcontext.md) in the current thread has a duration value greater than zero, and an animation for the property key is found by the [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) search mechanism.

# animator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a proxy object for the receiver that can be used to initiate implied animation for property changes.

## Declaration

```objectivec
- (instancetype) animator;
```

<a id="return-value"></a>

## Return Value

Returns a proxy object for the receiver that can initiate implied animations in response to property changes.

<a id="Discussion"></a>

## Discussion

The animator proxy object  should be treated as if it was the receiver itself, and may be passed to any code that accepts the receiver as a parameter.

Sending key-value coding compliant “set” messages to the proxy will trigger animation for automatically animated properties of its target object, if the active [NSAnimationContext](../nsanimationcontext.md) in the current thread has a duration value greater than zero, and an animation for the property key is found by the [NSAnimatablePropertyContainer](../nsanimatablepropertycontainer.md) search mechanism.
