> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphresource/parameternames](https://developer.apple.com/documentation/realitykit/animationgraphresource/parameternames)

# parameterNames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The names of all parameters declared by the graph definition.

## Declaration

```swift
var parameterNames: [String] { get }
```

<a id="discussion"></a>

## Discussion

Use this list to discover the parameters a graph exposes for runtime control. Set values for these parameters through the owning entity’s parameter binding rather than through the resource itself, so that any entity using the graph can drive it with values that match its own state:

```swift
entity.parameters["MoveSpeed"] = BindableValue(Float(1.0))
```
