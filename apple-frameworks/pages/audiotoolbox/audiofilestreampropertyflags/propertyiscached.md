> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreampropertyflags/propertyiscached](https://developer.apple.com/documentation/audiotoolbox/audiofilestreampropertyflags/propertyiscached)

# propertyIsCached (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This flag is set when the callback [AudioFileStream_PropertyListenerProc](../audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.

## Declaration

```swift
static var propertyIsCached: AudioFileStreamPropertyFlags { get }
```

<a id="Discussion"></a>

## Discussion

If this flag is not set,  get the value of the property from within this callback or set the [cacheProperty](cacheproperty.md) flag to instruct the parser to begin caching the property data. Otherwise, the value will not be available after the callback returns.

## See Also

### Constants

- [cacheProperty](cacheproperty.md): A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.

# kAudioFileStreamPropertyFlag_PropertyIsCached (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

This flag is set when the callback [AudioFileStream_PropertyListenerProc](../audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.

## Declaration

```objectivec
kAudioFileStreamPropertyFlag_PropertyIsCached
```

<a id="Discussion"></a>

## Discussion

If this flag is not set,  get the value of the property from within this callback or set the [kAudioFileStreamPropertyFlag_CacheProperty](cacheproperty.md) flag to instruct the parser to begin caching the property data. Otherwise, the value will not be available after the callback returns.

## See Also

### Constants

- [kAudioFileStreamPropertyFlag_CacheProperty](cacheproperty.md): A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.
