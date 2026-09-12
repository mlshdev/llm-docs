> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration/equivalentcontenttintcolor](https://developer.apple.com/documentation/appkit/nstintconfiguration/equivalentcontenttintcolor)

# equivalentContentTintColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A color object that matches the effective content tint.

## Declaration

```swift
var equivalentContentTintColor: NSColor? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSColor](../nscolor.md) that matches the represented content tint. This property is `nil` if the system can’t represent the content tint as an [NSColor](../nscolor.md).

## See Also

### Setting the Tint Color

- [default](default.md): The system tints the content using the system default value for its context.
- [monochrome](monochrome.md): The content always displays in monochrome.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.

# equivalentContentTintColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A color object that matches the effective content tint.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSColor * equivalentContentTintColor;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an [NSColor](../nscolor.md) that matches the represented content tint. This property is `nil` if the system can’t represent the content tint as an [NSColor](../nscolor.md).

## See Also

### Setting the Tint Color

- [defaultTintConfiguration](default.md): The system tints the content using the system default value for its context.
- [monochromeTintConfiguration](monochrome.md): The content always displays in monochrome.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.
