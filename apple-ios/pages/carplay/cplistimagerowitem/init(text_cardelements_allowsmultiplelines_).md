> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:cardelements:allowsmultiplelines:)

# init(text:cardElements:allowsMultipleLines:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row item with a text string, an array of @c CPListImageRowItemCardElement and a boolean to allow multiple lines in this row.

## Declaration

```swift
init(text: String?, cardElements elements: [CPListImageRowItemCardElement], allowsMultipleLines: Bool)
```

## Parameters

- `text`: The text visible at the top of the cell.
- `elements`: The list of @c CPListImageRowItemCardElement  elements visible below the text.
- `allowsMultipleLines`: Determines if the elements could be visible on more than a single line.

<a id="discussion"></a>

## Discussion

If a nil @c text property is provided the cell will resize accordingly to hide the title.

# initWithText:cardElements:allowsMultipleLines: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row item with a text string, an array of @c CPListImageRowItemCardElement and a boolean to allow multiple lines in this row.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text cardElements:(NSArray<CPListImageRowItemCardElement *> *) elements allowsMultipleLines:(BOOL) allowsMultipleLines;
```

## Parameters

- `text`: The text visible at the top of the cell.
- `elements`: The list of @c CPListImageRowItemCardElement  elements visible below the text.
- `allowsMultipleLines`: Determines if the elements could be visible on more than a single line.

<a id="discussion"></a>

## Discussion

If a nil @c text property is provided the cell will resize accordingly to hide the title.
