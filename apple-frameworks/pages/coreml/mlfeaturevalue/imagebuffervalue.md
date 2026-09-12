> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/imagebuffervalue](https://developer.apple.com/documentation/coreml/mlfeaturevalue/imagebuffervalue)

# imageBufferValue (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The underlying image of the feature value as a pixel buffer.

## Declaration

```swift
var imageBufferValue: CVPixelBuffer? { get }
```

## See Also

### Accessing the feature’s value

- [isUndefined](isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](int64value.md): The underlying integer of the feature value.
- [doubleValue](doublevalue.md): The underlying double of the feature value.
- [stringValue](stringvalue.md): The underlying string of the feature value.
- [shapedArrayValue(of:)](shapedarrayvalue%28of_%29.md): Returns the underlying shaped array of the feature value.
- [multiArrayValue](multiarrayvalue.md): The underlying multiarray of the feature value.
- [sequenceValue](sequencevalue.md): The underlying sequence of the feature value.
- [dictionaryValue](dictionaryvalue.md): The underlying dictionary of the feature value.

# imageBufferValue (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The underlying image of the feature value as a pixel buffer.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CVPixelBufferRef imageBufferValue;
```

## See Also

### Accessing the feature’s value

- [undefined](isundefined.md): A Boolean value that indicates whether the feature value is undefined or missing.
- [int64Value](int64value.md): The underlying integer of the feature value.
- [doubleValue](doublevalue.md): The underlying double of the feature value.
- [stringValue](stringvalue.md): The underlying string of the feature value.
- [multiArrayValue](multiarrayvalue.md): The underlying multiarray of the feature value.
- [sequenceValue](sequencevalue.md): The underlying sequence of the feature value.
- [dictionaryValue](dictionaryvalue.md): The underlying dictionary of the feature value.
