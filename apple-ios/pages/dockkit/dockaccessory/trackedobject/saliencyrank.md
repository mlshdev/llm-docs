> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/dockkit/dockaccessory/trackedobject/saliencyrank](https://developer.apple.com/documentation/dockkit/dockaccessory/trackedobject/saliencyrank)

# saliencyRank

**Framework:** DockKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The saliency rank of the object the dock is tracking. A lower rank indicates higher importance of the object. This property is `nil` if the saliency ranking isn’t set or the object isn’t salient.

## Declaration

```swift
var saliencyRank: Int?
```
