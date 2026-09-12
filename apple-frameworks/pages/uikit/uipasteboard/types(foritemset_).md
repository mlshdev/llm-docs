> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/types(foritemset:)](https://developer.apple.com/documentation/uikit/uipasteboard/types(foritemset:))

# types(forItemSet:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an array of representation types for each specified pasteboard item.

## Declaration

```swift
func types(forItemSet itemSet: IndexSet?) -> [[String]]?
```

## Parameters

- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

An array of arrays, with each inner array holding the representation types for a particular pasteboard item.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [types](types.md): The types of the first item on the pasteboard.
- [contains(pasteboardTypes:)](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [contains(pasteboardTypes:inItemSet:)](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSet(withPasteboardTypes:)](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.

# pasteboardTypesForItemSet: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an array of representation types for each specified pasteboard item.

## Declaration

```objectivec
- (NSArray<NSArray<NSString *> *> *) pasteboardTypesForItemSet:(NSIndexSet *) itemSet;
```

## Parameters

- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

An array of arrays, with each inner array holding the representation types for a particular pasteboard item.

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [pasteboardTypes](types.md): The types of the first item on the pasteboard.
- [containsPasteboardTypes:](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [containsPasteboardTypes:inItemSet:](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSetWithPasteboardTypes:](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.
