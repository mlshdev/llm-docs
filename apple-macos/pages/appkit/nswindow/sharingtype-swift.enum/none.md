> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/sharingtype-swift.enum/none](https://developer.apple.com/documentation/appkit/nswindow/sharingtype-swift.enum/none)

# NSWindow.SharingType.none (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.5+

A legacy constant that macOS no longer uses.

## Declaration

```swift
case none
```

<a id="discussion"></a>

## Discussion

`NSWindowSharingNone` can cause content to not be available in certain sharing situations. Don’t use this value to hide or omit content from being captured. Instead, use FairPlay Streaming (FPS). For more information, read [FairPlay Streaming](https://developer.apple.com/streaming/fps/).

## See Also

### Constants

- [NSWindow.SharingType.readOnly](readonly.md)
- [readWrite](readwrite.md): Deprecated.

# NSWindowSharingNone (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.5+

A legacy constant that macOS no longer uses.

## Declaration

```objectivec
NSWindowSharingNone
```

<a id="discussion"></a>

## Discussion

`NSWindowSharingNone` can cause content to not be available in certain sharing situations. Don’t use this value to hide or omit content from being captured. Instead, use FairPlay Streaming (FPS). For more information, read [FairPlay Streaming](https://developer.apple.com/streaming/fps/).

## See Also

### Constants

- [NSWindowSharingReadOnly](readonly.md)
- [NSWindowSharingReadWrite](readwrite.md): Deprecated.
