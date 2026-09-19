> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitcollection/init(_:value:)-836bk

# init(\_:value:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
convenience init<T>(_ trait: T.Type, value: T.Value) where T : UITraitDefinition, T.Value : RawRepresentable
```
