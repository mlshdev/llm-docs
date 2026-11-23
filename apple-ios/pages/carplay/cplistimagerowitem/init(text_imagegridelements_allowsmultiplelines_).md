> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:imagegridelements:allowsmultiplelines:)

# init(text:imageGridElements:allowsMultipleLines:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes the row with the specified text and image grid elements.

## Declaration

```swift
init(text: String?, imageGridElements elements: [CPListImageRowItemImageGridElement], allowsMultipleLines: Bool)
```

## Parameters

- `text`: The text to display above the row. Specify `nil` to omit the text.
- `elements`: The grid elements to display. Each element displays an image and minimal text. Limit the number of items in this parameter to the value in [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md). If your array contains more elements than the maximum, CarPlay doesn’t store references to elements past the maximum number.
- `allowsMultipleLines`: `true` if you allow the row to display multiple lines of elements. Specify `false` to display only one line of elements. If this parameter is `false` and the number of displayable elements don’t fit on one line, CarPlay displays only as many elements as it can and ignores the rest.

<a id="return-value"></a>

## Return Value

An initialized row with the specified image grid elements.

## See Also

### Creating a list image row item

- [init(text:elements:allowsMultipleLines:)](init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [init(text:cardElements:allowsMultipleLines:)](init%28text_cardelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and card-style elements.
- [init(text:condensedElements:allowsMultipleLines:)](init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [init(text:gridElements:allowsMultipleLines:)](init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.

# initWithText:imageGridElements:allowsMultipleLines: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes the row with the specified text and image grid elements.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text imageGridElements:(NSArray<CPListImageRowItemImageGridElement *> *) elements allowsMultipleLines:(BOOL) allowsMultipleLines;
```

## Parameters

- `text`: The text to display above the row. Specify `nil` to omit the text.
- `elements`: The grid elements to display. Each element displays an image and minimal text. Limit the number of items in this parameter to the value in [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md). If your array contains more elements than the maximum, CarPlay doesn’t store references to elements past the maximum number.
- `allowsMultipleLines`: `true` if you allow the row to display multiple lines of elements. Specify `false` to display only one line of elements. If this parameter is `false` and the number of displayable elements don’t fit on one line, CarPlay displays only as many elements as it can and ignores the rest.

<a id="return-value"></a>

## Return Value

An initialized row with the specified image grid elements.

## See Also

### Creating a list image row item

- [initWithText:elements:allowsMultipleLines:](init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [initWithText:cardElements:allowsMultipleLines:](init%28text_cardelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and card-style elements.
- [initWithText:condensedElements:allowsMultipleLines:](init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [initWithText:gridElements:allowsMultipleLines:](init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.
