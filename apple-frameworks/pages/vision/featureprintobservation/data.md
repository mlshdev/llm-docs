> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/featureprintobservation/data](https://developer.apple.com/documentation/vision/featureprintobservation/data)

# data

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The feature print data.

## Declaration

```swift
let data: Data
```

<a id="Discussion"></a>

## Discussion

Vision divides the data into separate elements. Determine the type of element using `elementType`, and the number of elements using `elementCount`.

## See Also

### Inspecting an observation

- [elementCount](elementcount.md): The total number of elements in the data.
- [elementType](elementtype.md): The type of each element in the data.
- [ElementType](../elementtype.md): The type of element in feature print data.
