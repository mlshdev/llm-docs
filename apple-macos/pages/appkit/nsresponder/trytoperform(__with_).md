> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsresponder/trytoperform(_:with:)](https://developer.apple.com/documentation/appkit/nsresponder/trytoperform(_:with:))

# tryToPerform(\_:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to perform the method indicated by an action with a specified argument.

## Declaration

```swift
func tryToPerform(_ action: Selector, with object: Any?) -> Bool
```

## Parameters

- `action`: The selector identifying the action method.
- `object`: The object to use as the sole argument of the action method.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if no responder is found that responds to `action;` otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If the receiver responds to `action`, it invokes the method with `object` as the argument and returns [true](https://developer.apple.com/documentation/swift/true). If the receiver doesn’t respond, it sends this message to its next responder with the same selector and object.

## See Also

### Related Documentation

- [sendAction(\_:to:from:)](../nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.

# tryToPerform:with: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to perform the method indicated by an action with a specified argument.

## Declaration

```objectivec
- (BOOL) tryToPerform:(SEL) action with:(id) object;
```

## Parameters

- `action`: The selector identifying the action method.
- `object`: The object to use as the sole argument of the action method.

<a id="return-value"></a>

## Return Value

Returns [false](https://developer.apple.com/documentation/swift/false) if no responder is found that responds to `action;` otherwise, [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

If the receiver responds to `action`, it invokes the method with `object` as the argument and returns [true](https://developer.apple.com/documentation/swift/true). If the receiver doesn’t respond, it sends this message to its next responder with the same selector and object.

## See Also

### Related Documentation

- [sendAction:to:from:](../nsapplication/sendaction%28__to_from_%29.md): Sends the given action message to the given target.
