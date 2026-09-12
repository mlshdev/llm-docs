> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecontainstag(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecontainstag(_:_:))

# ColorSyncProfileContainsTag(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether a profile contains a given tag.

## Declaration

```swift
func ColorSyncProfileContainsTag(_ prof: ColorSyncProfile!, _ signature: CFString!) -> Bool
```

## Parameters

- `prof`: The profile in which to search for the tag.
- `signature`: The signature of the tag to search for.

<a id="return-value"></a>

## Return Value

`true` if the tag exists; otherwise, `false`.

## See Also

### Managing tags and the header

- [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures(\_:)](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag(\_:\_:)](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag(\_:\_:\_:)](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

# ColorSyncProfileContainsTag (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether a profile contains a given tag.

## Declaration

```objectivec
extern bool ColorSyncProfileContainsTag(ColorSyncProfileRef prof, CFStringRef signature);
```

## Parameters

- `prof`: The profile in which to search for the tag.
- `signature`: The signature of the tag to search for.

<a id="return-value"></a>

## Return Value

`true` if the tag exists; otherwise, `false`.

## See Also

### Managing tags and the header

- [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileCopyTagSignatures](colorsyncprofilecopytagsignatures%28__%29.md): Copies the tag signatures of a profile.
- [ColorSyncProfileRemoveTag](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.
