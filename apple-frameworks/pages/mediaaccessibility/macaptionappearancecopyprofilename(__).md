> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearancecopyprofilename(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearancecopyprofilename(_:))

# MACaptionAppearanceCopyProfileName(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func MACaptionAppearanceCopyProfileName(_ profileID: CFString) -> CFString
```

## Parameters

- `profileID`: The profileID to copy the name of

<a id="return-value"></a>

## Return Value

A human-readable name of the provided profileID

<a id="discussion"></a>

## Discussion

Copies the human-readable name of a profileID

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs()](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID(\_:)](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID()](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID(\_:\_:)](macaptionappearanceexecuteblockforprofileid%28____%29.md)

# MACaptionAppearanceCopyProfileName (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern CFStringRefMACaptionAppearanceCopyProfileName(CFStringRef profileID);
```

## Parameters

- `profileID`: The profileID to copy the name of

<a id="return-value"></a>

## Return Value

A human-readable name of the provided profileID

<a id="discussion"></a>

## Discussion

Copies the human-readable name of a profileID

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceExecuteBlockForProfileID](macaptionappearanceexecuteblockforprofileid%28____%29.md)
