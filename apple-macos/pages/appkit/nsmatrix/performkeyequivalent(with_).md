> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/performkeyequivalent(with:)](https://developer.apple.com/documentation/appkit/nsmatrix/performkeyequivalent(with:))

# performKeyEquivalent(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

## Declaration

```swift
func performKeyEquivalent(with event: NSEvent) -> Bool
```

## Parameters

- `event`: The event containing the character for which to find a key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a cell in the receiver responds to the key equivalent in `theEvent`, [false](https://developer.apple.com/documentation/swift/false) if no cell responds.

<a id="Discussion"></a>

## Discussion

If there’s a cell in the receiver that has a key equivalent equal to the character in \[\`theEvent\`\`\`NSEvent/charactersIgnoringModifiers\`\`\] (taking into account any key modifier flags) and that cell is enabled, that cell is made to react as if the user had clicked it: by highlighting, changing its state as appropriate, sending its action if it has one, and then unhighlighting.

Your code should never send this message—it is sent when the receiver or one of its superviews is the first responder and the user presses a key. You may want to override this method to change the way key equivalents are performed or displayed or to disable them in your subclass.

## See Also

### Handling Event and Action Messages

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown(with:)](mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.

# performKeyEquivalent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

## Declaration

```objectivec
- (BOOL) performKeyEquivalent:(NSEvent *) event;
```

## Parameters

- `event`: The event containing the character for which to find a key equivalent.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if a cell in the receiver responds to the key equivalent in `theEvent`, [false](https://developer.apple.com/documentation/swift/false) if no cell responds.

<a id="Discussion"></a>

## Discussion

If there’s a cell in the receiver that has a key equivalent equal to the character in \[\`theEvent\`\`\`NSEvent/charactersIgnoringModifiers\`\`\] (taking into account any key modifier flags) and that cell is enabled, that cell is made to react as if the user had clicked it: by highlighting, changing its state as appropriate, sending its action if it has one, and then unhighlighting.

Your code should never send this message—it is sent when the receiver or one of its superviews is the first responder and the user presses a key. You may want to override this method to change the way key equivalents are performed or displayed or to disable them in your subclass.

## See Also

### Handling Event and Action Messages

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown:](mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
