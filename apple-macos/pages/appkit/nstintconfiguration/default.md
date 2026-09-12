> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration/default](https://developer.apple.com/documentation/appkit/nstintconfiguration/default)

# default (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The system tints the content using the system default value for its context.

## Declaration

```swift
class var `default`: NSTintConfiguration { get }
```

## See Also

### Setting the Tint Color

- [monochrome](monochrome.md): The content always displays in monochrome.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.

# defaultTintConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The system tints the content using the system default value for its context.

## Declaration

```objectivec
@property (class, strong, readonly) NSTintConfiguration * defaultTintConfiguration;
```

## See Also

### Setting the Tint Color

- [monochromeTintConfiguration](monochrome.md): The content always displays in monochrome.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.
