> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsglasseffectview/effectisinteractive

# effectIsInteractive (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Enables interactive glass behavior, which adds a visual response to user interactions.

## Declaration

```swift
var effectIsInteractive: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This should be enabled for glass that is used as the background for interactive controls or when used as the container of interactive controls.

When `YES`, the glass effect will provide visual feedback when it is interacted with. When `NO`, the glass effect remains static. The default value is `NO`.

# effectIsInteractive (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

Enables interactive glass behavior, which adds a visual response to user interactions.

## Declaration

```objectivec
@property BOOL effectIsInteractive;
```

<a id="discussion"></a>

## Discussion

This should be enabled for glass that is used as the background for interactive controls or when used as the container of interactive controls.

When `YES`, the glass effect will provide visual feedback when it is interacted with. When `NO`, the glass effect remains static. The default value is `NO`.
