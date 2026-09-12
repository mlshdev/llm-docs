> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfieldcell/drawsbackground](https://developer.apple.com/documentation/appkit/nstextfieldcell/drawsbackground)

# drawsBackground (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the cell draws its background color.

## Declaration

```swift
var drawsBackground: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell draws its background color. In order to prevent inconsistent rendering, background color rendering is automatically disabled for rounded-bezel text fields.

## See Also

### Related Documentation

- [drawsBackground](../nstextfield/drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.

### Controlling the Background

- [backgroundColor](backgroundcolor.md): The color of the cell’s background.

# drawsBackground (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the cell draws its background color.

## Declaration

```objectivec
@property BOOL drawsBackground;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the cell draws its background color. In order to prevent inconsistent rendering, background color rendering is automatically disabled for rounded-bezel text fields.

## See Also

### Related Documentation

- [drawsBackground](../nstextfield/drawsbackground.md): A Boolean value that controls whether the text field’s cell draws a background color behind the text.

### Controlling the Background

- [backgroundColor](backgroundcolor.md): The color of the cell’s background.
