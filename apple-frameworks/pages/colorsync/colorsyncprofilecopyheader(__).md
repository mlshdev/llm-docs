> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopyheader(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopyheader(_:))

# ColorSyncProfileCopyHeader(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the header from a profile.

## Declaration

```swift
func ColorSyncProfileCopyHeader(_ prof: ColorSyncProfile!) -> Unmanaged<CFData>!
```

## Parameters

- `prof`: The profile to copy the header from.

<a id="return-value"></a>

## Return Value

The profile header (in host endianness), or `NULL` in case of failure.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString(\_:)](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileGetURL(\_:\_:)](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID()](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.

# ColorSyncProfileCopyHeader (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the header from a profile.

## Declaration

```objectivec
extern CFDataRefColorSyncProfileCopyHeader(ColorSyncProfileRef prof);
```

## Parameters

- `prof`: The profile to copy the header from.

<a id="return-value"></a>

## Return Value

The profile header (in host endianness), or `NULL` in case of failure.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileGetURL](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.
