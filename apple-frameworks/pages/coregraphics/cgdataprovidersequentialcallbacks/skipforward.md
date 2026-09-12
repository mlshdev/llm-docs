> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataprovidersequentialcallbacks/skipforward](https://developer.apple.com/documentation/coregraphics/cgdataprovidersequentialcallbacks/skipforward)

# skipForward (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.

## Declaration

```swift
var skipForward: CGDataProviderSkipForwardCallback?
```

## See Also

### Instance Properties

- [getBytes](getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).
- [rewind](rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md).
- [version](version.md): The version of this structure. It should be set to 0.

# skipForward (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to a function that Core Graphics calls to advance the stream of data supplied by the provider.

## Declaration

```objectivec
CGDataProviderSkipForwardCallback skipForward;
```

## See Also

### Instance Properties

- [getBytes](getbytes.md): A pointer to a function that copies data from the provider. For more information, see [CGDataProviderGetBytesCallback](../cgdataprovidergetbytescallback.md).
- [releaseInfo](releaseinfo.md): A pointer to a function that handles clean-up for the data provider, or `NULL`. For more information, see [CGDataProviderReleaseInfoCallback](../cgdataproviderreleaseinfocallback.md).
- [rewind](rewind.md): A pointer to a function Core Graphics calls to return the provider to the beginning of the data stream. For more information, see [CGDataProviderRewindCallback](../cgdataproviderrewindcallback.md).
- [version](version.md): The version of this structure. It should be set to 0.
