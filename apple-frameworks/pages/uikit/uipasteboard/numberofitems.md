> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/numberofitems](https://developer.apple.com/documentation/uikit/uipasteboard/numberofitems)

# numberOfItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of items for the pasteboard.

## Declaration

```swift
var numberOfItems: Int { get }
```

## See Also

### Getting and setting pasteboard items

- [items](items.md): The pasteboard items on the pasteboard.
- [addItems(\_:)](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:)](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [value(forPasteboardType:)](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# numberOfItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of items for the pasteboard.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger numberOfItems;
```

## See Also

### Getting and setting pasteboard items

- [items](items.md): The pasteboard items on the pasteboard.
- [addItems:](additems%28__%29.md): Appends pasteboard items to the current contents of the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [valueForPasteboardType:](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
