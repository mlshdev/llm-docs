> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlistelement/init(children:textlist:nestinglevel:)](https://developer.apple.com/documentation/uikit/nstextlistelement/init(children:textlist:nestinglevel:))

# init(children:textList:nestingLevel:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the list elements and nesting level you provide.

## Declaration

```swift
convenience init?(children: [NSTextListElement], textList: NSTextList, nestingLevel: Int)
```

## Parameters

- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `nestingLevel`: An integer value that describes the level of nesting of these elements.

## See Also

### Create a text list element

- [init(contents:markerAttributes:textList:children:)](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.
- [init(parent:textList:contents:markerAttributes:children:)](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.

# textListElementWithChildElements:textList:nestingLevel: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a text list element with the list elements and nesting level you provide.

## Declaration

```objectivec
+ (instancetype) textListElementWithChildElements:(NSArray<NSTextListElement *> *) children textList:(NSTextList *) textList nestingLevel:(NSInteger) nestingLevel;
```

## Parameters

- `children`: An array of [NSTextListElement](../nstextlistelement.md) elements.
- `textList`: The [NSTextList](../nstextlist.md) to add elements to.
- `nestingLevel`: An integer value that describes the level of nesting of these elements.

## See Also

### Create a text list element

- [textListElementWithContents:markerAttributes:textList:childElements:](init%28contents_markerattributes_textlist_children_%29.md): Creates a text list element with the list elements, nesting level, and marker attributes you provide.
- [initWithParentElement:textList:contents:markerAttributes:childElements:](init%28parent_textlist_contents_markerattributes_children_%29.md): Creates a text list element with the parent, list elements, nesting level, and marker attributes you provide.
