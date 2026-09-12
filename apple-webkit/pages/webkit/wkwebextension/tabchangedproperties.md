> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/tabchangedproperties](https://developer.apple.com/documentation/webkit/wkwebextension/tabchangedproperties)

# WKWebExtension.TabChangedProperties (Swift)

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants the web extension controller and web extension context use to indicate tab changes.

## Declaration

```swift
struct TabChangedProperties
```

## Topics

### Initializers

- [init(rawValue:)](tabchangedproperties/init%28rawvalue_%29.md)

### Type Properties

- [URL](tabchangedproperties/url.md): Indicates the URL changed.
- [loading](tabchangedproperties/loading.md): Indicates the loading state changed.
- [muted](tabchangedproperties/muted.md): Indicates the muted state changed.
- [pinned](tabchangedproperties/pinned.md): Indicates the pinned state changed.
- [playingAudio](tabchangedproperties/playingaudio.md): Indicates the audio playback state changed.
- [readerMode](tabchangedproperties/readermode.md): Indicates the reader mode state changed.
- [size](tabchangedproperties/size.md): Indicates the size changed.
- [title](tabchangedproperties/title.md): Indicates the title changed.
- [zoomFactor](tabchangedproperties/zoomfactor.md): Indicates the zoom factor changed.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Structures

- [WKWebExtension.DataType](datatype.md): Constants for specifying data types for a [WKWebExtension.DataRecord](datarecord.md).
- [WKWebExtension.Error](error.md): Constants that indicate errors in the [WKWebExtension](../wkwebextension.md) domain.
- [WKWebExtension.Permission](permission.md): Constants for specifying permission in a [WKWebExtensionContext](../wkwebextensioncontext.md).

# WKWebExtensionTabChangedProperties (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants the web extension controller and web extension context use to indicate tab changes.

## Declaration

```objectivec
enum WKWebExtensionTabChangedProperties : NSUInteger;
```

## Topics

### Enumeration Cases

- [WKWebExtensionTabChangedPropertiesURL](tabchangedproperties/url.md): Indicates the URL changed.
- [WKWebExtensionTabChangedPropertiesLoading](tabchangedproperties/loading.md): Indicates the loading state changed.
- [WKWebExtensionTabChangedPropertiesMuted](tabchangedproperties/muted.md): Indicates the muted state changed.
- [WKWebExtensionTabChangedPropertiesPinned](tabchangedproperties/pinned.md): Indicates the pinned state changed.
- [WKWebExtensionTabChangedPropertiesPlayingAudio](tabchangedproperties/playingaudio.md): Indicates the audio playback state changed.
- [WKWebExtensionTabChangedPropertiesReaderMode](tabchangedproperties/readermode.md): Indicates the reader mode state changed.
- [WKWebExtensionTabChangedPropertiesSize](tabchangedproperties/size.md): Indicates the size changed.
- [WKWebExtensionTabChangedPropertiesTitle](tabchangedproperties/title.md): Indicates the title changed.
- [WKWebExtensionTabChangedPropertiesZoomFactor](tabchangedproperties/zoomfactor.md): Indicates the zoom factor changed.
- [WKWebExtensionTabChangedPropertiesNone](../wkwebextensiontabchangedproperties/wkwebextensiontabchangedpropertiesnone.md): Indicates nothing changed.

## See Also

### Enumerations

- [WKWebExtensionWindowState](windowstate.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate possible states of a window.
- [WKWebExtensionWindowType](windowtype.md): Constants used by [WKWebExtensionWindow](../wkwebextensionwindow.md) to indicate the type of a window.
