> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/init(_:value:)-8k1t1](https://developer.apple.com/documentation/uikit/uitraitcollection/init(_:value:)-8k1t1)

# init(\_:value:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
convenience init<T>(_ trait: T.Type, value: T.Value) where T : UITraitDefinition, T.Value == CGFloat?
```
