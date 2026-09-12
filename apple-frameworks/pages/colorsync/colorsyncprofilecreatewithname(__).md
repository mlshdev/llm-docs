> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatewithname(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatewithname(_:))

# ColorSyncProfileCreateWithName(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from a predefined profile name.

## Declaration

```swift
func ColorSyncProfileCreateWithName(_ name: CFString!) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `name`: The predefined profile name.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithURL(\_:\_:)](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions(\_:\_:\_:)](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable()](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy(\_:)](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.

# ColorSyncProfileCreateWithName (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a profile from a predefined profile name.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateWithName(CFStringRef name);
```

## Parameters

- `name`: The predefined profile name.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Creating a profile

- [ColorSyncProfileCreateWithURL](colorsyncprofilecreatewithurl%28____%29.md): Creates a profile from ICC profile data at a URL.
- [ColorSyncProfileCreateWithURLAndOptions](colorsyncprofilecreatewithurlandoptions%28______%29.md): Creates a profile from ICC profile data at a URL, using the given options.
- [ColorSyncProfileCreateMutable](colorsyncprofilecreatemutable%28%29.md): Creates an empty mutable profile.
- [ColorSyncProfileCreateMutableCopy](colorsyncprofilecreatemutablecopy%28__%29.md): Creates a mutable copy of a profile.
