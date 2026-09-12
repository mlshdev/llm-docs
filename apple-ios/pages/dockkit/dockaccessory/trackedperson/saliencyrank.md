> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackedperson/saliencyrank](https://developer.apple.com/documentation/dockkit/dockaccessory/trackedperson/saliencyrank)

# saliencyRank

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The saliency rank of the person the dock is tracking. A lower rank indicates higher importance of the person. This property is `nil` if the saliency ranking isn’t set or the person isn’t salient.

## Declaration

```swift
var saliencyRank: Int?
```
