> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutabletraits-13ja5/subscript(_:)-4tqsr](https://developer.apple.com/documentation/uikit/uimutabletraits-13ja5/subscript(_:)-4tqsr)

# subscript(\_:)

**Framework:** UIKit  
**Kind:** Instance Subscript  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
subscript<T>(trait: T.Type) -> T.Value where T : UITraitDefinition, T.Value : RawRepresentable { get set }
```
