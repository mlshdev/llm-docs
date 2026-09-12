> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/showdefinition(for:at:)](https://developer.apple.com/documentation/appkit/nsview/showdefinition(for:at:))

# showDefinition(for:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Shows a window displaying the definition of the attributed string at the specified point.

## Declaration

```swift
func showDefinition(for attrString: NSAttributedString?, at textBaselineOrigin: NSPoint)
```

## Parameters

- `attrString`: The attributed string for which to show the definition. If the view is an instance of NSTextView, the `attrString` can be `nil`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.
- `textBaselineOrigin`: Specifies the baseline origin of `attrString` in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

Shows a window that displays the definition (or other subject depending on available dictionaries) of the specified attributed string.

This method can be used for implementing the same functionality as the `NSTextView` “Look Up in Dictionary” contextual menu on a custom view.

## See Also

### Displaying Definition Windows

- [showDefinition(for:range:options:baselineOriginProvider:)](showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSView.DefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.
- [NSView.DefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.

# showDefinitionForAttributedString:atPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Shows a window displaying the definition of the attributed string at the specified point.

## Declaration

```objectivec
- (void) showDefinitionForAttributedString:(NSAttributedString *) attrString atPoint:(NSPoint) textBaselineOrigin;
```

## Parameters

- `attrString`: The attributed string for which to show the definition. If the view is an instance of NSTextView, the `attrString` can be `nil`, in which case the text view will automatically supply values suitable for displaying definitions for the specified range within its text content.
- `textBaselineOrigin`: Specifies the baseline origin of `attrString` in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

Shows a window that displays the definition (or other subject depending on available dictionaries) of the specified attributed string.

This method can be used for implementing the same functionality as the `NSTextView` “Look Up in Dictionary” contextual menu on a custom view.

## See Also

### Displaying Definition Windows

- [showDefinitionForAttributedString:range:options:baselineOriginProvider:](showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSDefinitionOptionKey](definitionoptionkey.md): Keys to include in your definition.
- [NSDefinitionPresentationType](definitionpresentationtype.md): Presentation options for the window.
