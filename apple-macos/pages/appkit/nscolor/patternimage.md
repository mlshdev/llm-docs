> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/patternimage](https://developer.apple.com/documentation/appkit/nscolor/patternimage)

# patternImage (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pattern image used to paint the target area.

## Declaration

```swift
@NSCopying var patternImage: NSImage { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the image (instead of the solid color) to use during drawing. Pattern images are tiled as needed to fill the rendered area.

Do not access this property unless you created the color object using a pattern image. Accessing this property for colors created using other types of color information raises an exception.

## See Also

### Creating a pattern-based color

- [init(patternImage:)](init%28patternimage_%29.md): Creates a color object that uses the specified image pattern to paint the target area.

# patternImage (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The pattern image used to paint the target area.

## Declaration

```objectivec
@property (copy, readonly) NSImage * patternImage;
```

<a id="Discussion"></a>

## Discussion

This property contains the image (instead of the solid color) to use during drawing. Pattern images are tiled as needed to fill the rendered area.

Do not access this property unless you created the color object using a pattern image. Accessing this property for colors created using other types of color information raises an exception.

## See Also

### Creating a pattern-based color

- [colorWithPatternImage:](init%28patternimage_%29.md): Creates a color object that uses the specified image pattern to paint the target area.
