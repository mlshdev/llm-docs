> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinsertionindicator/automaticmodeoptions-swift.struct/showwhiletracking](https://developer.apple.com/documentation/appkit/nstextinsertionindicator/automaticmodeoptions-swift.struct/showwhiletracking)

# showWhileTracking (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 14.0+

Specifies whether the insertion indicator shows during a tracking loop.

## Declaration

```swift
static var showWhileTracking: NSTextInsertionIndicator.AutomaticModeOptions { get }
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When set, the insertion indicator hides during an [NSEventTrackingRunLoopMode](../../nseventtrackingrunloopmode.md) such as while actively scrolling a view.

## See Also

### Configuring automatic mode options

- [showEffectsView](showeffectsview.md): Specifies whether a trailing glow displays during dictation.

# NSTextInsertionIndicatorAutomaticModeOptionsShowWhileTracking (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

Specifies whether the insertion indicator shows during a tracking loop.

## Declaration

```objectivec
NSTextInsertionIndicatorAutomaticModeOptionsShowWhileTracking
```

## Mentioned In

- [Adopting the system text cursor in custom text views](../../adopting-the-system-text-cursor-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

When set, the insertion indicator hides during an [NSEventTrackingRunLoopMode](../../nseventtrackingrunloopmode.md) such as while actively scrolling a view.

## See Also

### Configuring automatic mode options

- [NSTextInsertionIndicatorAutomaticModeOptionsShowEffectsView](showeffectsview.md): Specifies whether a trailing glow displays during dictation.
