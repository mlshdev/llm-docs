> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/changelayoutorientation(_:)](https://developer.apple.com/documentation/appkit/nstextview/changelayoutorientation(_:))

# changeLayoutOrientation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

An action method that sets the layout orientation of the text.

## Declaration

```swift
func changeLayoutOrientation(_ sender: Any?)
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

Calls [setLayoutOrientation(\_:)](setlayoutorientation%28__%29.md) with the sender’s tag as the orientation.

## See Also

### Changing layout orientation

- [setLayoutOrientation(\_:)](setlayoutorientation%28__%29.md): Changes the receiver’s layout orientation and invalidates the contents.

# changeLayoutOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

An action method that sets the layout orientation of the text.

## Declaration

```objectivec
- (void) changeLayoutOrientation:(id) sender;
```

## Parameters

- `sender`: The sender.

<a id="Discussion"></a>

## Discussion

Calls [setLayoutOrientation:](setlayoutorientation%28__%29.md) with the sender’s tag as the orientation.

## See Also

### Changing layout orientation

- [setLayoutOrientation:](setlayoutorientation%28__%29.md): Changes the receiver’s layout orientation and invalidates the contents.
