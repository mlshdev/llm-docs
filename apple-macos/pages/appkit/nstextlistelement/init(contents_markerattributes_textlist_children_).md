> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlistelement/init(contents:markerattributes:textlist:children:)](https://developer.apple.com/documentation/appkit/nstextlistelement/init(contents:markerattributes:textlist:children:))

# init(contents:markerAttributes:textList:children:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a text list element with the list elements, nesting level, and marker attributes you provide.

## Declaration

```swift
convenience init(contents: NSAttributedString, markerAttributes: [NSAttributedString.Key : Any]? = nil, textList: NSTextList, children: [NSTextListElement]?)
```

## Parameters

- `contents`: An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedString.Key](https://developer.apple.com/documentation/foundation/nsattributedstring/key) keys and IDs that describe the marker attributes.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [init(children:textList:nestingLevel:)](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [init(parent:textList:contents:markerAttributes:children:)](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

# textListElementWithContents:markerAttributes:textList:childElements: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a text list element with the list elements, nesting level, and marker attributes you provide.

## Declaration

```objectivec
+ (instancetype) textListElementWithContents:(NSAttributedString *) contents markerAttributes:(NSDictionary<NSString *,id> *) markerAttributes textList:(NSTextList *) textList childElements:(NSArray<NSTextListElement *> *) children;
```

## Parameters

- `contents`: An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedStringKey](https://developer.apple.com/documentation/foundation/nsattributedstring/key) keys and IDs that describe the marker attributes.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [textListElementWithChildElements:textList:nestingLevel:](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [initWithParentElement:textList:contents:markerAttributes:childElements:](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.
