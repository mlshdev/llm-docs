> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/model](https://developer.apple.com/documentation/createml/mlobjectdetector/model)

# model

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The object detector’s underlying Core ML model instance.

## Declaration

```swift
var model: MLModel { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> This computed property exports and compiles a Core ML model. Prefer storing the result to using this property repeatedly.

## See Also

### Inspecting an object detector model

- [modelParameters](modelparameters-swift.property.md): The model configuration parameters the object detector used during its training session.
