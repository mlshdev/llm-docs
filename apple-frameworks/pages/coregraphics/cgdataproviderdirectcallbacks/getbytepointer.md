> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderdirectcallbacks/getbytepointer](https://developer.apple.com/documentation/coregraphics/cgdataproviderdirectcallbacks/getbytepointer)

# getBytePointer (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).

## Declaration

```swift
var getBytePointer: CGDataProviderGetBytePointerCallback?
```

## See Also

### Instance Properties

- [getBytesAtPosition](getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).
- [version](version.md): The version of this structure. It should be set to 0.

# getBytePointer (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that returns a pointer to the provider’s data. For more information, see [CGDataProviderGetBytePointerCallback](../cgdataprovidergetbytepointercallback.md).

## Declaration

```objectivec
CGDataProviderGetBytePointerCallback getBytePointer;
```

## See Also

### Instance Properties

- [getBytesAtPosition](getbytesatposition.md): A pointer to a function that copies data from the provider.
- [releaseBytePointer](releasebytepointer.md): A pointer to a function that Core Graphics calls to release a pointer to the provider’s data. For more information, see [CGDataProviderReleaseBytePointerCallback](../cgdataproviderreleasebytepointercallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).
- [version](version.md): The version of this structure. It should be set to 0.
