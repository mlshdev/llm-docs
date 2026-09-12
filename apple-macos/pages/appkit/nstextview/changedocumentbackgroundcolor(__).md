> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/changedocumentbackgroundcolor(_:)](https://developer.apple.com/documentation/appkit/nstextview/changedocumentbackgroundcolor(_:))

# changeDocumentBackgroundColor(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method used to set the background color.

## Declaration

```swift
func changeDocumentBackgroundColor(_ sender: Any?)
```

## Parameters

- `sender`: The control that wants to set the background color.

<a id="Discussion"></a>

## Discussion

This method gets the new color by sending a [color](../nscolorpanel/color.md) message to  `sender`.

This will only set the background color if [allowsDocumentBackgroundColorChange](allowsdocumentbackgroundcolorchange.md)returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting graphics attributes

- [backgroundColor](backgroundcolor.md): The receiver’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the receiver draws its background.
- [allowsDocumentBackgroundColorChange](allowsdocumentbackgroundcolorchange.md): A Boolean value that indicates whether the receiver allows its background color to change.

# changeDocumentBackgroundColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method used to set the background color.

## Declaration

```objectivec
- (void) changeDocumentBackgroundColor:(id) sender;
```

## Parameters

- `sender`: The control that wants to set the background color.

<a id="Discussion"></a>

## Discussion

This method gets the new color by sending a [color](../nscolorpanel/color.md) message to  `sender`.

This will only set the background color if [allowsDocumentBackgroundColorChange](allowsdocumentbackgroundcolorchange.md)returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Setting graphics attributes

- [backgroundColor](backgroundcolor.md): The receiver’s background color.
- [drawsBackground](drawsbackground.md): A Boolean value that indicates whether the receiver draws its background.
- [allowsDocumentBackgroundColorChange](allowsdocumentbackgroundcolorchange.md): A Boolean value that indicates whether the receiver allows its background color to change.
