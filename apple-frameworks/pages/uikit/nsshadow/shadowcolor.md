> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsshadow/shadowcolor](https://developer.apple.com/documentation/uikit/nsshadow/shadowcolor)

# shadowColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color of the shadow.

## Declaration

```swift
var shadowColor: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

The default shadow color is black with an alpha of 1/3. If you set this property to `nil`, the shadow is not drawn. The color you specify must be convertible to an RGBA color and may contain alpha information.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.

# shadowColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The color of the shadow.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) id shadowColor;
```

<a id="Discussion"></a>

## Discussion

The default shadow color is black with an alpha of 1/3. If you set this property to `nil`, the shadow is not drawn. The color you specify must be convertible to an RGBA color and may contain alpha information.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowBlurRadius](shadowblurradius.md): The blur radius of the shadow.
