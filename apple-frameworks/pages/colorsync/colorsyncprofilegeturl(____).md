> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilegeturl(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilegeturl(_:_:))

# ColorSyncProfileGetURL(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the URL of a profile.

## Declaration

```swift
func ColorSyncProfileGetURL(_ prof: ColorSyncProfile!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFURL>!
```

## Parameters

- `prof`: The profile to get the URL from.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

The profile’s URL on success, or `NULL` in case of failure.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString(\_:)](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader(\_:)](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetTypeID()](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.

# ColorSyncProfileGetURL (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the URL of a profile.

## Declaration

```objectivec
extern CFURLRefColorSyncProfileGetURL(ColorSyncProfileRef prof, CFErrorRef*error);
```

## Parameters

- `prof`: The profile to get the URL from.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

The profile’s URL on success, or `NULL` in case of failure.

## See Also

### Reading profile data

- [ColorSyncProfileCopyDescriptionString](colorsyncprofilecopydescriptionstring%28__%29.md): Copies the localized description string of a profile.
- [ColorSyncProfileCopyHeader](colorsyncprofilecopyheader%28__%29.md): Copies the header from a profile.
- [ColorSyncProfileGetTypeID](colorsyncprofilegettypeid%28%29.md): Returns the unique identifier for the ColorSync profile opaque type.
