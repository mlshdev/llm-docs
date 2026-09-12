> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatter/string(from:)](https://developer.apple.com/documentation/foundation/listformatter/string(from:))

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a formatted string for an array of items.

## Declaration

```swift
func string(from items: [Any]) -> String?
```

## Parameters

- `items`: An array of objects to format as a list.

<a id="return-value"></a>

## Return Value

A formatted string representing the list of objects in an array. Returns `nil` if the formatter can’t generate a description for all objects in the array, or if `obj` is `nil`.

<a id="Discussion"></a>

## Discussion

The list formatter uses [itemFormatter](itemformatter.md) to format each item in the array. If [itemFormatter](itemformatter.md) doesn’t apply to a particular item, the list formatter falls back to the item’s [description(withLocale:)](../nsarray/description%28withlocale_%29.md) or [localizedDescription](../progress/localizeddescription.md) if implemented. If those methods aren’t implemented, the formatter uses [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Converting Arrays to Formatted Lists

- [string(for:)](string%28for_%29.md): Creates a formatted string for an array of items.
- [localizedString(byJoining:)](localizedstring%28byjoining_%29.md): Constructs a formatted string from an array of strings that uses the list format specific to the current locale.

# stringFromItems: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a formatted string for an array of items.

## Declaration

```objectivec
- (NSString *) stringFromItems:(NSArray *) items;
```

## Parameters

- `items`: An array of objects to format as a list.

<a id="return-value"></a>

## Return Value

A formatted string representing the list of objects in an array. Returns `nil` if the formatter can’t generate a description for all objects in the array, or if `obj` is `nil`.

<a id="Discussion"></a>

## Discussion

The list formatter uses [itemFormatter](itemformatter.md) to format each item in the array. If [itemFormatter](itemformatter.md) doesn’t apply to a particular item, the list formatter falls back to the item’s [descriptionWithLocale:](../nsarray/description%28withlocale_%29.md) or [localizedDescription](../progress/localizeddescription.md) if implemented. If those methods aren’t implemented, the formatter uses [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Converting Arrays to Formatted Lists

- [stringForObjectValue:](string%28for_%29.md): Creates a formatted string for an array of items.
- [localizedStringByJoiningStrings:](localizedstring%28byjoining_%29.md): Constructs a formatted string from an array of strings that uses the list format specific to the current locale.
