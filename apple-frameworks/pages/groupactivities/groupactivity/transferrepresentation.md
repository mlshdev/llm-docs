> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivity/transferrepresentation](https://developer.apple.com/documentation/groupactivities/groupactivity/transferrepresentation)

# transferRepresentation

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A default type that lets the system share your activity.

## Declaration

```swift
static var transferRepresentation: some TransferRepresentation { get }
```

<a id="discussion"></a>

## Discussion

This property contains a default [GroupActivityTransferRepresentation](../groupactivitytransferrepresentation.md) for your activity. The system uses this type to offer your activity via SharePlay.
