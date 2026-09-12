> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileiteratecallback](https://developer.apple.com/documentation/colorsync/colorsyncprofileiteratecallback)

# ColorSyncProfileIterateCallback (Swift)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A callback that the framework invokes for each installed profile during iteration.

## Declaration

```swift
typealias ColorSyncProfileIterateCallback = (CFDictionary?, UnsafeMutableRawPointer?) -> Bool
```

## Parameters

- `profileInfo`: A dictionary describing the profile.
- `userInfo`: The user info passed to the iteration function.

<a id="discussion"></a>

## Discussion

The framework passes only validated profiles to the callback. Return `false` to stop the iteration.

## See Also

### Finding installed profiles

- [ColorSyncIterateInstalledProfiles(\_:\_:\_:\_:)](colorsynciterateinstalledprofiles%28________%29.md): Iterates over the installed profiles.

# ColorSyncProfileIterateCallback (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A callback that the framework invokes for each installed profile during iteration.

## Declaration

```objectivec
typedef _Bool (*)(const struct __CFDictionary *, void *) ColorSyncProfileIterateCallback;
```

## Parameters

- `profileInfo`: A dictionary describing the profile.
- `userInfo`: The user info passed to the iteration function.

<a id="discussion"></a>

## Discussion

The framework passes only validated profiles to the callback. Return `false` to stop the iteration.

## See Also

### Finding installed profiles

- [ColorSyncIterateInstalledProfiles](colorsynciterateinstalledprofiles%28________%29.md): Iterates over the installed profiles.
