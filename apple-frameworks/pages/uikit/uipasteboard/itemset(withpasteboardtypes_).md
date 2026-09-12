> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/itemset(withpasteboardtypes:)](https://developer.apple.com/documentation/uikit/uipasteboard/itemset(withpasteboardtypes:))

# itemSet(withPasteboardTypes:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an index set identifying pasteboard items having the specified representation types.

## Declaration

```swift
func itemSet(withPasteboardTypes pasteboardTypes: [String]) -> IndexSet?
```

## Parameters

- `pasteboardTypes`: An array of strings, with each string identifying a representation type. Typically you use UTIs as pasteboard types.

<a id="return-value"></a>

## Return Value

An index set with each integer positionally identifying a pasteboard item that has one of the representation types specified in `pasteboardTypes`.

<a id="Discussion"></a>

## Discussion

You can pass the index set returned in this method in a call to [data(forPasteboardType:inItemSet:)](data%28forpasteboardtype_initemset_%29.md) or [values(forPasteboardType:inItemSet:)](values%28forpasteboardtype_initemset_%29.md) to get the data in the indicated pasteboard items.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [types](types.md): The types of the first item on the pasteboard.
- [types(forItemSet:)](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [contains(pasteboardTypes:)](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [contains(pasteboardTypes:inItemSet:)](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.

# itemSetWithPasteboardTypes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an index set identifying pasteboard items having the specified representation types.

## Declaration

```objectivec
- (NSIndexSet *) itemSetWithPasteboardTypes:(NSArray<NSString *> *) pasteboardTypes;
```

## Parameters

- `pasteboardTypes`: An array of strings, with each string identifying a representation type. Typically you use UTIs as pasteboard types.

<a id="return-value"></a>

## Return Value

An index set with each integer positionally identifying a pasteboard item that has one of the representation types specified in `pasteboardTypes`.

<a id="Discussion"></a>

## Discussion

You can pass the index set returned in this method in a call to [dataForPasteboardType:inItemSet:](data%28forpasteboardtype_initemset_%29.md) or [valuesForPasteboardType:inItemSet:](values%28forpasteboardtype_initemset_%29.md) to get the data in the indicated pasteboard items.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [pasteboardTypes](types.md): The types of the first item on the pasteboard.
- [pasteboardTypesForItemSet:](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [containsPasteboardTypes:](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [containsPasteboardTypes:inItemSet:](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
