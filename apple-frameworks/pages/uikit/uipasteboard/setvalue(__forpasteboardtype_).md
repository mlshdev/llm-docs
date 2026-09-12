> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/setvalue(_:forpasteboardtype:)](https://developer.apple.com/documentation/uikit/uipasteboard/setvalue(_:forpasteboardtype:))

# setValue(\_:forPasteboardType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Puts an object on the pasteboard for the specified representation type.

## Declaration

```swift
func setValue(_ value: Any, forPasteboardType pasteboardType: String)
```

## Parameters

- `value`: The object to be written to the pasteboard.
- `pasteboardType`: A string identifying the representation type of the pasteboard item. If the type is a UTI, it must be compatible with the class of `value`; otherwise, nothing is written to the pasteboard.

<a id="Discussion"></a>

## Discussion

Use this method to put an object—such as an [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [UIImage](../uiimage.md), or [NSURL](../../foundation/nsurl.md) object—on the pasteboard. (For images, you can also use the [image](image.md) or [images](images.md) properties; for all other data, such as raw binary data, use the [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md) method.) This method writes the object as the first item in the pasteboard. Calling this method replaces any items currently in the pasteboard.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems(\_:)](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:)](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [value(forPasteboardType:)](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.

# setValue:forPasteboardType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Puts an object on the pasteboard for the specified representation type.

## Declaration

```objectivec
- (void) setValue:(id) value forPasteboardType:(NSString *) pasteboardType;
```

## Parameters

- `value`: The object to be written to the pasteboard.
- `pasteboardType`: A string identifying the representation type of the pasteboard item. If the type is a UTI, it must be compatible with the class of `value`; otherwise, nothing is written to the pasteboard.

<a id="Discussion"></a>

## Discussion

Use this method to put an object—such as an [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [UIImage](../uiimage.md), or [NSURL](../../foundation/nsurl.md) object—on the pasteboard. (For images, you can also use the [image](image.md) or [images](images.md) properties; for all other data, such as raw binary data, use the [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md) method.) This method writes the object as the first item in the pasteboard. Calling this method replaces any items currently in the pasteboard.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems:](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [valueForPasteboardType:](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
