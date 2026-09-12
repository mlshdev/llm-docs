> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncfactoryprofiles](https://developer.apple.com/documentation/colorsync/kcolorsyncfactoryprofiles)

# kColorSyncFactoryProfiles (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A key whose value is a `CFDictionary` describing the device’s factory profiles.

## Declaration

```swift
var kColorSyncFactoryProfiles: Unmanaged<CFString>!
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

# kColorSyncFactoryProfiles (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A key whose value is a `CFDictionary` describing the device’s factory profiles.

## Declaration

```objectivec
extern CFStringRef kColorSyncFactoryProfiles;
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md): An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.
