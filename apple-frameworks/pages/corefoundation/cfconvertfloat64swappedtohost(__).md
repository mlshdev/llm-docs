> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfconvertfloat64swappedtohost(_:)](https://developer.apple.com/documentation/corefoundation/cfconvertfloat64swappedtohost(_:))

# CFConvertFloat64SwappedToHost(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Converts a 64-bit float from a platform-independent format to the host’s native byte order.

## Declaration

```swift
func CFConvertFloat64SwappedToHost(_ arg: CFSwappedFloat64) -> Float64
```

## Parameters

- `arg`: A structure holding the real value to convert.

<a id="return-value"></a>

## Return Value

The real value in the host’s native format.

## See Also

### Core Foundation Byte Order Utilities Miscellaneous Functions

- [CFByteOrderGetCurrent()](cfbyteordergetcurrent%28%29.md): Returns the byte order of the current computer.
- [CFConvertDoubleHostToSwapped(\_:)](cfconvertdoublehosttoswapped%28__%29.md): Converts a 64-bit double from the host’s native byte order to a platform-independent format.
- [CFConvertDoubleSwappedToHost(\_:)](cfconvertdoubleswappedtohost%28__%29.md): Converts a 64-bit double from a platform-independent format to the host’s native byte order.
- [CFConvertFloat32HostToSwapped(\_:)](cfconvertfloat32hosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat32SwappedToHost(\_:)](cfconvertfloat32swappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloat64HostToSwapped(\_:)](cfconvertfloat64hosttoswapped%28__%29.md): Converts a 64-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatHostToSwapped(\_:)](cfconvertfloathosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatSwappedToHost(\_:)](cfconvertfloatswappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFSwapInt16(\_:)](cfswapint16%28__%29.md): Swaps the bytes of a 16-bit integer.
- [CFSwapInt16BigToHost(\_:)](cfswapint16bigtohost%28__%29.md): Converts a 16-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt16HostToBig(\_:)](cfswapint16hosttobig%28__%29.md): Converts a 16-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt16HostToLittle(\_:)](cfswapint16hosttolittle%28__%29.md): Converts a 16-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt16LittleToHost(\_:)](cfswapint16littletohost%28__%29.md): Converts a 16-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt32(\_:)](cfswapint32%28__%29.md): Swaps the bytes of a 32-bit integer.
- [CFSwapInt32BigToHost(\_:)](cfswapint32bigtohost%28__%29.md): Converts a 32-bit integer from big-endian format to the host’s native byte order.

# CFConvertFloat64SwappedToHost (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Converts a 64-bit float from a platform-independent format to the host’s native byte order.

## Declaration

```objectivec
static Float64 CFConvertFloat64SwappedToHost(CFSwappedFloat64 arg);
```

## Parameters

- `arg`: A structure holding the real value to convert.

<a id="return-value"></a>

## Return Value

The real value in the host’s native format.

## See Also

### Core Foundation Byte Order Utilities Miscellaneous Functions

- [CFByteOrderGetCurrent](cfbyteordergetcurrent%28%29.md): Returns the byte order of the current computer.
- [CFConvertDoubleHostToSwapped](cfconvertdoublehosttoswapped%28__%29.md): Converts a 64-bit double from the host’s native byte order to a platform-independent format.
- [CFConvertDoubleSwappedToHost](cfconvertdoubleswappedtohost%28__%29.md): Converts a 64-bit double from a platform-independent format to the host’s native byte order.
- [CFConvertFloat32HostToSwapped](cfconvertfloat32hosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat32SwappedToHost](cfconvertfloat32swappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloat64HostToSwapped](cfconvertfloat64hosttoswapped%28__%29.md): Converts a 64-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatHostToSwapped](cfconvertfloathosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatSwappedToHost](cfconvertfloatswappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFSwapInt16](cfswapint16%28__%29.md): Swaps the bytes of a 16-bit integer.
- [CFSwapInt16BigToHost](cfswapint16bigtohost%28__%29.md): Converts a 16-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt16HostToBig](cfswapint16hosttobig%28__%29.md): Converts a 16-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt16HostToLittle](cfswapint16hosttolittle%28__%29.md): Converts a 16-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt16LittleToHost](cfswapint16littletohost%28__%29.md): Converts a 16-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt32](cfswapint32%28__%29.md): Swaps the bytes of a 32-bit integer.
- [CFSwapInt32BigToHost](cfswapint32bigtohost%28__%29.md): Converts a 32-bit integer from big-endian format to the host’s native byte order.
