> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopytag(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopytag(_:_:))

# ColorSyncProfileCopyTag(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies a tag from a profile.

## Declaration

```swift
func ColorSyncProfileCopyTag(_ prof: ColorSyncProfile!, _ signature: CFString!) -> Unmanaged<CFData>?
```

## Parameters

- `prof`: The profile to copy the tag from.
- `signature`: The signature of the tag to copy.

<a id="return-value"></a>

## Return Value

The tag data, or `NULL` in case of failure.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTagSignatures(\_:)](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag(\_:\_:)](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag(\_:\_:\_:)](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

# ColorSyncProfileCopyTag (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies a tag from a profile.

## Declaration

```objectivec
extern CFDataRefColorSyncProfileCopyTag(ColorSyncProfileRef prof, CFStringRef signature);
```

## Parameters

- `prof`: The profile to copy the tag from.
- `signature`: The signature of the tag to copy.

<a id="return-value"></a>

## Return Value

The tag data, or `NULL` in case of failure.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTagSignatures](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.
