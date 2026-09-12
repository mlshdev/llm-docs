> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodeldescription/metadata](https://developer.apple.com/documentation/coreml/mlmodeldescription/metadata)

# metadata (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of the model’s creation information, such as its description, author, version, and license.

## Declaration

```swift
var metadata: [MLModelMetadataKey : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use the keys defined by [MLModelMetadataKey](../mlmodelmetadatakey.md) to retrieve the dictionary’s entries.

## See Also

### Accessing metadata

- [classLabels](classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [MLModelMetadataKey](../mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.

# metadata (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A dictionary of the model’s creation information, such as its description, author, version, and license.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

Use the keys defined by [MLModelMetadataKey](../mlmodelmetadatakey.md) to retrieve the dictionary’s entries.

## See Also

### Accessing metadata

- [classLabels](classlabels.md): An array of labels, which can be either strings or a numbers, for classifier models.
- [MLModelMetadataKey](../mlmodelmetadatakey.md): The set of keys the model uses to store values in its metadata dictionary.
