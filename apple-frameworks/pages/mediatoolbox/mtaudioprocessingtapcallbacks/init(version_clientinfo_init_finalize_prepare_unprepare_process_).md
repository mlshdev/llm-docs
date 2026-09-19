> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediatoolbox/mtaudioprocessingtapcallbacks/init(version:clientinfo:init:finalize:prepare:unprepare:process:)

# init(version:clientInfo:init:finalize:prepare:unprepare:process:)

**Framework:** Media Toolbox  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
init(version: Int32, clientInfo: UnsafeMutableRawPointer?, init: MTAudioProcessingTapInitCallback?, finalize: MTAudioProcessingTapFinalizeCallback?, prepare: MTAudioProcessingTapPrepareCallback?, unprepare: MTAudioProcessingTapUnprepareCallback?, process: MTAudioProcessingTapProcessCallback)
```
