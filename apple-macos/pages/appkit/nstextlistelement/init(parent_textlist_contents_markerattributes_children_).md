> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlistelement/init(parent:textlist:contents:markerattributes:children:)](https://developer.apple.com/documentation/appkit/nstextlistelement/init(parent:textlist:contents:markerattributes:children:))

# init(parent:textList:contents:markerAttributes:children:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

## Declaration

```swift
init(parent: NSTextListElement?, textList: NSTextList, contents: NSAttributedString?, markerAttributes: [NSAttributedString.Key : Any]? = nil, children: [NSTextListElement]?)
```

## Parameters

- `parent`: The parent `NSTextListElement` of this element, if any.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `contents`: An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedString.Key](https://developer.apple.com/documentation/foundation/nsattributedstring/key) keys and IDs that describe the marker attributes.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [init(children:textList:nestingLevel:)](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [init(contents:markerAttributes:textList:children:)](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.

# initWithParentElement:textList:contents:markerAttributes:childElements: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

## Declaration

```objectivec
- (instancetype) initWithParentElement:(NSTextListElement *) parent textList:(NSTextList *) textList contents:(NSAttributedString *) contents markerAttributes:(NSDictionary<NSString *,id> *) markerAttributes childElements:(NSArray<NSTextListElement *> *) children;
```

## Parameters

- `parent`: The parent `NSTextListElement` of this element, if any.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `contents`: An [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedStringKey](https://developer.apple.com/documentation/foundation/nsattributedstring/key) keys and IDs that describe the marker attributes.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [textListElementWithChildElements:textList:nestingLevel:](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [textListElementWithContents:markerAttributes:textList:childElements:](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.
