> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/trytoperform(_:with:)](https://developer.apple.com/documentation/appkit/nsapplication/trytoperform(_:with:))

# tryToPerform(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches an action message to the specified target.

## Declaration

```swift
func tryToPerform(_ action: Selector, with object: Any?) -> Bool
```

## Parameters

- `action`: The action message you want to dispatch.
- `object`: The target object that defines the specified selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if either the receiver or its delegate can accept the specified selector; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method also returns [false](https://developer.apple.com/documentation/swift/false) if `aSelector` is `nil`.

<a id="Discussion"></a>

## Discussion

The receiver tries to perform the method `aSelector` using its inherited [tryToPerform(\_:with:)](../nsresponder/trytoperform%28__with_%29.md) method of [NSResponder](../nsresponder.md). If the receiver doesn’t perform `aSelector`, the delegate is given the opportunity to perform it using its inherited [perform(\_:with:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29) method of [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class).

## See Also

### Related Documentation

- [responds(to:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/responds%28to:%29): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.

### Posting actions

- [sendAction(\_:to:from:)](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [target(forAction:)](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [target(forAction:to:from:)](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.

# tryToPerform:with: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Dispatches an action message to the specified target.

## Declaration

```objectivec
- (BOOL) tryToPerform:(SEL) action with:(id) object;
```

## Parameters

- `action`: The action message you want to dispatch.
- `object`: The target object that defines the specified selector.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if either the receiver or its delegate can accept the specified selector; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method also returns [false](https://developer.apple.com/documentation/swift/false) if `aSelector` is `nil`.

<a id="Discussion"></a>

## Discussion

The receiver tries to perform the method `aSelector` using its inherited [tryToPerform:with:](../nsresponder/trytoperform%28__with_%29.md) method of [NSResponder](../nsresponder.md). If the receiver doesn’t perform `aSelector`, the delegate is given the opportunity to perform it using its inherited [performSelector:withObject:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/perform%28_:with:%29) method of [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class).

## See Also

### Related Documentation

- [respondsToSelector:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/responds%28to:%29): Returns a Boolean value that indicates whether the receiver implements or inherits a method that can respond to a specified message.

### Posting actions

- [sendAction:to:from:](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [targetForAction:](target%28foraction_%29.md): Returns the object that receives the action message specified by the given selector.
- [targetForAction:to:from:](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.
