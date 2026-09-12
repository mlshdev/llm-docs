> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformer/appending(_:)](https://developer.apple.com/documentation/createmlcomponents/tabulartransformer/appending(_:))

# appending(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Composes this tabular transformer with another tabular transformer.

## Declaration

```swift
func appending<Other>(_ other: Other) -> ComposedTabularTransformer<Self, Other> where Other : TabularTransformer
```
