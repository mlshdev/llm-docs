> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(patternimage:)](https://developer.apple.com/documentation/appkit/nscolor/init(patternimage:))

# init(patternImage:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object that uses the specified image pattern to paint the target area.

## Declaration

```swift
init(patternImage image: NSImage)
```

## Parameters

- `image`: The image to use as the pattern for the color object. The image is tiled starting at the bottom of the window. The image is not scaled.

<a id="return-value"></a>

## Return Value

The `NSColor` object. This color object is autoreleased.

## See Also

### Creating a pattern-based color

- [patternImage](patternimage.md): The pattern image used to paint the target area.

# colorWithPatternImage: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object that uses the specified image pattern to paint the target area.

## Declaration

```objectivec
+ (NSColor *) colorWithPatternImage:(NSImage *) image;
```

## Parameters

- `image`: The image to use as the pattern for the color object. The image is tiled starting at the bottom of the window. The image is not scaled.

<a id="return-value"></a>

## Return Value

The `NSColor` object. This color object is autoreleased.

## See Also

### Creating a pattern-based color

- [patternImage](patternimage.md): The pattern image used to paint the target area.
