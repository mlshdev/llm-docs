> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/target(foraction:)](https://developer.apple.com/documentation/appkit/nsapplication/target(foraction:))

# target(forAction:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that receives the action message specified by the given selector.

## Declaration

```swift
func target(forAction action: Selector) -> Any?
```

## Parameters

- `action`: The desired action message.

<a id="return-value"></a>

## Return Value

The object that would receive the specified action message or `nil` if no target object would receive the message. This method also returns `nil` if `aSelector` is `nil`.

## See Also

### Posting actions

- [tryToPerform(\_:with:)](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction(\_:to:from:)](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [target(forAction:to:from:)](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.

# targetForAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the object that receives the action message specified by the given selector.

## Declaration

```objectivec
- (id) targetForAction:(SEL) action;
```

## Parameters

- `action`: The desired action message.

<a id="return-value"></a>

## Return Value

The object that would receive the specified action message or `nil` if no target object would receive the message. This method also returns `nil` if `aSelector` is `nil`.

## See Also

### Posting actions

- [tryToPerform:with:](trytoperform%28__with_%29.md): Dispatches an action message to the specified target.
- [sendAction:to:from:](sendaction%28__to_from_%29.md): Sends the given action message to the given target.
- [targetForAction:to:from:](target%28foraction_to_from_%29.md): Searches for an object that can receive the message specified by the given selector.
