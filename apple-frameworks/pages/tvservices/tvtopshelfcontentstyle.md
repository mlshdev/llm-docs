> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcontentstyle](https://developer.apple.com/documentation/tvservices/tvtopshelfcontentstyle)

# TVTopShelfContentStyle (Swift)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An enumerated type used to specify the style in which you want your content to be displayed.

> TVTopShelfProvider has been replaced by TVTopShelfContent

## Declaration

```swift
enum TVTopShelfContentStyle
```

## Topics

### Constants

- [TVTopShelfContentStyle.inset](tvtopshelfcontentstyle/inset.md): Deprecated. When the using the inset style, your extension should return a flat array of TV content items. The images of the content items will take up most of the area of the Top Shelf, which will slowly rotate through the items.
- [TVTopShelfContentStyle.sectioned](tvtopshelfcontentstyle/sectioned.md): Deprecated. When using the sectioned style, your extension should return an array that contains content items that represent sections. Each section object should have an array of content items that represent the available media in that section.

### Initializers

- [init(rawValue:)](tvtopshelfcontentstyle/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing TV Services Extension Properties

- [topShelfItems](tvtopshelfprovider/topshelfitems.md): Deprecated. Returns an array of content items to be displayed.
- [topShelfStyle](tvtopshelfprovider/topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.

# TVTopShelfContentStyle (Objective-C)

**Framework:** TV Services  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

An enumerated type used to specify the style in which you want your content to be displayed.

> TVTopShelfProvider has been replaced by TVTopShelfContent

## Declaration

```objectivec
enum TVTopShelfContentStyle : NSInteger;
```

## Topics

### Constants

- [TVTopShelfContentStyleInset](tvtopshelfcontentstyle/inset.md): Deprecated. When the using the inset style, your extension should return a flat array of TV content items. The images of the content items will take up most of the area of the Top Shelf, which will slowly rotate through the items.
- [TVTopShelfContentStyleSectioned](tvtopshelfcontentstyle/sectioned.md): Deprecated. When using the sectioned style, your extension should return an array that contains content items that represent sections. Each section object should have an array of content items that represent the available media in that section.

## See Also

### Implementing TV Services Extension Properties

- [topShelfItems](tvtopshelfprovider/topshelfitems.md): Deprecated. Returns an array of content items to be displayed.
- [topShelfStyle](tvtopshelfprovider/topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.
