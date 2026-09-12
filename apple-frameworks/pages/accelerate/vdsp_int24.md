> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vdsp_int24](https://developer.apple.com/documentation/accelerate/vdsp_int24)

# vDSP_int24 (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that holds a 24-bit signed integer value.

## Declaration

```swift
struct vDSP_int24
```

## Topics

### Initializers

- [init()](vdsp_int24/init%28%29.md): Creates a 24-but signed integer value.
- [init(bytes:)](vdsp_int24/init%28bytes_%29.md): Creates a 24-bit signed integer value from the specified bytes.

### Instance Properties

- [bytes](vdsp_int24/bytes.md): The bytes that represent the value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### 24-bit integer to floating point conversion

- [vDSP_uint24](vdsp_uint24.md): A data structure that holds a 24-bit unsigned integer value.

# vDSP_int24 (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A data structure that holds a 24-bit signed integer value.

## Declaration

```objectivec
typedef struct { ... } vDSP_int24;
```

## Topics

### Instance Properties

- [bytes](vdsp_int24/bytes.md): The bytes that represent the value.

## See Also

### 24-bit integer to floating point conversion

- [vDSP_vflt24](vdsp_vflt24.md): Converts a vector of signed 24-bit integers to single-precision floating-point values.
- [vDSP_vfltu24](vdsp_vfltu24.md): Converts a vector of unsigned 24-bit integers to single-precision floating-point values.
- [vDSP_vfltsm24](vdsp_vfltsm24.md): Converts and scales a vector of signed 24-bit integers to single-precision floating-point values.
- [vDSP_vfltsmu24](vdsp_vfltsmu24.md): Converts and scales a vector of unsigned 24-bit integers to single-precision floating-point values.
- [vDSP_uint24](vdsp_uint24.md): A data structure that holds a 24-bit unsigned integer value.
