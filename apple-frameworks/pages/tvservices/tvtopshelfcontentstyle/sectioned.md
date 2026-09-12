> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcontentstyle/sectioned](https://developer.apple.com/documentation/tvservices/tvtopshelfcontentstyle/sectioned)

# TVTopShelfContentStyle.sectioned (Swift)

**Framework:** TV Services  
**Kind:** Case  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

When using the sectioned style, your extension should return an array that contains content items that represent sections. Each section object should have an array of content items that represent the available media in that section.

> TVTopShelfProvider has been replaced by TVTopShelfContent

## Declaration

```swift
case sectioned
```

## See Also

### Constants

- [TVTopShelfContentStyle.inset](inset.md): Deprecated. When the using the inset style, your extension should return a flat array of TV content items. The images of the content items will take up most of the area of the Top Shelf, which will slowly rotate through the items.

# TVTopShelfContentStyleSectioned (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration Case  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

When using the sectioned style, your extension should return an array that contains content items that represent sections. Each section object should have an array of content items that represent the available media in that section.

> TVTopShelfProvider has been replaced by TVTopShelfContent

## Declaration

```objectivec
TVTopShelfContentStyleSectioned
```

## See Also

### Constants

- [TVTopShelfContentStyleInset](inset.md): Deprecated. When the using the inset style, your extension should return a flat array of TV content items. The images of the content items will take up most of the area of the Top Shelf, which will slowly rotate through the items.
