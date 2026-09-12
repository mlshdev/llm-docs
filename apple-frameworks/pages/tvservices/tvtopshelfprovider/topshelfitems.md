> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfprovider/topshelfitems](https://developer.apple.com/documentation/tvservices/tvtopshelfprovider/topshelfitems)

# topShelfItems (Swift)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an array of content items to be displayed.

> TVTopShelfProvider has been replaced by TVTopShelfContentProvider

## Declaration

```swift
var topShelfItems: [TVContentItem] { get }
```

<a id="Discussion"></a>

## Discussion

If the value is an empty array, the system falls back to the static image provided with the app.

## See Also

### Implementing TV Services Extension Properties

- [topShelfStyle](topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.
- [TVTopShelfContentStyle](../tvtopshelfcontentstyle.md): Deprecated. An enumerated type used to specify the style in which you want your content to be displayed.

# topShelfItems (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 13.0)

Returns an array of content items to be displayed.

> TVTopShelfProvider has been replaced by TVTopShelfContentProvider

## Declaration

```objectivec
@property (readonly) NSArray<TVContentItem *> * topShelfItems;
```

<a id="Discussion"></a>

## Discussion

If the value is an empty array, the system falls back to the static image provided with the app.

## See Also

### Implementing TV Services Extension Properties

- [topShelfStyle](topshelfstyle.md): Deprecated. The user interface style that should be used to display the content items.
- [TVTopShelfContentStyle](../tvtopshelfcontentstyle.md): Deprecated. An enumerated type used to specify the style in which you want your content to be displayed.
