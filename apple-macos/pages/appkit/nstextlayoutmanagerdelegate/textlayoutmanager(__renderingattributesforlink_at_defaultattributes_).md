> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:renderingattributesforlink:at:defaultattributes:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:renderingattributesforlink:at:defaultattributes:))

# textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a dictionary of rendering attributes for rendering a link.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, renderingAttributesForLink link: Any, at location: any NSTextLocation, defaultAttributes renderingAttributes: [NSAttributedString.Key : Any] = [:]) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `link`: The link object.
- `location`: The document location of the link.
- `renderingAttributes`: The default rendering attributes.

<a id="return-value"></a>

## Return Value

A dictionary of rendering attributes for the link, or `nil` to use defaults.

<a id="discussion"></a>

## Discussion

Just as other rendering attributes, specifying [NSNull](https://developer.apple.com/documentation/foundation/nsnull) removes the attribute from the final attributes used for rendering. It has priority over the general rendering attributes.

The method the framework calls to return a dictionary of attributes for rendering a link attribute name.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.

# textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a dictionary of rendering attributes for rendering a link.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textLayoutManager:(NSTextLayoutManager *) textLayoutManager renderingAttributesForLink:(id) link atLocation:(id<NSTextLocation>) location defaultAttributes:(NSDictionary<NSString *,id> *) renderingAttributes;
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `link`: The link object.
- `location`: The document location of the link.
- `renderingAttributes`: The default rendering attributes.

<a id="return-value"></a>

## Return Value

A dictionary of rendering attributes for the link, or `nil` to use defaults.

<a id="discussion"></a>

## Discussion

Just as other rendering attributes, specifying [NSNull](https://developer.apple.com/documentation/foundation/nsnull) removes the attribute from the final attributes used for rendering. It has priority over the general rendering attributes.

The method the framework calls to return a dictionary of attributes for rendering a link attribute name.

## See Also

### Responding to layout changes

- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.
