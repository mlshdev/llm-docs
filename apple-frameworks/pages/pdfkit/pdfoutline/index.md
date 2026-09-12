> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfoutline/index](https://developer.apple.com/documentation/pdfkit/pdfoutline/index)

# index (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the index of the outline.

## Declaration

```swift
var index: Int { get }
```

<a id="Discussion"></a>

## Discussion

The index of the outline object is relative to its siblings and from the perspective of the parent of the outline object. The root outline object, and any outline object without a parent, has an index value of `0`.

## See Also

### Getting Information About an Outline

- [document](document.md): Returns the document with which the outline is associated.
- [numberOfChildren](numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [child(at:)](child%28at_%29.md): Returns the child outline object at the specified index.

# index (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the index of the outline.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger index;
```

<a id="Discussion"></a>

## Discussion

The index of the outline object is relative to its siblings and from the perspective of the parent of the outline object. The root outline object, and any outline object without a parent, has an index value of `0`.

## See Also

### Getting Information About an Outline

- [document](document.md): Returns the document with which the outline is associated.
- [numberOfChildren](numberofchildren.md): Returns the number of child outline objects in the outline.
- [parent](parent.md): Returns the parent outline object of the outline (returns `NULL` if called on the root outline object).
- [childAtIndex:](child%28at_%29.md): Returns the child outline object at the specified index.
