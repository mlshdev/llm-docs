> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/acceptsfirstmouse(for:)](https://developer.apple.com/documentation/appkit/nsmatrix/acceptsfirstmouse(for:))

# acceptsFirstMouse(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the receiver accepts the first mouse.

## Declaration

```swift
func acceptsFirstMouse(for event: NSEvent?) -> Bool
```

## Parameters

- `event`: This parameter is ignored.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the selection mode of the receiver is `NSListModeMatrix`, [true](https://developer.apple.com/documentation/swift/true) if the receiver is in any other selection mode. The receiver does not accept first mouse in `NSListModeMatrix` to prevent the loss of multiple selections.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.

### Handling Event and Action Messages

- [mouseDown(with:)](mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

# acceptsFirstMouse: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value indicating whether the receiver accepts the first mouse.

## Declaration

```objectivec
- (BOOL) acceptsFirstMouse:(NSEvent *) event;
```

## Parameters

- `event`: This parameter is ignored.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) if the selection mode of the receiver is `NSListModeMatrix`, [true](https://developer.apple.com/documentation/swift/true) if the receiver is in any other selection mode. The receiver does not accept first mouse in `NSListModeMatrix` to prevent the loss of multiple selections.

## See Also

### Related Documentation

- [mode](mode-swift.property.md): The selection mode of the receiver.

### Handling Event and Action Messages

- [mouseDown:](mousedown%28with_%29.md): Responds to a mouse-down event.
- [mouseDownFlags](mousedownflags.md): The flags in effect at the mouse-down event that started the current tracking session.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.
