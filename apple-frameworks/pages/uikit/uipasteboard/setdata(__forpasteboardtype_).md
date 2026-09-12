> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/setdata(_:forpasteboardtype:)](https://developer.apple.com/documentation/uikit/uipasteboard/setdata(_:forpasteboardtype:))

# setData(\_:forPasteboardType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Puts data on the pasteboard for the specified representation type.

## Declaration

```swift
func setData(_ data: Data, forPasteboardType pasteboardType: String)
```

## Parameters

- `data`: The data object to be written to the pasteboard.
- `pasteboardType`: A string identifying the representation type of the pasteboard item. This is typically a UTI.

<a id="Discussion"></a>

## Discussion

Use this method to put raw data on the pasteboard. For example, you could archive a graph of model objects and pass the resulting [NSData](../../foundation/nsdata.md) object to a related app via a pasteboard using a custom pasteboard type. (To put objects—such as [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [UIImage](../uiimage.md), or [NSURL](../../foundation/nsurl.md) objects—on the pasteboard, use the [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md) method.) This method writes data for the first item in the pasteboard. Calling this method replaces any items currently in the pasteboard.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems(\_:)](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:)](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [value(forPasteboardType:)](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# setData:forPasteboardType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Puts data on the pasteboard for the specified representation type.

## Declaration

```objectivec
- (void) setData:(NSData *) data forPasteboardType:(NSString *) pasteboardType;
```

## Parameters

- `data`: The data object to be written to the pasteboard.
- `pasteboardType`: A string identifying the representation type of the pasteboard item. This is typically a UTI.

<a id="Discussion"></a>

## Discussion

Use this method to put raw data on the pasteboard. For example, you could archive a graph of model objects and pass the resulting [NSData](../../foundation/nsdata.md) object to a related app via a pasteboard using a custom pasteboard type. (To put objects—such as [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [UIImage](../uiimage.md), or [NSURL](../../foundation/nsurl.md) objects—on the pasteboard, use the [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md) method.) This method writes data for the first item in the pasteboard. Calling this method replaces any items currently in the pasteboard.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [addItems:](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [valueForPasteboardType:](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
