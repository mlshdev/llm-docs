> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cm2header/1560282-renderingintent

# renderingIntent

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

The preferred rendering intent for the object or file tagged with this profile. Four types of rendering intent are defined: perceptual, relative colorimetric, saturation, and absolute colorimetric. The `renderingIntent` field consists of an unsigned long data type. The low word is reserved by the ICC and is used to set the rendering intent. The high word is available for use. For information on how the bits in `renderingIntent` are defined and how your application can set and test them, see [Rendering Intent Values for Version 2.x Profiles](../1560278-x_profiles.md).

## Declaration

```objectivec
UInt32 renderingIntent;
```
