> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearanceexecuteblockforprofileid(_:_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearanceexecuteblockforprofileid(_:_:))

# MACaptionAppearanceExecuteBlockForProfileID(\_:\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
func MACaptionAppearanceExecuteBlockForProfileID(_ profileID: CFString, _ aBlock: @escaping () -> Void)
```

## Parameters

- `profileID`: The profileID which will appear active when executing the block
- `aBlock`: The block of code to execute

<a id="discussion"></a>

## Discussion

Executes a block of code as if the provided profileID was active. This is used in cases such as a need to get the fonts and colors of a profileID without changing the currently selected profileID.

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs()](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID(\_:)](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID()](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName(\_:)](macaptionappearancecopyprofilename%28__%29.md)

# MACaptionAppearanceExecuteBlockForProfileID (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
extern void MACaptionAppearanceExecuteBlockForProfileID(CFStringRef profileID, void (^aBlock)());
```

## Parameters

- `profileID`: The profileID which will appear active when executing the block
- `aBlock`: The block of code to execute

<a id="discussion"></a>

## Discussion

Executes a block of code as if the provided profileID was active. This is used in cases such as a need to get the fonts and colors of a profileID without changing the currently selected profileID.

## See Also

### Profile settings

- [MACaptionAppearanceCopyProfileIDs](macaptionappearancecopyprofileids%28%29.md)
- [MACaptionAppearanceSetActiveProfileID](macaptionappearancesetactiveprofileid%28__%29.md)
- [MACaptionAppearanceCopyActiveProfileID](macaptionappearancecopyactiveprofileid%28%29.md)
- [MACaptionAppearanceCopyProfileName](macaptionappearancecopyprofilename%28__%29.md)
