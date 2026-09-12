> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/numberofcomponents](https://developer.apple.com/documentation/coreimage/cicolor/numberofcomponents)

# numberOfComponents (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the color components of the color including alpha.

## Declaration

```swift
var numberOfComponents: Int { get }
```

<a id="discussion"></a>

## Discussion

This number includes the alpha component if the color contains one.

Typically this number will be `4` for red, green, blue, and alpha. If the [CIColor](../cicolor.md) was initialized with a `CGColor` then the number will be the same as calling `CGColorGetNumberOfComponents()`

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

# numberOfComponents (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the color components of the color including alpha.

## Declaration

```objectivec
@property (readonly) size_t numberOfComponents;
```

<a id="discussion"></a>

## Discussion

This number includes the alpha component if the color contains one.

Typically this number will be `4` for red, green, blue, and alpha. If the [CIColor](../cicolor.md) was initialized with a `CGColor` then the number will be the same as calling `CGColorGetNumberOfComponents()`

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.
