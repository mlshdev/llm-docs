> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilesettag(_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilesettag(_:_:_:))

# ColorSyncProfileSetTag(\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a tag in a mutable profile.

## Declaration

```swift
func ColorSyncProfileSetTag(_ prof: ColorSyncMutableProfile!, _ signature: CFString!, _ data: CFData!)
```

## Parameters

- `prof`: The profile in which to set the tag.
- `signature`: The signature of the tag to set in the profile.
- `data`: The tag data.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures(\_:)](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag(\_:\_:)](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.

# ColorSyncProfileSetTag (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Sets a tag in a mutable profile.

## Declaration

```objectivec
extern void ColorSyncProfileSetTag(ColorSyncMutableProfileRef prof, CFStringRef signature, CFDataRef data);
```

## Parameters

- `prof`: The profile in which to set the tag.
- `signature`: The signature of the tag to set in the profile.
- `data`: The tag data.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
