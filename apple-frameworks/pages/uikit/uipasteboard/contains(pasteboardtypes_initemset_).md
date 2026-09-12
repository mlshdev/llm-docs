> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/contains(pasteboardtypes:initemset:)](https://developer.apple.com/documentation/uikit/uipasteboard/contains(pasteboardtypes:initemset:))

# contains(pasteboardTypes:inItemSet:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the specified pasteboard items contain data of the given representation types.

## Declaration

```swift
func contains(pasteboardTypes: [String], inItemSet itemSet: IndexSet?) -> Bool
```

## Parameters

- `pasteboardTypes`: An array of strings, with each string identifying a representation type. Typically you use UTIs as pasteboard types.
- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pasteboard items identified by `itemSet` have data corresponding to the representation types specified by `pasteboardTypes`; otherwise, returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [types](types.md): The types of the first item on the pasteboard.
- [types(forItemSet:)](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [contains(pasteboardTypes:)](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [itemSet(withPasteboardTypes:)](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.

# containsPasteboardTypes:inItemSet: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the specified pasteboard items contain data of the given representation types.

## Declaration

```objectivec
- (BOOL) containsPasteboardTypes:(NSArray<NSString *> *) pasteboardTypes inItemSet:(NSIndexSet *) itemSet;
```

## Parameters

- `pasteboardTypes`: An array of strings, with each string identifying a representation type. Typically you use UTIs as pasteboard types.
- `itemSet`: An index set with each integer value identifying a pasteboard item positionally in the pasteboard. Pass in `nil` to request all pasteboard items.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pasteboard items identified by `itemSet` have data corresponding to the representation types specified by `pasteboardTypes`; otherwise, returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [numberOfItems](numberofitems.md): The number of items for the pasteboard.

### Determining types of pasteboard items

- [pasteboardTypes](types.md): The types of the first item on the pasteboard.
- [pasteboardTypesForItemSet:](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [containsPasteboardTypes:](contains%28pasteboardtypes_%29.md): Returns whether the pasteboard holds data of the specified representation type.
- [itemSetWithPasteboardTypes:](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.
