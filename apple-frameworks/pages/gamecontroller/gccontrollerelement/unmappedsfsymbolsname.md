> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerelement/unmappedsfsymbolsname](https://developer.apple.com/documentation/gamecontroller/gccontrollerelement/unmappedsfsymbolsname)

# unmappedSfSymbolsName (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The element’s system symbol, not the remapped symbol.

## Declaration

```swift
var unmappedSfSymbolsName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the original unmapped name. Otherwise, use the [sfSymbolsName](sfsymbolsname.md) property to get the possibly remapped symbol.

## See Also

### Displaying a symbol

- [sfSymbolsName](sfsymbolsname.md): A system symbol for the element or the remapped element.

# unmappedSfSymbolsName (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The element’s system symbol, not the remapped symbol.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSString * unmappedSfSymbolsName;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the original unmapped name. Otherwise, use the [sfSymbolsName](sfsymbolsname.md) property to get the possibly remapped symbol.

## See Also

### Displaying a symbol

- [sfSymbolsName](sfsymbolsname.md): A system symbol for the element or the remapped element.
