> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition/functionalname](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition/functionalname)

# functionalName

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of the functional operation this definition implements.

## Declaration

```swift
var functionalName: String { get }
```

<a id="discussion"></a>

## Discussion

Unlike [name](name.md), the functional name omits type information and is shared by all definitions that implement the same operation across different types. For example, `ND_atan2_float` and `ND_atan2_vector2` both have the functional name `"atan2"`.

Use this value with [definitions(function:inputs:)](../nodelibrary/definitions%28function_inputs_%29.md) to find all type variants of an operation.
