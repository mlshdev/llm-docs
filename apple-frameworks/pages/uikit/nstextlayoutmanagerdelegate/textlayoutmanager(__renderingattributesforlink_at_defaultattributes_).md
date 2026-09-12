> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:renderingattributesforlink:at:defaultattributes:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanagerdelegate/textlayoutmanager(_:renderingattributesforlink:at:defaultattributes:))

# textLayoutManager(\_:renderingAttributesForLink:at:defaultAttributes:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to return a dictionary of attributes for rendering a link attribute name.

## Declaration

```swift
optional func textLayoutManager(_ textLayoutManager: NSTextLayoutManager, renderingAttributesForLink link: Any, at location: any NSTextLocation, defaultAttributes renderingAttributes: [NSAttributedString.Key : Any] = [:]) -> [NSAttributedString.Key : Any]?
```

## Parameters

- `textLayoutManager`: The `NSTextLayoutManager`.
- `link`: The link.
- `location`: The [NSTextLocation](../nstextlocation.md) of the link.
- `renderingAttributes`: A dictionary of attributes whose keys are [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) values.

<a id="return-value"></a>

## Return Value

A dictionary of  attributes.

## See Also

### Responding to layout changes

- [textLayoutManager(\_:shouldBreakLineBefore:hyphenating:)](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.
- [textLayoutManager(\_:textLayoutFragmentFor:in:)](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.

# textLayoutManager:renderingAttributesForLink:atLocation:defaultAttributes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls to return a dictionary of attributes for rendering a link attribute name.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) textLayoutManager:(NSTextLayoutManager *) textLayoutManager renderingAttributesForLink:(id) link atLocation:(id<NSTextLocation>) location defaultAttributes:(NSDictionary<NSString *,id> *) renderingAttributes;
```

## Parameters

- `textLayoutManager`: The `NSTextLayoutManager`.
- `link`: The link.
- `location`: The [NSTextLocation](../nstextlocation.md) of the link.
- `renderingAttributes`: A dictionary of attributes whose keys are [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) values.

<a id="return-value"></a>

## Return Value

A dictionary of  attributes.

## See Also

### Responding to layout changes

- [textLayoutManager:shouldBreakLineBeforeLocation:hyphenating:](textlayoutmanager%28__shouldbreaklinebefore_hyphenating_%29.md): The method the framework calls to determine the soft line break point.
- [textLayoutManager:textLayoutFragmentForLocation:inTextElement:](textlayoutmanager%28__textlayoutfragmentfor_in_%29.md): The method the framework calls to give the delegate an opportunity to return a custom text layout fragment.
