> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/value(forpasteboardtype:)](https://developer.apple.com/documentation/uikit/uipasteboard/value(forpasteboardtype:))

# value(forPasteboardType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an object on the pasteboard for the given representation type.

## Declaration

```swift
func value(forPasteboardType pasteboardType: String) -> Any?
```

## Parameters

- `pasteboardType`: A string identifying a representation type of a pasteboard item.

<a id="return-value"></a>

## Return Value

An object that is an instance of the appropriate class based on `pasteboardType` or an [NSData](../../foundation/nsdata.md) object containing “raw” data.

<a id="Discussion"></a>

## Discussion

This method attempts to return an object that is of a class type appropriate to the representation type, which typically is a UTI. For example, if the representation type is `kUTTypePlainText` (`public.plain-text`), the method returns an [NSString](../../foundation/nsstring.md) object. If the method can’t determine the class type from the representation type, it returns the object as a generic object, such as an [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [NSURL](../../foundation/nsurl.md), [UIImage](../uiimage.md), or [NSData](../../foundation/nsdata.md) object. This method works on the first item in the pasteboard. If there are other items, it ignores them.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems(\_:)](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:)](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# valueForPasteboardType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an object on the pasteboard for the given representation type.

## Declaration

```objectivec
- (id) valueForPasteboardType:(NSString *) pasteboardType;
```

## Parameters

- `pasteboardType`: A string identifying a representation type of a pasteboard item.

<a id="return-value"></a>

## Return Value

An object that is an instance of the appropriate class based on `pasteboardType` or an [NSData](../../foundation/nsdata.md) object containing “raw” data.

<a id="Discussion"></a>

## Discussion

This method attempts to return an object that is of a class type appropriate to the representation type, which typically is a UTI. For example, if the representation type is `kUTTypePlainText` (`public.plain-text`), the method returns an [NSString](../../foundation/nsstring.md) object. If the method can’t determine the class type from the representation type, it returns the object as a generic object, such as an [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [NSURL](../../foundation/nsurl.md), [UIImage](../uiimage.md), or [NSData](../../foundation/nsdata.md) object. This method works on the first item in the pasteboard. If there are other items, it ignores them.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems:](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
