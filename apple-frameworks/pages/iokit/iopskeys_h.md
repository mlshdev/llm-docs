> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopskeys_h](https://developer.apple.com/documentation/iokit/iopskeys_h)

# IOPSKeys.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

IOPSKeys.h defines C strings for use accessing power source data in IOPowerSource CFDictionaries, as returned by [IOPSGetPowerSourceDescription](1523867-iopsgetpowersourcedescription.md) Note that all of these C strings must be converted to CFStrings before use. You can wrap them with the CFSTR() macro, or create a CFStringRef (that you must later CFRelease()) using CFStringCreateWithCString().

## Topics

### Constants

- [Defines](iopskeys_h/defines.md)
