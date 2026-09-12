> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetuserdataatoffset(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetuserdataatoffset(_:_:_:_:_:_:))

# AudioFileGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Gets part of the data from a chunk in an audio file.

## Declaration

```swift
func AudioFileGetUserDataAtOffset(_ inAudioFile: AudioFileID, _ inUserDataID: UInt32, _ inIndex: UInt32, _ inOffset: Int64, _ ioUserDataSize: UnsafeMutablePointer<UInt32>, _ outUserData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file whose chunk you want to get data from.
- `inUserDataID`: The four-character code of the designated chunk.
- `inIndex`: An index that specifies which chunk with the four-character code specified in the `inUserDataID` parameter you want to query.
- `inOffset`: An offset from the first byte of the chunk to the first byte to get.
- `ioUserDataSize`: On input, a pointer to the size of the buffer that contains the designated chunk. On output, a pointer to the size of bytes that the system copied to the buffer.
- `outUserData`: A pointer to a buffer in which to copy the chunk data.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

<a id="Discussion"></a>

## Discussion

See [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md) for an example of using this function to parse the Audio Definition Model (ADM) of a BW64 file, which is 64-bit and based on WAVE.

## See Also

### Working with User Data

- [AudioFileCountUserData(\_:\_:\_:)](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize(\_:\_:\_:\_:)](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData(\_:\_:\_:\_:\_:)](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileSetUserData(\_:\_:\_:\_:\_:)](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData(\_:\_:\_:)](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

# AudioFileGetUserDataAtOffset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Gets part of the data from a chunk in an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileGetUserDataAtOffset(AudioFileID inAudioFile, UInt32 inUserDataID, UInt32 inIndex, SInt64 inOffset, UInt32 *ioUserDataSize, void *outUserData);
```

## Parameters

- `inAudioFile`: The audio file whose chunk you want to get data from.
- `inUserDataID`: The four-character code of the designated chunk.
- `inIndex`: An index that specifies which chunk with the four-character code specified in the `inUserDataID` parameter you want to query.
- `inOffset`: An offset from the first byte of the chunk to the first byte to get.
- `ioUserDataSize`: On input, a pointer to the size of the buffer that contains the designated chunk. On output, a pointer to the size of bytes that the system copied to the buffer.
- `outUserData`: A pointer to a buffer in which to copy the chunk data.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

<a id="Discussion"></a>

## Discussion

See [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md) for an example of using this function to parse the Audio Definition Model (ADM) of a BW64 file, which is 64-bit and based on WAVE.

## See Also

### Working with User Data

- [AudioFileCountUserData](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize](audiofilegetuserdatasize%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileSetUserData](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.
