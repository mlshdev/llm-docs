> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetuserdatasize(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetuserdatasize(_:_:_:_:))

# AudioFileGetUserDataSize(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of a user data item in an audio file.

## Declaration

```swift
func AudioFileGetUserDataSize(_ inAudioFile: AudioFileID, _ inUserDataID: UInt32, _ inIndex: UInt32, _ outUserDataSize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file whose user data item size you want.
- `inUserDataID`: The four-character code of the designated user data item.
- `inIndex`: An index of the user data item with the four-character code specified in `inUserDataID` that you want to query.
- `outUserDataSize`: On output, if successful, the size of the user data item.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

<a id="Discussion"></a>

## Discussion

In this function, *user data* refers to:

- Chunks in AIFF, CAF, and WAVE files
- Resources in Sound Designer II files
- Other types of information in other files

## See Also

### Working with User Data

- [AudioFileCountUserData(\_:\_:\_:)](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize64(\_:\_:\_:\_:)](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData(\_:\_:\_:\_:\_:)](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData(\_:\_:\_:\_:\_:)](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData(\_:\_:\_:)](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.

# AudioFileGetUserDataSize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets the size of a user data item in an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileGetUserDataSize(AudioFileID inAudioFile, UInt32 inUserDataID, UInt32 inIndex, UInt32 *outUserDataSize);
```

## Parameters

- `inAudioFile`: The audio file whose user data item size you want.
- `inUserDataID`: The four-character code of the designated user data item.
- `inIndex`: An index of the user data item with the four-character code specified in `inUserDataID` that you want to query.
- `outUserDataSize`: On output, if successful, the size of the user data item.

<a id="return-value"></a>

## Return Value

A result code if there’s an error (see Result Codes) or `noErr` if the operation succeeds.

<a id="Discussion"></a>

## Discussion

In this function, *user data* refers to:

- Chunks in AIFF, CAF, and WAVE files
- Resources in Sound Designer II files
- Other types of information in other files

## See Also

### Working with User Data

- [AudioFileCountUserData](audiofilecountuserdata%28______%29.md): Gets the number of user data items with a specified ID in a file.
- [AudioFileGetUserDataSize64](audiofilegetuserdatasize64%28________%29.md): Gets the size of a user data item in an audio file.
- [AudioFileGetUserData](audiofilegetuserdata%28__________%29.md): Gets a chunk from an audio file.
- [AudioFileGetUserDataAtOffset](audiofilegetuserdataatoffset%28____________%29.md): Gets part of the data from a chunk in an audio file.
- [AudioFileSetUserData](audiofilesetuserdata%28__________%29.md): Sets a user data item in an audio file.
- [AudioFileRemoveUserData](audiofileremoveuserdata%28______%29.md): Removes a user data item from an audio file.
