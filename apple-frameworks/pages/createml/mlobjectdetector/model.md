> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlobjectdetector/model

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
