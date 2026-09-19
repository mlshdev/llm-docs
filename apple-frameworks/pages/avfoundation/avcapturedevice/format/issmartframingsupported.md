> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/issmartframingsupported

# isSmartFramingSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Returns `true` if smart framing is supported by the current format.

## Declaration

```swift
var isSmartFramingSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

An ultra wide camera device that supports dynamic aspect ratio configuration may also support “smart framing monitoring” on particular formats.

# smartFramingSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Returns `true` if smart framing is supported by the current format.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSmartFramingSupported) BOOL smartFramingSupported;
```

<a id="discussion"></a>

## Discussion

An ultra wide camera device that supports dynamic aspect ratio configuration may also support “smart framing monitoring” on particular formats.
