> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecopytagsignatures(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecopytagsignatures(_:))

# ColorSyncProfileCopyTagSignatures(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the tag signatures of a profile.

## Declaration

```swift
func ColorSyncProfileCopyTagSignatures(_ prof: ColorSyncProfile!) -> Unmanaged<CFArray>?
```

## Parameters

- `prof`: The profile to copy tag signatures from.

<a id="return-value"></a>

## Return Value

An array with the signatures (`CFStringRef`) of the tags in the profile.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag(\_:\_:)](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag(\_:\_:)](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileRemoveTag(\_:\_:)](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader(\_:\_:)](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag(\_:\_:\_:)](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.

# ColorSyncProfileCopyTagSignatures (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Copies the tag signatures of a profile.

## Declaration

```objectivec
extern CFArrayRefColorSyncProfileCopyTagSignatures(ColorSyncProfileRef prof);
```

## Parameters

- `prof`: The profile to copy tag signatures from.

<a id="return-value"></a>

## Return Value

An array with the signatures (`CFStringRef`) of the tags in the profile.

## See Also

### Managing tags and the header

- [ColorSyncProfileContainsTag](colorsyncprofilecontainstag%28____%29.md): Returns a Boolean value indicating whether a profile contains a given tag.
- [ColorSyncProfileCopyTag](colorsyncprofilecopytag%28____%29.md): Copies a tag from a profile.
- [ColorSyncProfileRemoveTag](colorsyncprofileremovetag%28____%29.md): Removes a tag from a mutable profile.
- [ColorSyncProfileSetHeader](colorsyncprofilesetheader%28____%29.md): Sets the header of a mutable profile.
- [ColorSyncProfileSetTag](colorsyncprofilesettag%28______%29.md): Sets a tag in a mutable profile.
