> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/changelist/entry/infochanged

# infoChanged

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Info field changes, keyed by field name. Each `InfoChange` contains the old and new values.

## Declaration

```swift
var infoChanged: [(USDToken, USDLayer.ChangeList.Entry.InfoChange)] { get }
```
