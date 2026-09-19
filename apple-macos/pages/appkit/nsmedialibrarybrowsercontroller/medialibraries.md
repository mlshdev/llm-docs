> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsmedialibrarybrowsercontroller/medialibraries

# mediaLibraries (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The media library that is in use.

## Declaration

```swift
var mediaLibraries: NSMediaLibraryBrowserController.Library { get set }
```

<a id="Discussion"></a>

## Discussion

This property will be one of the values in the [NSMediaLibraryBrowserController.Library](library.md) constants.

You can set the value to use a specific library (image, audio or movie). You can also read the value to determine which is currently displayed.

# mediaLibraries (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The media library that is in use.

## Declaration

```objectivec
@property NSMediaLibrary mediaLibraries;
```

<a id="Discussion"></a>

## Discussion

This property will be one of the values in the [NSMediaLibrary](library.md) constants.

You can set the value to use a specific library (image, audio or movie). You can also read the value to determine which is currently displayed.
