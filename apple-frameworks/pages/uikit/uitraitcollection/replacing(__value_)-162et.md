> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/replacing(_:value:)-162et](https://developer.apple.com/documentation/uikit/uitraitcollection/replacing(_:value:)-162et)

# replacing(\_:value:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
func replacing<T>(_ trait: T.Type, value: T.Value) -> UITraitCollection where T : UITraitDefinition, T.Value : RawRepresentable, T.Value.RawValue == CGFloat
```
