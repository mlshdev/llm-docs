> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileremovetag(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileremovetag(_:_:))

# ColorSyncProfileRemoveTag(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Removes a tag from a mutable profile.

## Declaration

```swift
func ColorSyncProfileRemoveTag(_ prof: ColorSyncMutableProfile!, _ signature: CFString!)
```

## Parameters

- `prof`: The profile to remove the tag from.
- `signature`: The signature of the tag to remove.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures(\_:)](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag(\_:\_:\_:)](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

# ColorSyncProfileRemoveTag (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Removes a tag from a mutable profile.

## Declaration

```objectivec
extern void ColorSyncProfileRemoveTag(ColorSyncMutableProfileRef prof, CFStringRef signature);
```

## Parameters

- `prof`: The profile to remove the tag from.
- `signature`: The signature of the tag to remove.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.
