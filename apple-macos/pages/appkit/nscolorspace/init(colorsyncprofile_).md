> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/init(colorsyncprofile:)](https://developer.apple.com/documentation/appkit/nscolorspace/init(colorsyncprofile:))

# init(colorSyncProfile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a color space object from the specified ColorSync profile.

## Declaration

```swift
init?(colorSyncProfile prof: UnsafeMutableRawPointer)
```

## Parameters

- `prof`: The ColorSync profile to use when initializing the `NSColorSpace` object. This should be an object of opaque type CMProfileRef. See [ColorSync Manager](../../applicationservices/colorsync_manager.md) for further information on CMProfileRef.

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful.

## See Also

### Related Documentation

- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.

### Initializing a Custom Color Space Object

- [init(cgColorSpace:)](init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [init(iccProfileData:)](init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.

# initWithColorSyncProfile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a color space object from the specified ColorSync profile.

## Declaration

```objectivec
- (instancetype) initWithColorSyncProfile:(void *) prof;
```

## Parameters

- `prof`: The ColorSync profile to use when initializing the `NSColorSpace` object. This should be an object of opaque type CMProfileRef. See [ColorSync Manager](../../applicationservices/colorsync_manager.md) for further information on CMProfileRef.

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful.

## See Also

### Related Documentation

- [colorSyncProfile](colorsyncprofile.md): The ColorSync profile from which the color space was created.

### Initializing a Custom Color Space Object

- [initWithCGColorSpace:](init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [initWithICCProfileData:](init%28iccprofiledata_%29-8rl9d.md): Initializes and returns a color space object from the specified ICC profile.
