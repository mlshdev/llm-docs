> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription/classlabels](https://developer.apple.com/documentation/coreml/mlmodeldescription/classlabels)

# classLabels (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of labels, which can be either strings or a numbers, for classifier models.

## Declaration

```swift
var classLabels: [Any]? { get }
```

## See Also

### Accessing metadata

- [metadata](metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.
- [MLModelMetadataKey](../mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.

# classLabels (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An array of labels, which can be either strings or a numbers, for classifier models.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<id> * classLabels;
```

## See Also

### Accessing metadata

- [metadata](metadata.md): A dictionary of the model’s creation information, such as its description, author, version, and license.
- [MLModelMetadataKey](../mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.
