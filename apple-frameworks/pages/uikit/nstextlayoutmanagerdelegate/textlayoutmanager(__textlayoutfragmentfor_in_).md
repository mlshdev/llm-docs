> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:textlayoutfragmentfor:in:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:textlayoutfragmentfor:in:))

# textLayoutManager(\_:textLayoutFragmentFor:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, textLayoutFragmentFor location: any NSTextLocation, in textElement: NSTextElement) -> NSTextLayoutFragment
```

## Parameters

- `textLayoutManager`: The text layout manager.
- `location`: The [NSTextLocation](../nstextlocation.md) of the link in the text element.
- `textElement`: The [NSTextElement](../nstextelement.md) that the method could return a custom [NSTextLayoutFragment](../nstextlayoutfragment.md) from.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

<a id="Discussion"></a>

## Discussion

Use this to provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:)](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.

# textLayoutManager:textLayoutFragmentForLocation:inTextElement: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

## Declaration

```objectivec
- (NSTextLayoutFragment *) textLayoutManager:(NSTextLayoutManager *) textLayoutManager textLayoutFragmentForLocation:(id<NSTextLocation>) location inTextElement:(NSTextElement *) textElement;
```

## Parameters

- `textLayoutManager`: The text layout manager.
- `location`: The [NSTextLocation](../nstextlocation.md) of the link in the text element.
- `textElement`: The [NSTextElement](../nstextelement.md) that the method could return a custom [NSTextLayoutFragment](../nstextlayoutfragment.md) from.

<a id="return-value"></a>

## Return Value

An [NSTextLayoutFragment](../nstextlayoutfragment.md).

<a id="Discussion"></a>

## Discussion

Use this to provide an [NSTextLayoutFragment](../nstextlayoutfragment.md) specialized for an [NSTextElement](../nstextelement.md) subclass targeted for the rendering surface.

## See Also

### Responding to layout changes

- [textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes:](textlayoutmanager%28__renderingattributesforlink_at_defaultattributes_%29.md): The method the framework calls to return a dictionary of attributes for rendering a link attribute name.
- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.
