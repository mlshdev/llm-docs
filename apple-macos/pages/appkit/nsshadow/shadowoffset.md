> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsshadow/shadowoffset](https://developer.apple.com/documentation/appkit/nsshadow/shadowoffset)

# shadowOffset (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The shadow’s relative position, which you specify with horizontal and vertical offset values.

## Declaration

```swift
var shadowOffset: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the horizontal and vertical offset values that you specify using the `width` and `height` fields of the `CGSize` or `NSSize` data type. These offsets use the default user coordinate space and are not affected by custom transformations. Positive offset values extend down and to the right from the user’s perspective.

> **Note**

>  In macOS 10.15 and earlier, if you add a shadow to a layer that has a different graphics context, then positive offset values might extend up and to the right from the user’s perspective, instead of down and to the right as usual.

## See Also

### Managing a shadow

- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.
- [shadowColor](shadowcolor.md): The color of the shadow.

# shadowOffset (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The shadow’s relative position, which you specify with horizontal and vertical offset values.

## Declaration

```objectivec
@property CGSize shadowOffset;
```

<a id="Discussion"></a>

## Discussion

This property contains the horizontal and vertical offset values that you specify using the `width` and `height` fields of the `CGSize` or `NSSize` data type. These offsets use the default user coordinate space and are not affected by custom transformations. Positive offset values extend down and to the right from the user’s perspective.

> **Note**

>  In macOS 10.15 and earlier, if you add a shadow to a layer that has a different graphics context, then positive offset values might extend up and to the right from the user’s perspective, instead of down and to the right as usual.

## See Also

### Managing a shadow

- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.
- [shadowColor](shadowcolor.md): The color of the shadow.
