> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidersequentialcallbacks/releaseinfo](https://developer.apple.com/documentation/coregraphics/cgdataprovidersequentialcallbacks/releaseinfo)

# releaseInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).

## Declaration

```swift
var releaseInfo: CGDataProviderReleaseInfoCallback?
```

## See Also

### Instance Properties

- [getBytes](getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md).
- [rewind](rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md).
- [skipForward](skipforward.md): A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.
- [version](version.md): The version of this structure. It should be set to 0.

# releaseInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).

## Declaration

```objectivec
CGDataProviderReleaseInfoCallback releaseInfo;
```

## See Also

### Instance Properties

- [getBytes](getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md).
- [rewind](rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md).
- [skipForward](skipforward.md): A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.
- [version](version.md): The version of this structure. It should be set to 0.
