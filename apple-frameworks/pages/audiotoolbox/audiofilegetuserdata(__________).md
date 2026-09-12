> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetuserdata(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetuserdata(_:_:_:_:_:))

# AudioFileGetUserData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets a chunk from an audio file.

## Declaration

```swift
func AudioFileGetUserData(_ inAudioFile: AudioFileID, _ inUserDataID: UInt32, _ inIndex: UInt32, _ ioUserDataSize: UnsafeMutablePointer<UInt32>, _ outUserData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file whose chunk you want to get.
- `inUserDataID`: The four-character code of the designated chunk.
- `inIndex`: An index that specifies which chunk with the four-character code specified in the `inUserDataID` parameter you want to query.
- `ioUserDataSize`: On input, a pointer to the size of the buffer that contains the designated chunk. On output, a pointer to the size of bytes that the system copied to the buffer.
- `outUserData`: A pointer to a buffer in which to copy the chunk data.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

## See Also

### Working with User Data

- [AudioFileCountUserData(\_:\_:\_:)](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize(\_:\_:\_:\_:)](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData(\_:\_:\_:\_:\_:)](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData(\_:\_:\_:)](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

# AudioFileGetUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets a chunk from an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileGetUserData(AudioFileID inAudioFile, UInt32 inUserDataID, UInt32 inIndex, UInt32 *ioUserDataSize, void *outUserData);
```

## Parameters

- `inAudioFile`: The audio file whose chunk you want to get.
- `inUserDataID`: The four-character code of the designated chunk.
- `inIndex`: An index that specifies which chunk with the four-character code specified in the `inUserDataID` parameter you want to query.
- `ioUserDataSize`: On input, a pointer to the size of the buffer that contains the designated chunk. On output, a pointer to the size of bytes that the system copied to the buffer.
- `outUserData`: A pointer to a buffer in which to copy the chunk data.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

## See Also

### Working with User Data

- [AudioFileCountUserData](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataAtOffset](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.
