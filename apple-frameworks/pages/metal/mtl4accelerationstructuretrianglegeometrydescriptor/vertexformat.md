> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/vertexformat](https://developer.apple.com/documentation/metal/mtl4accelerationstructuretrianglegeometrydescriptor/vertexformat)

# vertexFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes the format of the vertices in the vertex buffer.

## Declaration

```swift
var vertexFormat: MTLAttributeFormat { get set }
```

<a id="discussion"></a>

## Discussion

This property controls the format of the position attribute of the vertices the [vertexBuffer](vertexbuffer.md) references.

The format defaults to `MTLAttributeFormatFloat3`, corresponding to three packed floating point numbers.

# vertexFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Describes the format of the vertices in the vertex buffer.

## Declaration

```objectivec
@property (nonatomic) MTLAttributeFormat vertexFormat;
```

<a id="discussion"></a>

## Discussion

This property controls the format of the position attribute of the vertices the [vertexBuffer](vertexbuffer.md) references.

The format defaults to `MTLAttributeFormatFloat3`, corresponding to three packed floating point numbers.
