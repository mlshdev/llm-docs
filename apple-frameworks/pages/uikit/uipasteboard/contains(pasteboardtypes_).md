> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/contains(pasteboardtypes:)](https://developer.apple.com/documentation/uikit/uipasteboard/contains(pasteboardtypes:))

# contains(pasteboardTypes:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the pasteboard holds data of the specified representation type.

## Declaration

```swift
func contains(pasteboardTypes: [String]) -> Bool
```

## Parameters

- `pasteboardTypes`: An array of strings. Each string should identify a representation of the pasteboard item that the pasteboard reader can handle. These string are frequently UTIs. See the class description for more information about pasteboard item types.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pasteboard item holds data of the indicated representation type, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method works on the first item in the pasteboard. If there are other items, it ignores them. You can use this method when enabling or disabling the Paste menu command.

Starting in iOS 10, you can directly check which data types are present on a pasteboard by using the convenience methods described in Checking for data types on a pasteboard.

## See Also

### Determining types of pasteboard items

- [types](types.md): The types of the first item on the pasteboard.
- [types(forItemSet:)](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [contains(pasteboardTypes:inItemSet:)](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSet(withPasteboardTypes:)](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.

# containsPasteboardTypes: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns whether the pasteboard holds data of the specified representation type.

## Declaration

```objectivec
- (BOOL) containsPasteboardTypes:(NSArray<NSString *> *) pasteboardTypes;
```

## Parameters

- `pasteboardTypes`: An array of strings. Each string should identify a representation of the pasteboard item that the pasteboard reader can handle. These string are frequently UTIs. See the class description for more information about pasteboard item types.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the pasteboard item holds data of the indicated representation type, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method works on the first item in the pasteboard. If there are other items, it ignores them. You can use this method when enabling or disabling the Paste menu command.

Starting in iOS 10, you can directly check which data types are present on a pasteboard by using the convenience methods described in Checking for data types on a pasteboard.

## See Also

### Determining types of pasteboard items

- [pasteboardTypes](types.md): The types of the first item on the pasteboard.
- [pasteboardTypesForItemSet:](types%28foritemset_%29.md): Returns an array of representation types for each specified pasteboard item.
- [containsPasteboardTypes:inItemSet:](contains%28pasteboardtypes_initemset_%29.md): Returns whether the specified pasteboard items contain data of the given representation types.
- [itemSetWithPasteboardTypes:](itemset%28withpasteboardtypes_%29.md): Returns an index set identifying pasteboard items having the specified representation types.
