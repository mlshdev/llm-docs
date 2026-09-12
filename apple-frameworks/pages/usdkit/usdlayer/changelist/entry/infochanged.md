> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/changelist/entry/infochanged](https://developer.apple.com/documentation/usdkit/usdlayer/changelist/entry/infochanged)

# infoChanged

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Info field changes, keyed by field name. Each `InfoChange` contains the old and new values.

## Declaration

```swift
var infoChanged: [(USDToken, USDLayer.ChangeList.Entry.InfoChange)] { get }
```
