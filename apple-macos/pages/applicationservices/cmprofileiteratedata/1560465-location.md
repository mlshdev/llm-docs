> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmprofileiteratedata/1560465-location](https://developer.apple.com/documentation/applicationservices/cmprofileiteratedata/1560465-location)

# location

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 10.6)

A structure specifying the profile location. With ColorSync 2.5, the location is always file-based, but that may not be true for future versions. Your code should always verify that the location structure contains a file specification before attempting to use it.

## Declaration

```objectivec
CMProfileLocation location;
```
