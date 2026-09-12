> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey/linkedmodelsearchpath](https://developer.apple.com/documentation/coreml/mlparameterkey/linkedmodelsearchpath)

# linkedModelSearchPath (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key you use to access the linked model’s search path.

## Declaration

```swift
class var linkedModelSearchPath: MLParameterKey { get }
```

<a id="Discussion"></a>

## Discussion

The value type for the [linkedModelSearchPath](linkedmodelsearchpath.md) key is a [String](https://developer.apple.com/documentation/swift/string).

## See Also

### Accessing model parameters

- [numberOfNeighbors](numberofneighbors.md): The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.
- [linkedModelFileName](linkedmodelfilename.md): The key you use to access the linked model’s filename.

# linkedModelSearchPath (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The key you use to access the linked model’s search path.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLParameterKey * linkedModelSearchPath;
```

<a id="Discussion"></a>

## Discussion

The value type for the [linkedModelSearchPath](linkedmodelsearchpath.md) key is a [String](https://developer.apple.com/documentation/swift/string).

## See Also

### Accessing model parameters

- [numberOfNeighbors](numberofneighbors.md): The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.
- [linkedModelFileName](linkedmodelfilename.md): The key you use to access the linked model’s filename.
