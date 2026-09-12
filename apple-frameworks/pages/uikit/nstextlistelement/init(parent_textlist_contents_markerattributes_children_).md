> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlistelement/init(parent:textlist:contents:markerattributes:children:)](https://developer.apple.com/documentation/uikit/nstextlistelement/init(parent:textlist:contents:markerattributes:children:))

# init(parent:textList:contents:markerAttributes:children:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

## Declaration

```swift
init(parent: NSTextListElement?, textList: NSTextList, contents: NSAttributedString?, markerAttributes: [NSAttributedString.Key : Any]? = nil, children: [NSTextListElement]?)
```

## Parameters

- `parent`: The parent `NSTextListElement` of this element, if any.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `contents`: An [NSAttributedString](../../foundation/nsattributedstring.md) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) keys and IDs that describe the marker attributes.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [init(children:textList:nestingLevel:)](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [init(contents:markerAttributes:textList:children:)](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.

# initWithParentElement:textList:contents:markerAttributes:childElements: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

## Declaration

```objectivec
- (instancetype) initWithParentElement:(NSTextListElement *) parent textList:(NSTextList *) textList contents:(NSAttributedString *) contents markerAttributes:(NSDictionary<NSString *,id> *) markerAttributes childElements:(NSArray<NSTextListElement *> *) children;
```

## Parameters

- `parent`: The parent `NSTextListElement` of this element, if any.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `contents`: An [NSAttributedString](../../foundation/nsattributedstring.md) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) keys and IDs that describe the marker attributes.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [textListElementWithChildElements:textList:nestingLevel:](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [textListElementWithContents:markerAttributes:textList:childElements:](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.
