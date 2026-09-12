> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/colorspace](https://developer.apple.com/documentation/coreimage/cicolor/colorspace)

# colorSpace (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the `CGColorSpace` associated with the color

## Declaration

```swift
var colorSpace: CGColorSpace { get }
```

## See Also

### Getting Color Components

- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

# colorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the `CGColorSpace` associated with the color

## Declaration

```objectivec
@property (readonly) CGColorSpaceRef colorSpace;
```

## See Also

### Getting Color Components

- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.
