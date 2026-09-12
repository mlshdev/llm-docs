> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsshadow/shadowcolor](https://developer.apple.com/documentation/appkit/nsshadow/shadowcolor)

# shadowColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The color of the shadow.

## Declaration

```swift
@NSCopying var shadowColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

The default shadow color is black with an alpha of 1/3. If you set this property to `nil`, the shadow is not drawn. The color you specify must be convertible to an RGBA color and may contain alpha information.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.

# shadowColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The color of the shadow.

## Declaration

```objectivec
@property (copy, nullable) NSColor * shadowColor;
```

<a id="Discussion"></a>

## Discussion

The default shadow color is black with an alpha of 1/3. If you set this property to `nil`, the shadow is not drawn. The color you specify must be convertible to an RGBA color and may contain alpha information.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.
