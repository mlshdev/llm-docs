> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindow/isexcludedfromwindowsmenu

# isExcludedFromWindowsMenu (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is excluded from the application’s Windows menu.

## Declaration

```swift
var isExcludedFromWindowsMenu: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is excluded from the Windows menu; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default initial setting is [false](https://developer.apple.com/documentation/swift/false).

# excludedFromWindowsMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window is excluded from the application’s Windows menu.

## Declaration

```objectivec
@property (getter=isExcludedFromWindowsMenu) BOOL excludedFromWindowsMenu;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is excluded from the Windows menu; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default initial setting is [false](https://developer.apple.com/documentation/swift/false).
