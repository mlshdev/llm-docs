> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlparameterkey/numberofneighbors](https://developer.apple.com/documentation/coreml/mlparameterkey/numberofneighbors)

# numberOfNeighbors (Swift)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.

## Declaration

```swift
class var numberOfNeighbors: MLParameterKey { get }
```

<a id="Discussion"></a>

## Discussion

The value type for the [numberOfNeighbors](numberofneighbors.md) key is an [Int64](https://developer.apple.com/documentation/swift/int64).

## See Also

### Accessing model parameters

- [linkedModelFileName](linkedmodelfilename.md): The key you use to access the linked model’s filename.
- [linkedModelSearchPath](linkedmodelsearchpath.md): The key you use to access the linked model’s search path.

# numberOfNeighbors (Objective-C)

**Framework:** Core ML  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The key you use to access the number of neighbors that adjusts the affinity of a k-nearest-neighbor model.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MLParameterKey * numberOfNeighbors;
```

<a id="Discussion"></a>

## Discussion

The value type for the [numberOfNeighbors](numberofneighbors.md) key is an [Int64](https://developer.apple.com/documentation/swift/int64).

## See Also

### Accessing model parameters

- [linkedModelFileName](linkedmodelfilename.md): The key you use to access the linked model’s filename.
- [linkedModelSearchPath](linkedmodelsearchpath.md): The key you use to access the linked model’s search path.
