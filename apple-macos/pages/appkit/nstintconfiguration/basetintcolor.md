> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstintconfiguration/basetintcolor

# baseTintColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The color the system supplies when you create a tint configuration.

## Declaration

```swift
var baseTintColor: NSColor? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the tint configuration wasn’t created using an [NSColor](../nscolor.md) object.

## See Also

### Setting the Tint Color

- [default](default.md): The system tints the content using the system default value for its context.
- [monochrome](monochrome.md): The content always displays in monochrome.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.

# baseTintColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The color the system supplies when you create a tint configuration.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSColor * baseTintColor;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if the tint configuration wasn’t created using an [NSColor](../nscolor.md) object.

## See Also

### Setting the Tint Color

- [defaultTintConfiguration](default.md): The system tints the content using the system default value for its context.
- [monochromeTintConfiguration](monochrome.md): The content always displays in monochrome.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.
