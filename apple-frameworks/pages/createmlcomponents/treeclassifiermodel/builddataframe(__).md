> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/treeclassifiermodel/builddataframe(_:)](https://developer.apple.com/documentation/createmlcomponents/treeclassifiermodel/builddataframe(_:))

# buildDataFrame(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Builds a data frame containing a labels column and a probability distribution column.

## Declaration

```swift
func buildDataFrame(_ distributions: [ClassificationDistribution<Label>]) -> DataFrame
```
