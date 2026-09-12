> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mousedownflags](https://developer.apple.com/documentation/appkit/nsmatrix/mousedownflags)

# mouseDownFlags (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The flags in effect at the mouse-down event that started the current tracking session.

## Declaration

```swift
var mouseDownFlags: Int { get }
```

<a id="Discussion"></a>

## Discussion

The [NSMatrix](../nsmatrix.md) [mouseDown(with:)](mousedown%28with_%29.md) method obtains these flags by sending a [modifierFlags](../nsevent/modifierflags-swift.property.md) message to the event passed into [mouseDown(with:)](mousedown%28with_%29.md). Use this property if you want to access these flags. This property is valid only during tracking; it isn’t useful if the target of the receiver initiates another tracking loop as part of its action method (as a cell that pops up a pop-up list does, for example).

## See Also

### Related Documentation

- [sendAction(on:)](../nscontrol/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Handling Event and Action Messages

- [acceptsFirstMouse(for:)](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown(with:)](mousedown%28with_%29.md): Responds to a mouse-down event.
- [performKeyEquivalent(with:)](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.

# mouseDownFlags (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The flags in effect at the mouse-down event that started the current tracking session.

## Declaration

```objectivec
@property (readonly) NSInteger mouseDownFlags;
```

<a id="Discussion"></a>

## Discussion

The [NSMatrix](../nsmatrix.md) [mouseDown:](mousedown%28with_%29.md) method obtains these flags by sending a [modifierFlags](../nsevent/modifierflags-swift.property.md) message to the event passed into [mouseDown:](mousedown%28with_%29.md). Use this property if you want to access these flags. This property is valid only during tracking; it isn’t useful if the target of the receiver initiates another tracking loop as part of its action method (as a cell that pops up a pop-up list does, for example).

## See Also

### Related Documentation

- [sendActionOn:](../nscontrol/sendaction%28on_%29.md): Sets the conditions on which the receiver sends action messages to its target.

### Handling Event and Action Messages

- [acceptsFirstMouse:](acceptsfirstmouse%28for_%29.md): Returns a Boolean value indicating whether the receiver accepts the first mouse.
- [mouseDown:](mousedown%28with_%29.md): Responds to a mouse-down event.
- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Looks for a cell that has the given key equivalent and, if found, makes that cell respond as if clicked.
