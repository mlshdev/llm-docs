> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkcandidates/setattributes(_:)](https://developer.apple.com/documentation/inputmethodkit/imkcandidates/setattributes(_:))

# setAttributes(\_:) (Swift)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the style attributes for the candidates window.

## Declaration

```swift
func setAttributes(_ attributes: [AnyHashable : Any]!)
```

## Parameters

- `attributes`: A dictionary that contains keys and values for the styles to use. You can supply the keys and values listed in the following table:

  | Key | Value |
  | --- | --- |
  | NSFontAttributeName | An `NSFont` object. Setting the font attribute sets the font that is used to draw Candidates. It does not effect the selection keys which are always drawn in the same font. Note that to set the font size you should use this key/value pair. |
  | IMKCandidatesOpacityAttributeName | An `NSNumber` object that represents a floating-point value between `0.0` (transparent) and `1.0` (completely opaque. The default opacity is `1.0`. |
  | NSForegroundColorAttributeName | An `NSColor` object to use for the candidate text color. The default color is black. |
  | NSBackgroundColorDocumentAttribute | An `NSColor` object to use for the background color  behind the candidate text. |

## See Also

### Managing Window Type and Text Attributes

- [panelType()](paneltype%28%29.md): Returns the style of the candidates window.
- [setPanelType(\_:)](setpaneltype%28__%29.md): Sets the style of the candidates window.
- [attributes()](attributes%28%29.md): Returns a dictionary of the style attributes used for the candidates window..

# setAttributes: (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets the style attributes for the candidates window.

## Declaration

```objectivec
- (void) setAttributes:(NSDictionary *) attributes;
```

## Parameters

- `attributes`: A dictionary that contains keys and values for the styles to use. You can supply the keys and values listed in the following table:

  | Key | Value |
  | --- | --- |
  | NSFontAttributeName | An `NSFont` object. Setting the font attribute sets the font that is used to draw Candidates. It does not effect the selection keys which are always drawn in the same font. Note that to set the font size you should use this key/value pair. |
  | IMKCandidatesOpacityAttributeName | An `NSNumber` object that represents a floating-point value between `0.0` (transparent) and `1.0` (completely opaque. The default opacity is `1.0`. |
  | NSForegroundColorAttributeName | An `NSColor` object to use for the candidate text color. The default color is black. |
  | NSBackgroundColorDocumentAttribute | An `NSColor` object to use for the background color  behind the candidate text. |

## See Also

### Managing Window Type and Text Attributes

- [panelType](paneltype%28%29.md): Returns the style of the candidates window.
- [setPanelType:](setpaneltype%28__%29.md): Sets the style of the candidates window.
- [attributes](attributes%28%29.md): Returns a dictionary of the style attributes used for the candidates window..
