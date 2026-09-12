> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreampropertyflags/cacheproperty](https://developer.apple.com/documentation/audiotoolbox/audiofilestreampropertyflags/cacheproperty)

# cacheProperty (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.

## Declaration

```swift
static var cacheProperty: AudioFileStreamPropertyFlags { get }
```

## See Also

### Constants

- [propertyIsCached](propertyiscached.md): This flag is set when the callback [AudioFileStream_PropertyListenerProc](../audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.

# kAudioFileStreamPropertyFlag_CacheProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A property listener sets this flag to instruct the parser to cache the property value so that it remains available after the callback returns.

## Declaration

```objectivec
kAudioFileStreamPropertyFlag_CacheProperty
```

## See Also

### Constants

- [kAudioFileStreamPropertyFlag_PropertyIsCached](propertyiscached.md): This flag is set when the callback [AudioFileStream_PropertyListenerProc](../audiofilestream_propertylistenerproc.md) is invoked in the case that the value of the property has been cached and can be obtained later.
