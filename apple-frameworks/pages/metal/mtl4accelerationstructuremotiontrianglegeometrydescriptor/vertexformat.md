> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/vertexformat](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotiontrianglegeometrydescriptor/vertexformat)

# vertexFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the format of the vertices in the vertex buffers.

## Declaration

```swift
var vertexFormat: MTLAttributeFormat { get set }
```

<a id="discussion"></a>

## Discussion

All keyframes share the same vertex format. Defaults to `MTLAttributeFormatFloat3`, corresponding to three packed floating point numbers.

# vertexFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the format of the vertices in the vertex buffers.

## Declaration

```objectivec
@property (nonatomic) MTLAttributeFormat vertexFormat;
```

<a id="discussion"></a>

## Discussion

All keyframes share the same vertex format. Defaults to `MTLAttributeFormatFloat3`, corresponding to three packed floating point numbers.
