> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopydescriptionstring(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopydescriptionstring(_:))

# ColorSyncProfileCopyDescriptionString(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the localized description string of a profile.

## Declaration

```swift
func ColorSyncProfileCopyDescriptionString(_ prof: ColorSyncProfile!) -> Unmanaged<CFString>?
```

## Parameters

- `prof`: The profile to copy the description string from.

<a id="return-value"></a>

## Return Value

The profile description, localized to the current locale.

## See Also

### Reading profile data

- [ColorSyncProfileCopyHeader(\_:)](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL(\_:\_:)](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID()](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.

# ColorSyncProfileCopyDescriptionString (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the localized description string of a profile.

## Declaration

```objectivec
extern CFStringRefColorSyncProfileCopyDescriptionString(ColorSyncProfileRef prof);
```

## Parameters

- `prof`: The profile to copy the description string from.

<a id="return-value"></a>

## Return Value

The profile description, localized to the current locale.

## See Also

### Reading profile data

- [ColorSyncProfileCopyHeader](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
- [ColorSyncProfileGetTypeID](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.
