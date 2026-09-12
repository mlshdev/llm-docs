> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/green-swift.property](https://developer.apple.com/documentation/coreimage/cicolor/green-swift.property)

# green (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the unpremultiplied green component of the color.

## Declaration

```swift
var green: CGFloat { get }
```

<a id="discussion"></a>

## Discussion

If the [CIColor](../cicolor.md) was initialized with a `CGColor` in a non-RGB `CGColorSpace` then it will be converted to sRGB to get the green component.

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

# green (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns the unpremultiplied green component of the color.

## Declaration

```objectivec
@property (readonly) CGFloat green;
```

<a id="discussion"></a>

## Discussion

If the [CIColor](../cicolor.md) was initialized with a `CGColor` in a non-RGB `CGColorSpace` then it will be converted to sRGB to get the green component.

## See Also

### Getting Color Components

- [colorSpace](colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](numberofcomponents.md): Returns the color components of the color including alpha.
- [red](red-swift.property.md): Returns the unpremultiplied red component of the color.
- [blue](blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](alpha.md): Returns the alpha value of the color.
- [stringRepresentation](stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.
