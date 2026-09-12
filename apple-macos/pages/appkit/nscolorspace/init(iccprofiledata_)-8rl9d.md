> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorspace/init(iccprofiledata:)-8rl9d](https://developer.apple.com/documentation/appkit/nscolorspace/init(iccprofiledata:)-8rl9d)

# init(iccProfileData:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns a color space object from the specified ICC profile.

## Declaration

```swift
init?(iccProfileData iccData: Data)
```

## Parameters

- `iccData`: The ICC profile to use when initializing the `NSColorSpace` object. For information on ICC profiles, see the latest ICC specification at the [International Color Consortium website](http://www.color.org/icc_specs2.html) website.

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful.

## See Also

### Related Documentation

- [iccProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.

### Initializing a Custom Color Space Object

- [init(cgColorSpace:)](init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [init(colorSyncProfile:)](init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.

# initWithICCProfileData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns a color space object from the specified ICC profile.

## Declaration

```objectivec
- (instancetype) initWithICCProfileData:(NSData *) iccData;
```

## Parameters

- `iccData`: The ICC profile to use when initializing the `NSColorSpace` object. For information on ICC profiles, see the latest ICC specification at the [International Color Consortium website](http://www.color.org/icc_specs2.html) website.

<a id="return-value"></a>

## Return Value

The initialized `NSColorSpace` object or `nil` if initialization was not successful.

## See Also

### Related Documentation

- [ICCProfileData](iccprofiledata.md): The ICC profile data from which the color space was created.

### Initializing a Custom Color Space Object

- [initWithCGColorSpace:](init%28cgcolorspace_%29-889nv.md): Initializes and returns a color space object initialized from a Core Graphics color-space object.
- [initWithColorSyncProfile:](init%28colorsyncprofile_%29.md): Initializes and returns a color space object from the specified ColorSync profile.
