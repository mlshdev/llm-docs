> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cm2header/1560387-deviceattributes](https://developer.apple.com/documentation/applicationservices/cm2header/1560387-deviceattributes)

# deviceAttributes

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Attributes that are unique to this particular device setup, such as media, paper, and ink types. The data type for this field is an array of two unsigned longs. The low word of `deviceAttributes[0]` is reserved by the ICC. The high word of `deviceAttributes[0]` and the entire word of `deviceAttributes[1]` are available for vendor use. For information on how the bits in `deviceAttributes` are defined and how your application can set and test them, see [Device Attribute Values for Version 2.x Profiles](../1560447-x_profiles.md).

## Declaration

```objectivec
UInt32 deviceAttributes[2];
```
