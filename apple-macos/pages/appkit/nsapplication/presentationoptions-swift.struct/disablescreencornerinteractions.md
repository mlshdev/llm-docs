> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/presentationoptions-swift.struct/disablescreencornerinteractions](https://developer.apple.com/documentation/appkit/nsapplication/presentationoptions-swift.struct/disablescreencornerinteractions)

# disableScreenCornerInteractions (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 27.0+

Disable screen corner interactions when the application is frontmost.

## Declaration

```swift
static var disableScreenCornerInteractions: NSApplication.PresentationOptions { get }
```

<a id="discussion"></a>

## Discussion

`.autoHideDock` or `.hideDock` must also be set for this option to take effect.

# NSApplicationPresentationDisableScreenCornerInteractions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 27.0+

Disable screen corner interactions when the application is frontmost.

## Declaration

```objectivec
NSApplicationPresentationDisableScreenCornerInteractions
```

<a id="discussion"></a>

## Discussion

`.autoHideDock` or `.hideDock` must also be set for this option to take effect.
