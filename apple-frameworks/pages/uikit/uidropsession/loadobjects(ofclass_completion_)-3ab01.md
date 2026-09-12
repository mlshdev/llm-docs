> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidropsession/loadobjects(ofclass:completion:)-3ab01](https://developer.apple.com/documentation/uikit/uidropsession/loadobjects(ofclass:completion:)-3ab01)

# loadObjects(ofClass:completion:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS

## Declaration

```swift
@MainActor @preconcurrency func loadObjects<T>(ofClass: T.Type, completion: @escaping ([T]) -> Void) -> Progress where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderReading
```
