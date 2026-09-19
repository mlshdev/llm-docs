> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/kfseventstreamcreateflagfileevents

# kFSEventStreamCreateFlagFileEvents

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

## Declaration

```swift
var kFSEventStreamCreateFlagFileEvents: Int { get }
```

<a id="discussion"></a>

## Discussion

Request file-level notifications. Your stream will receive events about individual files in the hierarchy you're watching instead of only receiving directory level notifications. Use this flag with care as it will generate significantly more events than without it.
