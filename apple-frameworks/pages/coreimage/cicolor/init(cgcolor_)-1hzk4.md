> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/init(cgcolor:)-1hzk4](https://developer.apple.com/documentation/coreimage/cicolor/init(cgcolor:)-1hzk4)

# init(cgColor:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image color object with a Core Graphics color object.

## Declaration

```swift
init(cgColor color: CGColor)
```

<a id="return-value"></a>

## Return Value

 An initialized [CIColor](../cicolor.md) instance.

## See Also

### Initializing Color Objects

- [init(color:)](init%28color_%29.md)
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.

# initWithCGColor: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Create a Core Image color object with a Core Graphics color object.

## Declaration

```objectivec
- (instancetype) initWithCGColor:(CGColorRef) color;
```

<a id="return-value"></a>

## Return Value

 An initialized [CIColor](../cicolor.md) instance.

## See Also

### Initializing Color Objects

- [initWithColor:](init%28color_%29.md)
- [initWithRed:green:blue:](initwithred_green_blue_.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [initWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
