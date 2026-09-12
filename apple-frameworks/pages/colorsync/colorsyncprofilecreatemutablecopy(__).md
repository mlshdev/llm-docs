> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatemutablecopy(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatemutablecopy(_:))

# ColorSyncProfileCreateMutableCopy(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a mutable copy of a profile.

## Declaration

```swift
func ColorSyncProfileCreateMutableCopy(_ prof: ColorSyncProfile!) -> Unmanaged<ColorSyncMutableProfile>?
```

## Parameters

- `prof`: The profile whose data the function copies into the new mutable profile.

<a id="return-value"></a>

## Return Value

A new mutable profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName(\_:)](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:)](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable()](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.

# ColorSyncProfileCreateMutableCopy (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a mutable copy of a profile.

## Declaration

```objectivec
extern ColorSyncMutableProfileRefColorSyncProfileCreateMutableCopy(ColorSyncProfileRef prof);
```

## Parameters

- `prof`: The profile whose data the function copies into the new mutable profile.

<a id="return-value"></a>

## Return Value

A new mutable profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
