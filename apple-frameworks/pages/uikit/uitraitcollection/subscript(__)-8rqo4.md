> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitcollection/subscript(_:)-8rqo4

# subscript(\_:)

**Framework:** UIKit  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
subscript<T>(trait: T.Type) -> T.Value where T : UITraitDefinition, T.Value : RawRepresentable, T.Value.RawValue == Double { get }
```
