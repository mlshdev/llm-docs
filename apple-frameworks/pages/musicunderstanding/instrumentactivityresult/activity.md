> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/instrumentactivityresult/activity](https://developer.apple.com/documentation/musicunderstanding/instrumentactivityresult/activity)

# activity

**Framework:** Music Understanding  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The activity level of each instrument over time, as values from 0.0 to 1.0.

## Declaration

```swift
let activity: [InstrumentActivityResult.Instrument : [MusicUnderstandingSession.TimedValue<Float>]]
```
