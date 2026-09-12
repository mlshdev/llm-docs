> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynccustomprofiles](https://developer.apple.com/documentation/colorsync/kcolorsynccustomprofiles)

# kColorSyncCustomProfiles (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A key whose value is a `CFDictionary` describing the device’s custom profiles.

## Declaration

```swift
var kColorSyncCustomProfiles: Unmanaged<CFString>!
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

# kColorSyncCustomProfiles (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key whose value is a `CFDictionary` describing the device’s custom profiles.

## Declaration

```objectivec
extern CFStringRef kColorSyncCustomProfiles;
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.
