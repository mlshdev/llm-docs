> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/components](https://developer.apple.com/documentation/coreimage/cicolor/components)

# components (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Return a pointer to an array of `CGFloat` values including alpha.

## Declaration

```swift
var components: UnsafePointer<CGFloat> { get }
```

<a id="discussion"></a>

## Discussion

Typically this array will contain `4` `CGFloat` values for red, green, blue, and alpha. If the [CIColor](../cicolor.md) was initialized with a `CGColor` then returned pointer will be the same as calling `CGColorGetComponents()`

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

# components (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Return a pointer to an array of `CGFloat` values including alpha.

## Declaration

```objectivec
@property (readonly) const CGFloat * components;
```

<a id="discussion"></a>

## Discussion

Typically this array will contain `4` `CGFloat` values for red, green, blue, and alpha. If the [CIColor](../cicolor.md) was initialized with a `CGColor` then returned pointer will be the same as calling `CGColorGetComponents()`

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.
