> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistimagerowitem/init(text:imagegridelements:allowsmultiplelines:)](https://developer.apple.com/documentation/carplay/cplistimagerowitem/init(text:imagegridelements:allowsmultiplelines:))

# init(text:imageGridElements:allowsMultipleLines:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row item with a text string, an array of @c CPListImageRowItemImageGridElement and a boolean to allow multiple lines in this row.

## Declaration

```swift
init(text: String?, imageGridElements elements: [CPListImageRowItemImageGridElement], allowsMultipleLines: Bool)
```

## Parameters

- `text`: The text visible at the top of the cell.
- `elements`: The list of @c CPListImageRowItemImageGridElement  elements visible below the text.
- `allowsMultipleLines`: Determines if the elements could be visible on more than a single line.

<a id="discussion"></a>

## Discussion

If a nil @c text property is provided the cell will resize accordingly to hide the title.

# initWithText:imageGridElements:allowsMultipleLines: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Initialize a list image row item with a text string, an array of @c CPListImageRowItemImageGridElement and a boolean to allow multiple lines in this row.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text imageGridElements:(NSArray<CPListImageRowItemImageGridElement *> *) elements allowsMultipleLines:(BOOL) allowsMultipleLines;
```

## Parameters

- `text`: The text visible at the top of the cell.
- `elements`: The list of @c CPListImageRowItemImageGridElement  elements visible below the text.
- `allowsMultipleLines`: Determines if the elements could be visible on more than a single line.

<a id="discussion"></a>

## Discussion

If a nil @c text property is provided the cell will resize accordingly to hide the title.
