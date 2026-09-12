> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/validateaction(_:)](https://developer.apple.com/documentation/appkit/nstextfinder/validateaction(_:))

# validateAction(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows validation of the find action before performing.

## Declaration

```swift
func validateAction(_ op: NSTextFinder.Action) -> Bool
```

## Parameters

- `op`: The sender’s tag.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is valid; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Responders the `NSResponder` method  [performTextFinderAction(\_:)](../nsresponder/performtextfinderaction%28__%29.md) should call this method.

This method should be called by an implementation of [validateUserInterfaceItem(\_:)](../nsuserinterfacevalidations/validateuserinterfaceitem%28__%29.md) to properly validate items with an action of [performTextFinderAction(\_:)](../nsresponder/performtextfinderaction%28__%29.md). The responder’s [validateUserInterfaceItem(\_:)](../nsuserinterfacevalidations/validateuserinterfaceitem%28__%29.md) or [validateMenuItem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatemenuitem:) implementation should pass the tag as the action for this method..

## See Also

### Validating and Performing Text Finding

- [performAction(\_:)](performaction%28__%29.md): Performs the specified text finding action.
- [cancelFindIndicator()](cancelfindindicator%28%29.md): Cancels the find indicator immediately.

# validateAction: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Allows validation of the find action before performing.

## Declaration

```objectivec
- (BOOL) validateAction:(NSTextFinderAction) op;
```

## Parameters

- `op`: The sender’s tag.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is valid; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Responders the `NSResponder` method  [performTextFinderAction:](../nsresponder/performtextfinderaction%28__%29.md) should call this method.

This method should be called by an implementation of [validateUserInterfaceItem:](../nsuserinterfacevalidations/validateuserinterfaceitem%28__%29.md) to properly validate items with an action of [performTextFinderAction:](../nsresponder/performtextfinderaction%28__%29.md). The responder’s [validateUserInterfaceItem:](../nsuserinterfacevalidations/validateuserinterfaceitem%28__%29.md) or [validateMenuItem:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/validatemenuitem:) implementation should pass the tag as the action for this method..

## See Also

### Validating and Performing Text Finding

- [performAction:](performaction%28__%29.md): Performs the specified text finding action.
- [cancelFindIndicator](cancelfindindicator%28%29.md): Cancels the find indicator immediately.
