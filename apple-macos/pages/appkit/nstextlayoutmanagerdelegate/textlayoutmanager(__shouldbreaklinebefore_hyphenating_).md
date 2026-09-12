> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:shouldbreaklinebefore:hyphenating:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanagerdelegate/textlayoutmanager(_:shouldbreaklinebefore:hyphenating:))

# textLayoutManager(\_:shouldBreakLineBefore:hyphenating:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Invoked while determining the soft line break point.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, shouldBreakLineBefore location: any NSTextLocation, hyphenating: Bool) -> Bool
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `location`: The candidate break location.
- `hyphenating`: `true` if this is an auto-hyphenation point.

<a id="return-value"></a>

## Return Value

`true` to allow the break; `false` to prevent it.

<a id="discussion"></a>

## Discussion

When `hyphenating` is `false`, [NSTextLayoutManager](../nstextlayoutmanager.md) tries to find the next line break opportunity before location. When `hyphenating` is `true`, it is an auto-hyphenation point.

The method the framework calls to determine the soft line break point.

<a id="Discussion"></a>

## Discussion

When `hyphenating` is `false`, `NSTextLayoutManager` tries to find the next line break opportunity before location. When hyphenating is `true`, it’s an auto-hyphenation point.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.

# textLayoutManager:shouldBreakLineBeforeLocation:hyphenating: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Invoked while determining the soft line break point.

## Declaration

```objectivec
- (BOOL) textLayoutManager:(NSTextLayoutManager *) textLayoutManager shouldBreakLineBeforeLocation:(id<NSTextLocation>) location hyphenating:(BOOL) hyphenating;
```

## Parameters

- `textLayoutManager`: The text layout manager sending the message.
- `location`: The candidate break location.
- `hyphenating`: `true` if this is an auto-hyphenation point.

<a id="return-value"></a>

## Return Value

`true` to allow the break; `false` to prevent it.

<a id="discussion"></a>

## Discussion

When `hyphenating` is `false`, [NSTextLayoutManager](../nstextlayoutmanager.md) tries to find the next line break opportunity before location. When `hyphenating` is `true`, it is an auto-hyphenation point.

The method the framework calls to determine the soft line break point.

<a id="Discussion"></a>

## Discussion

When `hyphenating` is `false`, `NSTextLayoutManager` tries to find the next line break opportunity before location. When hyphenating is `true`, it’s an auto-hyphenation point.

## See Also

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): Returns a text layout fragment for the specified location in the text element.
