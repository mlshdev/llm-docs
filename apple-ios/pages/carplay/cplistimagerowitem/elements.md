> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitem/elements

# elements (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The elements to display in the row.

## Declaration

```swift
var elements: [CPListImageRowItemElement] { get set }
```

<a id="discussion"></a>

## Discussion

This property contains the elements you provided at initialization time. The type of the elements in this array depends on the initializer you used when you created the [CPListImageRowItem](../cplistimagerowitem.md) object.

To change the elements in the array, assign an updated value to this property. Make sure every element in the new array has the same type. If your array contains multiple element types, CarPlay chooses the first element type it finds and discards elements of other types. After you assign the new value, CarPlay refreshes the appearance of your list interface.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [allowsMultipleLines](allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.

# elements (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The elements to display in the row.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPListImageRowItemElement *> * elements;
```

<a id="discussion"></a>

## Discussion

This property contains the elements you provided at initialization time. The type of the elements in this array depends on the initializer you used when you created the [CPListImageRowItem](../cplistimagerowitem.md) object.

To change the elements in the array, assign an updated value to this property. Make sure every element in the new array has the same type. If your array contains multiple element types, CarPlay chooses the first element type it finds and discards elements of other types. After you assign the new value, CarPlay refreshes the appearance of your list interface.

## See Also

### Managing the row’s content

- [text](text.md): The row’s primary text.
- [allowsMultipleLines](allowsmultiplelines.md): A Boolean value that indicates whether the row displays elements on more than one line.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [CPMaximumNumberOfGridImages](../cpmaximumnumberofgridimages.md): The maximum number of images that an image row can contain.
