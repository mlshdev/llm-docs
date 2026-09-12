> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderdirectcallbacks/version](https://developer.apple.com/documentation/coregraphics/cgdataproviderdirectcallbacks/version)

# version (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version of this structure. It should be set to 0.

## Declaration

```swift
var version: UInt32
```

## See Also

### Instance Properties

- [getBytePointer](getbytepointer.md): A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [getBytesAtPosition](getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).

# version (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The version of this structure. It should be set to 0.

## Declaration

```objectivec
unsigned int version;
```

## See Also

### Instance Properties

- [getBytePointer](getbytepointer.md): A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).
- [getBytesAtPosition](getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).
