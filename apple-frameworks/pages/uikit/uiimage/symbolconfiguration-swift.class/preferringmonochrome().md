> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/preferringmonochrome()](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/preferringmonochrome())

# preferringMonochrome() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a color configuration that specifies that the symbol image uses its monochrome variant.

## Declaration

```swift
class func preferringMonochrome() -> Self
```

<a id="return-value"></a>

## Return Value

A symbol configuration that acquires the monochrome variant of a symbol.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../../configuring-and-displaying-symbol-images-in-your-ui.md)

## See Also

### Creating a color configuration

- [init(hierarchicalColor:)](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [init(paletteColors:)](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [preferringMulticolor()](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.

# configurationPreferringMonochrome (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a color configuration that specifies that the symbol image uses its monochrome variant.

## Declaration

```objectivec
+ (instancetype) configurationPreferringMonochrome;
```

<a id="return-value"></a>

## Return Value

A symbol configuration that acquires the monochrome variant of a symbol.

## Mentioned In

- [Configuring and displaying symbol images in your UI](../../configuring-and-displaying-symbol-images-in-your-ui.md)

## See Also

### Creating a color configuration

- [configurationWithHierarchicalColor:](init%28hierarchicalcolor_%29.md): Creates a color configuration with a color scheme that originates from one color.
- [configurationWithPaletteColors:](init%28palettecolors_%29.md): Creates a color configuration with a color scheme from a palette of multiple colors.
- [configurationPreferringMulticolor](preferringmulticolor%28%29.md): Creates a color configuration that specifies that the symbol image uses its multicolor variant, if one exists.
