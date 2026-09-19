> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/groupsessionmessenger/messagecontext/source

# source

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The participant device that sent the message.

## Declaration

```swift
var source: Participant
```

<a id="discussion"></a>

## Discussion

Each device has a unique participant. Use this property to determine the origin of the message.
