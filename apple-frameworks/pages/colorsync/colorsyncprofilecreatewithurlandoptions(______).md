> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatewithurlandoptions(_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatewithurlandoptions(_:_:_:))

# ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from ICC profile data at a URL, using the given options.

## Declaration

```swift
func ColorSyncProfileCreateWithURLAndOptions(_ url: CFURL!, _ options: CFDictionary?, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `url`: The URL to the profile data.
- `options`: A dictionary with creation options, for example [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md).
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName(\_:)](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateMutable()](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy(\_:)](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

# ColorSyncProfileCreateWithURLAndOptions (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 26.1+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.0+

Creates a profile from ICC profile data at a URL, using the given options.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateWithURLAndOptions(CFURLRef url, CFDictionaryRef options, CFErrorRef*error);
```

## Parameters

- `url`: The URL to the profile data.
- `options`: A dictionary with creation options, for example [kColorSyncDoNotSubstituteProfiles](kcolorsyncdonotsubstituteprofiles.md).
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateMutable](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.
