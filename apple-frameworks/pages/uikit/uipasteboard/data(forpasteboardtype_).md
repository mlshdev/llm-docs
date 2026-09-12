> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/data(forpasteboardtype:)](https://developer.apple.com/documentation/uikit/uipasteboard/data(forpasteboardtype:))

# data(forPasteboardType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the data on the pasteboard for the given representation type.

## Declaration

```swift
func data(forPasteboardType pasteboardType: String) -> Data?
```

## Parameters

- `pasteboardType`: A string identifying a representation type of a pasteboard item.

<a id="return-value"></a>

## Return Value

A data object or `nil` if there is no data in the pasteboard of the given type.

<a id="Discussion"></a>

## Discussion

The returned object often holds raw (binary) data, such as image data. This method works on the first item in the pasteboard. If there are other items, it ignores them.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems(\_:)](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [value(forPasteboardType:)](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# dataForPasteboardType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the data on the pasteboard for the given representation type.

## Declaration

```objectivec
- (NSData *) dataForPasteboardType:(NSString *) pasteboardType;
```

## Parameters

- `pasteboardType`: A string identifying a representation type of a pasteboard item.

<a id="return-value"></a>

## Return Value

A data object or `nil` if there is no data in the pasteboard of the given type.

<a id="Discussion"></a>

## Discussion

The returned object often holds raw (binary) data, such as image data. This method works on the first item in the pasteboard. If there are other items, it ignores them.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems:](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [valueForPasteboardType:](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
