> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopyprofileids()](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopyprofileids())

# MACaptionAppearanceCopyProfileIDs() (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func MACaptionAppearanceCopyProfileIDs() -> CFArray
```

<a id="return-value"></a>

## Return Value

An array of strings where each string represents a unique caption profile ID.

<a id="discussion"></a>

## Discussion

Copies all system and user defined profiles, each represented by a CFString containing a non-human-readable ID

## See Also

### Profile settings

- [MACaptionAppearanceSetActiveProfileID(\_:)](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID()](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName(\_:)](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID(\_:\_:)](macaptionappearanceexecuteblockforprofileid%28____%29.md)

# MACaptionAppearanceCopyProfileIDs (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFArrayRefMACaptionAppearanceCopyProfileIDs();
```

<a id="return-value"></a>

## Return Value

An array of strings where each string represents a unique caption profile ID.

<a id="discussion"></a>

## Discussion

Copies all system and user defined profiles, each represented by a CFString containing a non-human-readable ID

## See Also

### Profile settings

- [MACaptionAppearanceSetActiveProfileID](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID](macaptionappearanceexecuteblockforprofileid%28____%29.md)
