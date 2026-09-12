> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatemutable()](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatemutable())

# ColorSyncProfileCreateMutable() (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an empty mutable profile.

## Declaration

```swift
func ColorSyncProfileCreateMutable() -> Unmanaged<ColorSyncMutableProfile>?
```

<a id="return-value"></a>

## Return Value

An empty mutable profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName(\_:)](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:)](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutableCopy(\_:)](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

# ColorSyncProfileCreateMutable (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates an empty mutable profile.

## Declaration

```objectivec
extern ColorSyncMutableProfileRefColorSyncProfileCreateMutable();
```

<a id="return-value"></a>

## Return Value

An empty mutable profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithName](colorsyncprofilecreatewithname%28__%29.md): Creates a profile from a predefined profile name.
- [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutableCopy](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.
