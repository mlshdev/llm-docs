> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/byte-order-utilities](https://developer.apple.com/documentation/corefoundation/byte-order-utilities)

# Byte-Order Utilities (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

When handling binary data transmitted or shared across platforms, you need be concerned with how each platform stores numerical values. A platform stores values either in big-endian or little-endian format. On big-endian machines, such as PowerPC machines, values are stored with the most-significant bytes first in memory; on little-endian machines, such as Pentium machines, values are stored with the least-significant bytes first. A multibyte value transmitted to a platform with a different format will be misinterpreted if it is not converted properly by one of the computers.

You identify the native format of the current platform using the [CFByteOrderGetCurrent()](cfbyteordergetcurrent%28%29.md) function. Use functions such as [CFSwapInt32BigToHost(\_:)](cfswapint32bigtohost%28__%29.md) and [CFConvertFloat32HostToSwapped(\_:)](cfconvertfloat32hosttoswapped%28__%29.md) to convert values between different byte order formats.

## Topics

### Core Foundation Byte Order Utilities Miscellaneous Functions

- [CFByteOrderGetCurrent()](cfbyteordergetcurrent%28%29.md): Returns the byte order of the current computer.
- [CFConvertDoubleHostToSwapped(\_:)](cfconvertdoublehosttoswapped%28__%29.md): Converts a 64-bit double from the host’s native byte order to a platform-independent format.
- [CFConvertDoubleSwappedToHost(\_:)](cfconvertdoubleswappedtohost%28__%29.md): Converts a 64-bit double from a platform-independent format to the host’s native byte order.
- [CFConvertFloat32HostToSwapped(\_:)](cfconvertfloat32hosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat32SwappedToHost(\_:)](cfconvertfloat32swappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloat64HostToSwapped(\_:)](cfconvertfloat64hosttoswapped%28__%29.md): Converts a 64-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat64SwappedToHost(\_:)](cfconvertfloat64swappedtohost%28__%29.md): Converts a 64-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloatHostToSwapped(\_:)](cfconvertfloathosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatSwappedToHost(\_:)](cfconvertfloatswappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFSwapInt16(\_:)](cfswapint16%28__%29.md): Swaps the bytes of a 16-bit integer.
- [CFSwapInt16BigToHost(\_:)](cfswapint16bigtohost%28__%29.md): Converts a 16-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt16HostToBig(\_:)](cfswapint16hosttobig%28__%29.md): Converts a 16-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt16HostToLittle(\_:)](cfswapint16hosttolittle%28__%29.md): Converts a 16-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt16LittleToHost(\_:)](cfswapint16littletohost%28__%29.md): Converts a 16-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt32(\_:)](cfswapint32%28__%29.md): Swaps the bytes of a 32-bit integer.
- [CFSwapInt32BigToHost(\_:)](cfswapint32bigtohost%28__%29.md): Converts a 32-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt32HostToBig(\_:)](cfswapint32hosttobig%28__%29.md): Converts a 32-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt32HostToLittle(\_:)](cfswapint32hosttolittle%28__%29.md): Converts a 32-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt32LittleToHost(\_:)](cfswapint32littletohost%28__%29.md): Converts a 32-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt64(\_:)](cfswapint64%28__%29.md): Swaps the bytes of a 64-bit integer.
- [CFSwapInt64BigToHost(\_:)](cfswapint64bigtohost%28__%29.md): Converts a 64-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt64HostToBig(\_:)](cfswapint64hosttobig%28__%29.md): Converts a 64-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt64HostToLittle(\_:)](cfswapint64hosttolittle%28__%29.md): Converts a 64-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt64LittleToHost(\_:)](cfswapint64littletohost%28__%29.md): Converts a 64-bit integer from little-endian format to the host’s native byte order.

### Data Types

- [CFSwappedFloat32](cfswappedfloat32.md): Structure holding a 32-bit float value in a platform-independentbyte order.
- [CFSwappedFloat64](cfswappedfloat64.md): Structure holding a 64-bit float value in a platform-independentbyte order.

### Constants

- [CFByteOrder](cfbyteorder.md): Flags that identify byte order.

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)

# Byte-Order Utilities (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

When handling binary data transmitted or shared across platforms, you need be concerned with how each platform stores numerical values. A platform stores values either in big-endian or little-endian format. On big-endian machines, such as PowerPC machines, values are stored with the most-significant bytes first in memory; on little-endian machines, such as Pentium machines, values are stored with the least-significant bytes first. A multibyte value transmitted to a platform with a different format will be misinterpreted if it is not converted properly by one of the computers.

You identify the native format of the current platform using the [CFByteOrderGetCurrent](cfbyteordergetcurrent%28%29.md) function. Use functions such as [CFSwapInt32BigToHost](cfswapint32bigtohost%28__%29.md) and [CFConvertFloat32HostToSwapped](cfconvertfloat32hosttoswapped%28__%29.md) to convert values between different byte order formats.

## Topics

### Core Foundation Byte Order Utilities Miscellaneous Functions

- [CFByteOrderGetCurrent](cfbyteordergetcurrent%28%29.md): Returns the byte order of the current computer.
- [CFConvertDoubleHostToSwapped](cfconvertdoublehosttoswapped%28__%29.md): Converts a 64-bit double from the host’s native byte order to a platform-independent format.
- [CFConvertDoubleSwappedToHost](cfconvertdoubleswappedtohost%28__%29.md): Converts a 64-bit double from a platform-independent format to the host’s native byte order.
- [CFConvertFloat32HostToSwapped](cfconvertfloat32hosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat32SwappedToHost](cfconvertfloat32swappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloat64HostToSwapped](cfconvertfloat64hosttoswapped%28__%29.md): Converts a 64-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloat64SwappedToHost](cfconvertfloat64swappedtohost%28__%29.md): Converts a 64-bit float from a platform-independent format to the host’s native byte order.
- [CFConvertFloatHostToSwapped](cfconvertfloathosttoswapped%28__%29.md): Converts a 32-bit float from the host’s native byte order to a platform-independent format.
- [CFConvertFloatSwappedToHost](cfconvertfloatswappedtohost%28__%29.md): Converts a 32-bit float from a platform-independent format to the host’s native byte order.
- [CFSwapInt16](cfswapint16%28__%29.md): Swaps the bytes of a 16-bit integer.
- [CFSwapInt16BigToHost](cfswapint16bigtohost%28__%29.md): Converts a 16-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt16HostToBig](cfswapint16hosttobig%28__%29.md): Converts a 16-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt16HostToLittle](cfswapint16hosttolittle%28__%29.md): Converts a 16-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt16LittleToHost](cfswapint16littletohost%28__%29.md): Converts a 16-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt32](cfswapint32%28__%29.md): Swaps the bytes of a 32-bit integer.
- [CFSwapInt32BigToHost](cfswapint32bigtohost%28__%29.md): Converts a 32-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt32HostToBig](cfswapint32hosttobig%28__%29.md): Converts a 32-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt32HostToLittle](cfswapint32hosttolittle%28__%29.md): Converts a 32-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt32LittleToHost](cfswapint32littletohost%28__%29.md): Converts a 32-bit integer from little-endian format to the host’s native byte order.
- [CFSwapInt64](cfswapint64%28__%29.md): Swaps the bytes of a 64-bit integer.
- [CFSwapInt64BigToHost](cfswapint64bigtohost%28__%29.md): Converts a 64-bit integer from big-endian format to the host’s native byte order.
- [CFSwapInt64HostToBig](cfswapint64hosttobig%28__%29.md): Converts a 64-bit integer from the host’s native byte order to big-endian format.
- [CFSwapInt64HostToLittle](cfswapint64hosttolittle%28__%29.md): Converts a 64-bit integer from the host’s native byte order to little-endian format.
- [CFSwapInt64LittleToHost](cfswapint64littletohost%28__%29.md): Converts a 64-bit integer from little-endian format to the host’s native byte order.

### Data Types

- [CFSwappedFloat32](cfswappedfloat32.md): Structure holding a 32-bit float value in a platform-independentbyte order.
- [CFSwappedFloat64](cfswappedfloat64.md): Structure holding a 64-bit float value in a platform-independentbyte order.

### Constants

- [CFByteOrder](cfbyteorder.md): Flags that identify byte order.

## See Also

### Related Documentation

- [Memory Management Programming Guide for Core Foundation](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/CFMemoryMgmt.html#//apple_ref/doc/uid/10000127i)

### Utilities

- [Base Utilities](base-utilities.md)
- [Core Foundation URL Access Utilities](core-foundation-url-access-utilities.md)
- [Preferences Utilities](preferences-utilities.md)
- [Socket Name Server Utilities](socket-name-server-utilities.md)
- [Time Utilities](time-utilities.md)
