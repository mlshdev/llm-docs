> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/showdefinition(for:range:options:baselineoriginprovider:)](https://developer.apple.com/documentation/appkit/nsview/showdefinition(for:range:options:baselineoriginprovider:))

# showDefinition(for:range:options:baselineOriginProvider:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Shows a window displaying the definition of the specified range of the attributed string.

## Declaration

```swift
func showDefinition(for attrString: NSAttributedString?, range targetRange: NSRange, options: [NSView.DefinitionOptionKey : Any]? = nil, baselineOriginProvider originProvider: ((NSRange) -> NSPoint)? = nil)
```

## Parameters

- `attrString`: The attributed string for which to show the definition. If the view is an instance of NSTextView, the `attrString` value can be `nil`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.
- `targetRange`: The range of the attributed string to define. You can pass a zero-length range and the appropriate range will be auto-detected around the range’s offset.  That’s the recommended approach when there is no selection.
- `options`: An optional dictionary that specifies how the definition is displayed. See `NSDefinition Presentation Constants` for the key and it’s possible values.
- `originProvider`: The originProvider block object should return the baseline origin for the first character at the adjusted range.

  If the view is an instance of NSTextView, the originProvider can be `NULL`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.

  The block object takes a single argument:

  - **adjustedRange**: The adjusted range.

  The block object returns an `NSPoint` to be used as the baseline origin of the first character, in the view’s view coordinate system.

<a id="Discussion"></a>

## Discussion

This method does not cause scrolling, so clients should perform any necessary scrolling before calling this method.

## See Also

### Displaying Definition Windows

- [showDefinition(for:at:)](showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [NSView.DefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.
- [NSView.DefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.

# showDefinitionForAttributedString:range:options:baselineOriginProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Shows a window displaying the definition of the specified range of the attributed string.

## Declaration

```objectivec
- (void) showDefinitionForAttributedString:(NSAttributedString *) attrString range:(NSRange) targetRange options:(NSDictionary<NSString *,id> *) options baselineOriginProvider:(NSPoint (^)(NSRange adjustedRange)) originProvider;
```

## Parameters

- `attrString`: The attributed string for which to show the definition. If the view is an instance of NSTextView, the `attrString` value can be `nil`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.
- `targetRange`: The range of the attributed string to define. You can pass a zero-length range and the appropriate range will be auto-detected around the range’s offset.  That’s the recommended approach when there is no selection.
- `options`: An optional dictionary that specifies how the definition is displayed. See `NSDefinition Presentation Constants` for the key and it’s possible values.
- `originProvider`: The originProvider block object should return the baseline origin for the first character at the adjusted range.

  If the view is an instance of NSTextView, the originProvider can be `NULL`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.

  The block object takes a single argument:

  - **adjustedRange**: The adjusted range.

  The block object returns an `NSPoint` to be used as the baseline origin of the first character, in the view’s view coordinate system.

<a id="Discussion"></a>

## Discussion

This method does not cause scrolling, so clients should perform any necessary scrolling before calling this method.

## See Also

### Displaying Definition Windows

- [showDefinitionForAttributedString:atPoint:](showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [NSDefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.
- [NSDefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.
