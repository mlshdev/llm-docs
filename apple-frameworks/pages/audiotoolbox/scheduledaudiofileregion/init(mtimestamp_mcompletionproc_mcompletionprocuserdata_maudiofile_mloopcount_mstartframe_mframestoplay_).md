> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/scheduledaudiofileregion/init(mtimestamp:mcompletionproc:mcompletionprocuserdata:maudiofile:mloopcount:mstartframe:mframestoplay:)

# init(mTimeStamp:mCompletionProc:mCompletionProcUserData:mAudioFile:mLoopCount:mStartFrame:mFramesToPlay:)

**Framework:** Audio Toolbox  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
init(mTimeStamp: AudioTimeStamp, mCompletionProc: ScheduledAudioFileRegionCompletionProc?, mCompletionProcUserData: UnsafeMutableRawPointer?, mAudioFile: OpaquePointer, mLoopCount: UInt32, mStartFrame: Int64, mFramesToPlay: UInt32)
```
