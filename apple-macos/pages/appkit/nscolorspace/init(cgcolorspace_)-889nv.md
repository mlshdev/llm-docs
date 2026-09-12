> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/init(cgcolorspace:)-889nv](https://developer.apple.com/documentation/appkit/nscolorspace/init(cgcolorspace:)-889nv)

# init(cgColorSpace:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes and returns a color space object initialized from a Core Graphics color-space object.

## Declaration

```swift
init?(cgColorSpace: CGColorSpace)
```

## Parameters

- `cgColorSpace`: A reference to a Core Graphics color-space object ([CGColorSpace](https://developer.apple.com/documentation/coregraphics/cgcolorspace)).

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful, which might happen if the color space represented by the `CGColorSpace` object is not supported by `NSColorSpace`.

<a id="Discussion"></a>

## Discussion

Because `NSColorSpace` might retain or copy the `CGColorSpace` object depending on circumstances, you should not assume pointer equality of the provided object with that returned by [cgColorSpace](cgcolorspace.md). And even if the pointer equality is preserved during runtime, it may not be after the `NSColorSpace` object is archived and unarchived.

## See Also

### Initializing a Custom Color Space Object

- [init(colorSyncProfile:)](init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.
- [init(iccProfileData:)](init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.

# initWithCGColorSpace: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes and returns a color space object initialized from a Core Graphics color-space object.

## Declaration

```objectivec
- (instancetype) initWithCGColorSpace:(CGColorSpaceRef) cgColorSpace;
```

## Parameters

- `cgColorSpace`: A reference to a Core Graphics color-space object ([CGColorSpaceRef](https://developer.apple.com/documentation/coregraphics/cgcolorspace)).

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful, which might happen if the color space represented by the `CGColorSpace` object is not supported by `NSColorSpace`.

<a id="Discussion"></a>

## Discussion

Because `NSColorSpace` might retain or copy the `CGColorSpace` object depending on circumstances, you should not assume pointer equality of the provided object with that returned by [CGColorSpace](cgcolorspace.md). And even if the pointer equality is preserved during runtime, it may not be after the `NSColorSpace` object is archived and unarchived.

## See Also

### Initializing a Custom Color Space Object

- [initWithColorSyncProfile:](init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.
- [initWithICCProfileData:](init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.
