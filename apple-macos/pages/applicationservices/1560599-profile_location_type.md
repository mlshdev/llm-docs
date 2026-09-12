> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1560599-profile_location_type](https://developer.apple.com/documentation/applicationservices/1560599-profile_location_type)

# Profile Location Type

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

Defines profile location kinds.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmNoProfileBase](1560599-profile_location_type/cmnoprofilebase.md): The profile is temporary. It will not persist in memory after its use for a color session. You can specify this type of profile location with the `CMNewProfile` and the `CMCopyProfile` functions.
- [cmPathBasedProfile](1560599-profile_location_type/cmpathbasedprofile.md)
- [cmBufferBasedProfile](1560599-profile_location_type/cmbufferbasedprofile.md)
