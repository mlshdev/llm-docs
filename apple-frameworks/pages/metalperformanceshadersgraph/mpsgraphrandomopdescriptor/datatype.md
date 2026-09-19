> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor/datatype

# dataType (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The data type of the generated result values.

## Declaration

```swift
var dataType: MPSDataType { get set }
```

<a id="discussion"></a>

## Discussion

When sampling from the uniform distribution, valid types are MPSDataTypeFloat16, MPSDataTypeFloat32, and MPSDataTypeInt32. When sampling from the normal or truncated normal distribution, valid types are MPSDataTypeFloat16 and MPSDataTypeFloat32.

# dataType (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The data type of the generated result values.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSDataType dataType;
```

<a id="discussion"></a>

## Discussion

When sampling from the uniform distribution, valid types are MPSDataTypeFloat16, MPSDataTypeFloat32, and MPSDataTypeInt32. When sampling from the normal or truncated normal distribution, valid types are MPSDataTypeFloat16 and MPSDataTypeFloat32.
