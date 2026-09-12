> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560278-x_profiles](https://developer.apple.com/documentation/applicationservices/1560278-x_profiles)

# Rendering Intent Values for Version 2.x Profiles

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Define the four possible values for the rendering intent bits of the `renderingIntent` field of the `CM2Header` structure.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmPerceptual](1560278-x_profiles/cmperceptual.md): All the colors of a given gamut can be scaled to fit within another gamut. This intent is best suited to realistic images, such as photographic images.
- [cmRelativeColorimetric](1560278-x_profiles/cmrelativecolorimetric.md): The colors that fall within the gamuts of both devices are left unchanged. This intent is best suited to logo images.
- [cmSaturation](1560278-x_profiles/cmsaturation.md): The relative saturation of colors is maintained from gamut to gamut. This intent is best suited to bar graphs and pie charts in which the actual color displayed is less important than its vividness.
- [cmAbsoluteColorimetric](1560278-x_profiles/cmabsolutecolorimetric.md): This approach is based on a device-independent color space in which the result is an idealized print viewed on an ideal type of paper having a large dynamic range and color gamut.
