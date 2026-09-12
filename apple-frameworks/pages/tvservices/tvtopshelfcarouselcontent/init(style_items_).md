> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvservices/tvtopshelfcarouselcontent/init(style:items:)](https://developer.apple.com/documentation/tvservices/tvtopshelfcarouselcontent/init(style:items:))

# init(style:items:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates a content object for displaying items in a carousel style in the top shelf interface.

## Declaration

```swift
init(style: TVTopShelfCarouselContent.Style, items: [TVTopShelfCarouselItem])
```

## Parameters

- `style`: The appearance to use for individual items. For a list of possible values, see [TVTopShelfCarouselContent.Style](style-swift.enum.md).
- `items`: The items to display in the Top Shelf interface. All of the items in the array must have unique identifiers.

<a id="return-value"></a>

## Return Value

A new carousel content object containing the specified items.

# initWithStyle:items: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates a content object for displaying items in a carousel style in the top shelf interface.

## Declaration

```objectivec
- (instancetype) initWithStyle:(TVTopShelfCarouselContentStyle) style items:(NSArray<TVTopShelfCarouselItem *> *) items;
```

## Parameters

- `style`: The appearance to use for individual items. For a list of possible values, see [TVTopShelfCarouselContentStyle](style-swift.enum.md).
- `items`: The items to display in the Top Shelf interface. All of the items in the array must have unique identifiers.

<a id="return-value"></a>

## Return Value

A new carousel content object containing the specified items.
