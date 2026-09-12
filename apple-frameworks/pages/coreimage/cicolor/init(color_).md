> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor/init(color:)](https://developer.apple.com/documentation/coreimage/cicolor/init(color:))

# init(color:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS · tvOS · visionOS 1.0+

## Declaration

```swift
convenience init(color: UIColor)
```

```swift
convenience init?(color: NSColor)
```

## See Also

### Initializing Color Objects

- [init(cgColor:)](init%28cgcolor_%29-1hzk4.md): Create a Core Image color object with a Core Graphics color object.
- [init(red:green:blue:alpha:)](init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.

# initWithColor: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS · tvOS · visionOS 1.0+

## Declaration

```objectivec
- (instancetype) initWithColor:(UIColor *) color;
```

```objectivec
- (instancetype) initWithColor:(NSColor *) color;
```

## See Also

### Initializing Color Objects

- [initWithCGColor:](init%28cgcolor_%29-1hzk4.md): Create a Core Image color object with a Core Graphics color object.
- [initWithRed:green:blue:](initwithred_green_blue_.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [initWithRed:green:blue:alpha:](init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
