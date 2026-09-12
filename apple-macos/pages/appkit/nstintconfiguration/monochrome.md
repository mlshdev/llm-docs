> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration/monochrome](https://developer.apple.com/documentation/appkit/nstintconfiguration/monochrome)

# monochrome (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The content always displays in monochrome.

## Declaration

```swift
class var monochrome: NSTintConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Content marked as monochrome remains monochrome regardless of the system accent color.

## See Also

### Setting the Tint Color

- [default](default.md): The system tints the content using the system default value for its context.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.

# monochromeTintConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 11.0+

The content always displays in monochrome.

## Declaration

```objectivec
@property (class, strong, readonly) NSTintConfiguration * monochromeTintConfiguration;
```

<a id="Discussion"></a>

## Discussion

Content marked as monochrome remains monochrome regardless of the system accent color.

## See Also

### Setting the Tint Color

- [defaultTintConfiguration](default.md): The system tints the content using the system default value for its context.
- [baseTintColor](basetintcolor.md): The color the system supplies when you create a tint configuration.
- [equivalentContentTintColor](equivalentcontenttintcolor.md): A color object that matches the effective content tint.
