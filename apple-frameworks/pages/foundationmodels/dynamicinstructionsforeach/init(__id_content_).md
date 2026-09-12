> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/dynamicinstructionsforeach/init(_:id:content:)](https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsforeach/init(_:id:content:))

# init(\_:id:content:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
init(_ data: Data, id: KeyPath<Data.Element, ID>, @DynamicInstructionsBuilder content: @escaping (Data.Element) -> Content)
```

## See Also

### Creating an instance

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` is `Data.Element.ID`, `Content` conforms to `DynamicInstructions`, and `Data.Element` conforms to `Identifiable`.
