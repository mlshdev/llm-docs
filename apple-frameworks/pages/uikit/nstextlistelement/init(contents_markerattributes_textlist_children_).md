> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlistelement/init(contents:markerattributes:textlist:children:)](https://developer.apple.com/documentation/uikit/nstextlistelement/init(contents:markerattributes:textlist:children:))

# init(contents:markerAttributes:textList:children:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the list elements, nesting level, and marker attributes you provide.

## Declaration

```swift
convenience init(contents: NSAttributedString, markerAttributes: [NSAttributedString.Key : Any]? = nil, textList: NSTextList, children: [NSTextListElement]?)
```

## Parameters

- `contents`: An [NSAttributedString](../../foundation/nsattributedstring.md) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) keys and IDs that describe the marker attributes.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [init(children:textList:nestingLevel:)](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [init(parent:textList:contents:markerAttributes:children:)](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

# textListElementWithContents:markerAttributes:textList:childElements: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the list elements, nesting level, and marker attributes you provide.

## Declaration

```objectivec
+ (instancetype) textListElementWithContents:(NSAttributedString *) contents markerAttributes:(NSDictionary<NSString *,id> *) markerAttributes textList:(NSTextList *) textList childElements:(NSArray<NSTextListElement *> *) children;
```

## Parameters

- `contents`: An [NSAttributedString](../../foundation/nsattributedstring.md) that contains the contents of the text list element.
- `markerAttributes`: A dictionary of [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) keys and IDs that describe the marker attributes.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.

## See Also

### Create a text list element

- [textListElementWithChildElements:textList:nestingLevel:](init%28children_textlist_nestinglevel_%29.md): Creates a text list element with the list elements and nesting level you provide.
- [initWithParentElement:textList:contents:markerAttributes:childElements:](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.
