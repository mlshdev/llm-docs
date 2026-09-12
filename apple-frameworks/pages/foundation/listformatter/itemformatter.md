> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/listformatter/itemformatter](https://developer.apple.com/documentation/foundation/listformatter/itemformatter)

# itemFormatter (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that formats each item in the list.

## Declaration

```swift
@NSCopying var itemFormatter: Formatter? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property isn’t set, the list formatter falls back to the item’s [description(withLocale:)](../nsarray/description%28withlocale_%29.md) or [localizedDescription](../progress/localizeddescription.md) methods if implemented. If those methods aren’t implemented, the formatter uses [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Configuring Formatter Options

- [locale](locale.md): The locale to use when formatting items in the list.

# itemFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that formats each item in the list.

## Declaration

```objectivec
@property (copy, nullable) NSFormatter * itemFormatter;
```

<a id="Discussion"></a>

## Discussion

If this property isn’t set, the list formatter falls back to the item’s [descriptionWithLocale:](../nsarray/description%28withlocale_%29.md) or [localizedDescription](../progress/localizeddescription.md) methods if implemented. If those methods aren’t implemented, the formatter uses [description](../../objectivec/nsobjectprotocol/description.md) instead.

## See Also

### Configuring Formatter Options

- [locale](locale.md): The locale to use when formatting items in the list.
