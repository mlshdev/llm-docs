> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncdonotsubstituteprofiles](https://developer.apple.com/documentation/colorsync/kcolorsyncdonotsubstituteprofiles)

# kColorSyncDoNotSubstituteProfiles (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

## Declaration

```swift
var kColorSyncDoNotSubstituteProfiles: Unmanaged<CFString>!
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.

# kColorSyncDoNotSubstituteProfiles (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.0+

An option that, when set to `kCFBooleanTrue`, skips substituting a matching system-provided profile.

## Declaration

```objectivec
extern CFStringRef kColorSyncDoNotSubstituteProfiles;
```

## See Also

### Accessing custom and factory profiles

- [kColorSyncCustomProfiles](kcolorsynccustomprofiles.md): A key whose value is a `CFDictionary` describing the device’s custom profiles.
- [kColorSyncFactoryProfiles](kcolorsyncfactoryprofiles.md): A key whose value is a `CFDictionary` describing the device’s factory profiles.
