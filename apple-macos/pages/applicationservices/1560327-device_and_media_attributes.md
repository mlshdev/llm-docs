> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560327-device_and_media_attributes](https://developer.apple.com/documentation/applicationservices/1560327-device_and_media_attributes)

# Device and Media Attributes

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Used to set or obtain device or media attributes.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmReflective](1560327-device_and_media_attributes/cmreflective.md): If the bit 0 of the associated mask is `0` then reflective media; if `1` then transparency media.
- [cmGlossy](1560327-device_and_media_attributes/cmglossy.md): If the bit 1 of the associated mask is `0` then glossy; if `1` then matte.
