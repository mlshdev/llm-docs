> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/dynamicinstructionsforeach/init(_:content:)

# init(\_:content:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates dynamic instructions that produce content for each element of an identifiable collection.

## Declaration

```swift
init(_ data: Data, @DynamicInstructionsBuilder content: @escaping (Data.Element) -> Content)
```

## Parameters

- `data`: The collection whose elements each produce content.
- `content`: A builder closure that produces the dynamic instructions for an element.

<a id="discussion"></a>

## Discussion

Don’t create this type directly. Instead, use [DynamicInstructions.ForEach](../dynamicinstructions/foreach.md) within the `body` of your [DynamicInstructions](../dynamicinstructions.md).

## See Also

### Creating an instance

- [init(\_:id:content:)](init%28__id_content_%29.md): Conforms when `Data` conforms to `RandomAccessCollection`, `ID` conforms to `Hashable`, and `Content` conforms to `DynamicInstructions`. Creates dynamic instructions that produce content for each element of a collection.
