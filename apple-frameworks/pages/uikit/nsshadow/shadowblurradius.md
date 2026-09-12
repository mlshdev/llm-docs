> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsshadow/shadowblurradius](https://developer.apple.com/documentation/uikit/nsshadow/shadowblurradius)

# shadowBlurRadius (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The blur radius of the shadow.

## Declaration

```objectivec
@property (nonatomic) CGFloat shadowBlurRadius;
```

<a id="Discussion"></a>

## Discussion

This property contains the shadow’s blur radius, as measured in the default user coordinate space. A value of `0` produces no blur, while larger values produce an increasingly large blurred shadow. This value must not be negative. The default value is `0`.

## See Also

### Managing a shadow

- [shadowOffset](shadowoffset.md): The shadow’s relative position, which you specify with horizontal and vertical offset values.
- [shadowColor](shadowcolor.md): The color of the shadow.
