> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipasteboard/additems(_:)

# addItems(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Appends pasteboard items to the current contents of the pasteboard.

## Declaration

```swift
func addItems(_ items: [[String : Any]])
```

## Parameters

- `items`: An array of dictionaries. Each dictionary represents a pasteboard item, with the key being the representation type and the value being the object associated with that type.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [setItems(\_:options:)](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [data(forPasteboardType:)](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData(\_:forPasteboardType:)](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [value(forPasteboardType:)](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue(\_:forPasteboardType:)](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.

# addItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Appends pasteboard items to the current contents of the pasteboard.

## Declaration

```objectivec
- (void) addItems:(NSArray<NSDictionary<NSString *,id> *> *) items;
```

## Parameters

- `items`: An array of dictionaries. Each dictionary represents a pasteboard item, with the key being the representation type and the value being the object associated with that type.

## See Also

### Getting and setting pasteboard items

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.
- [items](items.md): The pasteboard items on the pasteboard.
- [setItems:options:](setitems%28__options_%29.md): Adds an array of items to a pasteboard, and sets privacy options for all the items on the pasteboard.
- [dataForPasteboardType:](data%28forpasteboardtype_%29.md): Returns the data on the pasteboard for the given representation type.
- [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md): Returns the data objects in the indicated pasteboard items that have the given representation type.
- [setData:forPasteboardType:](setdata%28__forpasteboardtype_%29.md): Puts data on the pasteboard for the specified representation type.
- [valueForPasteboardType:](value%28forpasteboardtype_%29.md): Returns an object on the pasteboard for the given representation type.
- [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md): Returns the objects on the indicated pasteboard items that have the given representation type.
- [setValue:forPasteboardType:](setvalue%28__forpasteboardtype_%29.md): Puts an object on the pasteboard for the specified representation type.
