> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:cardelements:allowsmultiplelines:)

# init(text:cardElements:allowsMultipleLines:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes the row with the specified text and card-style elements.

## Declaration

```swift
init(text: String?, cardElements elements: [CPListImageRowItemCardElement], allowsMultipleLines: Bool)
```

## Parameters

- `text`: The text to display above the row. Specify `nil` to omit the text.
- `elements`: The card elements to display. Each element displays its image and text with a background tint color in a playing card shape. Limit the number of items in this parameter to the value in [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md). If your array contains more elements than the maximum, CarPlay doesn’t store references to elements past the maximum number.
- `allowsMultipleLines`: `true` if you allow the row to display multiple lines of elements. Specify `false` to display only one line of elements. If this parameter is `false` and the number of displayable elements don’t fit on one line, CarPlay displays only as many elements as it can and ignores the rest.

<a id="return-value"></a>

## Return Value

An initialized row with the specified card elements.

## See Also

### Creating a list image row item

- [init(text:elements:allowsMultipleLines:)](init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [init(text:condensedElements:allowsMultipleLines:)](init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [init(text:gridElements:allowsMultipleLines:)](init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.
- [init(text:imageGridElements:allowsMultipleLines:)](init%28text_imagegridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and image grid elements.

# initWithText:cardElements:allowsMultipleLines: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initializes the row with the specified text and card-style elements.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text cardElements:(NSArray<CPListImageRowItemCardElement *> *) elements allowsMultipleLines:(BOOL) allowsMultipleLines;
```

## Parameters

- `text`: The text to display above the row. Specify `nil` to omit the text.
- `elements`: The card elements to display. Each element displays its image and text with a background tint color in a playing card shape. Limit the number of items in this parameter to the value in [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md). If your array contains more elements than the maximum, CarPlay doesn’t store references to elements past the maximum number.
- `allowsMultipleLines`: `true` if you allow the row to display multiple lines of elements. Specify `false` to display only one line of elements. If this parameter is `false` and the number of displayable elements don’t fit on one line, CarPlay displays only as many elements as it can and ignores the rest.

<a id="return-value"></a>

## Return Value

An initialized row with the specified card elements.

## See Also

### Creating a list image row item

- [initWithText:elements:allowsMultipleLines:](init%28text_elements_allowsmultiplelines_%29.md): Initializes the row with the specified text and row elements.
- [initWithText:condensedElements:allowsMultipleLines:](init%28text_condensedelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and condensed-height elements.
- [initWithText:gridElements:allowsMultipleLines:](init%28text_gridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and grid elements.
- [initWithText:imageGridElements:allowsMultipleLines:](init%28text_imagegridelements_allowsmultiplelines_%29.md): Initializes the row with the specified text and image grid elements.
