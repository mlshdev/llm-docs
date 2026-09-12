> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatewithurl(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatewithurl(_:_:))

# ColorSyncProfileCreateWithURL(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from ICC profile data at a URL.

## Declaration

```swift
func ColorSyncProfileCreateWithURL(_ url: CFURL!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `url`: The URL to the profile data.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName(\_:)](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:)](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable()](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy(\_:)](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

# ColorSyncProfileCreateWithURL (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from ICC profile data at a URL.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateWithURL(CFURLRef url, CFErrorRef*error);
```

## Parameters

- `url`: The URL to the profile data.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURLAndOptions](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.
