> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/scheduledaudioslice/init(mtimestamp:mcompletionproc:mcompletionprocuserdata:mflags:mreserved:mreserved2:mnumberframes:mbufferlist:)](https://developer.apple.com/documentation/audiotoolbox/scheduledaudioslice/init(mtimestamp:mcompletionproc:mcompletionprocuserdata:mflags:mreserved:mreserved2:mnumberframes:mbufferlist:))

# init(mTimeStamp:mCompletionProc:mCompletionProcUserData:mFlags:mReserved:mReserved2:mNumberFrames:mBufferList:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(mTimeStamp: AudioTimeStamp, mCompletionProc: ScheduledAudioSliceCompletionProc?, mCompletionProcUserData: UnsafeMutableRawPointer, mFlags: AUScheduledAudioSliceFlags, mReserved: UInt32, mReserved2: UnsafeMutableRawPointer?, mNumberFrames: UInt32, mBufferList: UnsafeMutablePointer<AudioBufferList>)
```
