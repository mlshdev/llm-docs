> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/values(forpasteboardtype:initemset:)](https://developer.apple.com/documentation/uikit/uipasteboard/values(forpasteboardtype:initemset:))

# values(forPasteboardType:inItemSet:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the objects on the indicated pasteboard items that have the given representation type.

## Declaration

```swift
func values(forPasteboardType pasteboardType: String, inItemSet itemSet: IndexSet?) -> [Any]?
```

## Parameters

- `pasteboardType`: A string identifying a representation type. Typically this is a UTI.
- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

An array of objects that have the type indicated by `pasteboardType`; or—if the pasteboard type is custom or unknown—an array of [NSData](../../foundation/nsdata.md) objects.

<a id="Discussion"></a>

## Discussion

Returned objects are of one of the following classes, depending on the pasteboard item’s representation type: [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [NSURL](../../foundation/nsurl.md), or [UIImage](../uiimage.md).

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
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# valuesForPasteboardType:inItemSet: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the objects on the indicated pasteboard items that have the given representation type.

## Declaration

```objectivec
- (NSArray *) valuesForPasteboardType:(NSString *) pasteboardType inItemSet:(NSIndexSet *) itemSet;
```

## Parameters

- `pasteboardType`: A string identifying a representation type. Typically this is a UTI.
- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

An array of objects that have the type indicated by `pasteboardType`; or—if the pasteboard type is custom or unknown—an array of [NSData](../../foundation/nsdata.md) objects.

<a id="Discussion"></a>

## Discussion

Returned objects are of one of the following classes, depending on the pasteboard item’s representation type: [NSString](../../foundation/nsstring.md), [NSArray](../../foundation/nsarray.md), [NSDictionary](../../foundation/nsdictionary.md), [NSDate](../../foundation/nsdate.md), [NSNumber](../../foundation/nsnumber.md), [NSURL](../../foundation/nsurl.md), or [UIImage](../uiimage.md).

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
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
