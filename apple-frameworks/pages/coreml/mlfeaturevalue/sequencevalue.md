> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/sequencevalue](https://developer.apple.com/documentation/coreml/mlfeaturevalue/sequencevalue)

# sequenceValue (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The underlying sequence of the feature value.

## Declaration

```swift
var sequenceValue: MLSequence? { get }
```

## See Also

### Accessing the feature’s value

- [isUndefined](isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](int64value.md): The underlying integer of the feature value.
- [doubleValue](doublevalue.md): The underlying double of the feature value.
- [stringValue](stringvalue.md): The underlying string of the feature value.
- [imageBufferValue](imagebuffervalue.md): The underlying image of the feature value as a pixel buffer.
- [shapedArrayValue(of:)](shapedarrayvalue%28of_%29.md): Returns the underlying shaped array of the feature value.
- [multiArrayValue](multiarrayvalue.md): The underlying multiarray of the feature value.
- [dictionaryValue](dictionaryvalue.md): The underlying dictionary of the feature value.

# sequenceValue (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The underlying sequence of the feature value.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MLSequence * sequenceValue;
```

## See Also

### Accessing the feature’s value

- [undefined](isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](int64value.md): The underlying integer of the feature value.
- [doubleValue](doublevalue.md): The underlying double of the feature value.
- [stringValue](stringvalue.md): The underlying string of the feature value.
- [imageBufferValue](imagebuffervalue.md): The underlying image of the feature value as a pixel buffer.
- [multiArrayValue](multiarrayvalue.md): The underlying multiarray of the feature value.
- [dictionaryValue](dictionaryvalue.md): The underlying dictionary of the feature value.
