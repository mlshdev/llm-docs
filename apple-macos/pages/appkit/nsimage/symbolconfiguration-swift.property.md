> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.property](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.property)

# symbolConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The configuration details for a symbol image.

## Declaration

```swift
@NSCopying var symbolConfiguration: NSImage.SymbolConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the traits and rendering attributes the system uses with the symbol image. These details determine which variant of the image to load and draw and how to render it, falling back on the current environment for values that you don’t specify. For symbol images, the default value of this property is a symbol image configuration object with unspecified values.

You can’t modify this property directly, but you can use [withSymbolConfiguration(\_:)](withsymbolconfiguration%28__%29.md) when you want to create a new image object with a specific set of traits.

# symbolConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The configuration details for a symbol image.

## Declaration

```objectivec
@property (copy, readonly) NSImageSymbolConfiguration * symbolConfiguration;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the traits and rendering attributes the system uses with the symbol image. These details determine which variant of the image to load and draw and how to render it, falling back on the current environment for values that you don’t specify. For symbol images, the default value of this property is a symbol image configuration object with unspecified values.

You can’t modify this property directly, but you can use [imageWithSymbolConfiguration:](withsymbolconfiguration%28__%29.md) when you want to create a new image object with a specific set of traits.
