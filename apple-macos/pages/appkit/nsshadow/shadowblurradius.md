> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsshadow/shadowblurradius](https://developer.apple.com/documentation/appkit/nsshadow/shadowblurradius)

# shadowBlurRadius (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The blur radius of the shadow.

## Declaration

```swift
var shadowBlurRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains the shadow’s blur radius, as measured in the default user coordinate space. A value of `0` produces no blur, while larger values produce an increasingly large blurred shadow. This value must not be negative. The default value is `0`.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowColor](shadowcolor.md): The color of the shadow.

# shadowBlurRadius (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

The blur radius of the shadow.

## Declaration

```objectivec
@property CGFloat shadowBlurRadius;
```

<a id="Discussion"></a>

## Discussion

This property contains the shadow’s blur radius, as measured in the default user coordinate space. A value of `0` produces no blur, while larger values produce an increasingly large blurred shadow. This value must not be negative. The default value is `0`.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowColor](shadowcolor.md): The color of the shadow.
