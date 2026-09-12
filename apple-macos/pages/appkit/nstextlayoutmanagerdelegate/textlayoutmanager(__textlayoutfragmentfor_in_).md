> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:textlayoutfragmentfor:in:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:textlayoutfragmentfor:in:))

# textLayoutManager(\_:textLayoutFragmentFor:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a text layout fragment for the specified location in the text element.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, textLayoutFragmentFor location: any NSTextLocation, in textElement: NSTextElement) -> NSTextLayoutFragment
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `location`: The document location.
- `textElement`: The text element containing the location.

<a id="return-value"></a>

## Return Value

A layout fragment for the location, or `nil` to use the default.

<a id="discussion"></a>

## Discussion

The delegate can provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

<a id="Discussion"></a>

## Discussion

Use this to provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.

# textLayoutManager:textLayoutFragmentForLocation:inTextElement: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a text layout fragment for the specified location in the text element.

## Declaration

```objectivec
- (NSTextLayoutFragment *) textLayoutManager:(NSTextLayoutManager *) textLayoutManager textLayoutFragmentForLocation:(id<NSTextLocation>) location inTextElement:(NSTextElement *) textElement;
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `location`: The document location.
- `textElement`: The text element containing the location.

<a id="return-value"></a>

## Return Value

A layout fragment for the location, or `nil` to use the default.

<a id="discussion"></a>

## Discussion

The delegate can provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

<a id="Discussion"></a>

## Discussion

Use this to provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

## See Also

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): Invoked while determining the soft line break point.
