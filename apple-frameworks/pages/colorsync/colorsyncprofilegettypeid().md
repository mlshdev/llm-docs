> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilegettypeid()](https://developer.apple.com/documentation/colorsync/colorsyncprofilegettypeid())

# ColorSyncProfileGetTypeID() (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the unique identifier for the ColorSync profile opaque type.

## Declaration

```swift
func ColorSyncProfileGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The `CFTypeID` for `ColorSyncProfile` objects.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString(\_:)](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader(\_:)](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL(\_:\_:)](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.

# ColorSyncProfileGetTypeID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the unique identifier for the ColorSync profile opaque type.

## Declaration

```objectivec
extern CFTypeID ColorSyncProfileGetTypeID();
```

<a id="return-value"></a>

## Return Value

The `CFTypeID` for `ColorSyncProfile` objects.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetURL](colorsyncprofilegeturl%28____%29.md): Returns the URL of a profile.
