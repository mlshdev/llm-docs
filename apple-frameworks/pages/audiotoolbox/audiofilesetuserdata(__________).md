> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilesetuserdata(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilesetuserdata(_:_:_:_:_:))

# AudioFileSetUserData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets a user data item in an audio file.

## Declaration

```swift
func AudioFileSetUserData(_ inAudioFile: AudioFileID, _ inUserDataID: UInt32, _ inIndex: UInt32, _ inUserDataSize: UInt32, _ inUserData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file that you want to set a user data item in.
- `inUserDataID`: The four-character code for the user data item.
- `inIndex`: An index specifying the user data item you want to set. You use this parameter if the file contains more than one user data item with the four-character code specified in the `inUserDataID` parameter.
- `inUserDataSize`: On input, the size of the data to copy. On output, the size of the bytes copied from the buffer.
- `inUserData`: A pointer to a buffer from which to copy the user data.

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
- [AudioFileRemoveUserData(\_:\_:\_:)](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

# AudioFileSetUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Sets a user data item in an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileSetUserData(AudioFileID inAudioFile, UInt32 inUserDataID, UInt32 inIndex, UInt32 inUserDataSize, const void *inUserData);
```

## Parameters

- `inAudioFile`: The audio file that you want to set a user data item in.
- `inUserDataID`: The four-character code for the user data item.
- `inIndex`: An index specifying the user data item you want to set. You use this parameter if the file contains more than one user data item with the four-character code specified in the `inUserDataID` parameter.
- `inUserDataSize`: On input, the size of the data to copy. On output, the size of the bytes copied from the buffer.
- `inUserData`: A pointer to a buffer from which to copy the user data.

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
- [AudioFileRemoveUserData](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.
