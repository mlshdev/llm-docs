> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dockkit/dockaccessory/trackedperson/saliencyrank

# saliencyRank

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The saliency rank of the person the dock is tracking. A lower rank indicates higher importance of the person. This property is `nil` if the saliency ranking isn’t set or the person isn’t salient.

## Declaration

```swift
var saliencyRank: Int?
```
