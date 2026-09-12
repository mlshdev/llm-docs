> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancesetactiveprofileid(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancesetactiveprofileid(_:))

# MACaptionAppearanceSetActiveProfileID(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func MACaptionAppearanceSetActiveProfileID(_ profileID: CFString)
```

## Parameters

- `profileID`: The profileID to make active.

<a id="discussion"></a>

## Discussion

Sets the currently-selected caption drawing profileID system wide. Behavior is undefined if NULL or an invalid profileID is provided

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs()](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceCopyActiveProfileID()](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName(\_:)](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID(\_:\_:)](macaptionappearanceexecuteblockforprofileid%28____%29.md)

# MACaptionAppearanceSetActiveProfileID (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern void MACaptionAppearanceSetActiveProfileID(CFStringRef profileID);
```

## Parameters

- `profileID`: The profileID to make active.

<a id="discussion"></a>

## Discussion

Sets the currently-selected caption drawing profileID system wide. Behavior is undefined if NULL or an invalid profileID is provided

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceCopyActiveProfileID](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName](macaptionappearancecopyprofilename%28__%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID](macaptionappearanceexecuteblockforprofileid%28____%29.md)
