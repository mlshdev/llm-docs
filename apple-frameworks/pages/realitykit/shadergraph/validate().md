> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/validate()](https://developer.apple.com/documentation/realitykit/shadergraph/validate())

# validate()

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Checks whether the graph is well-formed without producing a Metal library.

## Declaration

```swift
final func validate() -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the graph passes front-end validation, `false` otherwise.

<a id="discussion"></a>

## Discussion

Runs the ShaderGraph compiler front end — parsing, graph construction, and the transform pipeline — but stops short of stitching the graph into a Metal library. Use this to catch structural problems before paying the cost of a full compile.

Validation is cheaper than [ShaderGraphMaterial](../shadergraphmaterial.md) compilation, but the exact amount of work skipped is not guaranteed and may change over time. A graph that passes [validate()](validate%28%29.md) may still fail later during Metal library generation.
