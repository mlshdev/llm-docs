> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofileremoveuserdata(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofileremoveuserdata(_:_:_:))

# AudioFileRemoveUserData(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Removes a user data item from an audio file.

## Declaration

```swift
func AudioFileRemoveUserData(_ inAudioFile: AudioFileID, _ inUserDataID: UInt32, _ inIndex: UInt32) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file that contains the user data item you want to remove.
- `inUserDataID`: The four-character code such as `COMM` of the user data item.
- `inIndex`: An index specifying the chunk to remove. Use this parameter if the file contains more than one user data item with the four-character code that you specified in the `inUserDataID` parameter.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

## See Also

### Working with User Data

- [AudioFileCountUserData(\_:\_:\_:)](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize(\_:\_:\_:\_:)](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData(\_:\_:\_:\_:\_:)](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData(\_:\_:\_:\_:\_:)](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.

# AudioFileRemoveUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Removes a user data item from an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileRemoveUserData(AudioFileID inAudioFile, UInt32 inUserDataID, UInt32 inIndex);
```

## Parameters

- `inAudioFile`: The audio file that contains the user data item you want to remove.
- `inUserDataID`: The four-character code such as `COMM` of the user data item.
- `inIndex`: An index specifying the chunk to remove. Use this parameter if the file contains more than one user data item with the four-character code that you specified in the `inUserDataID` parameter.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

## See Also

### Working with User Data

- [AudioFileCountUserData](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
