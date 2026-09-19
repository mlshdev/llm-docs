> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisceneaccessoryregistration/isenabled

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Whether the content defined by this scene accessory should be displayed or not.

## Declaration

```swift
var isEnabled: Bool { get set }
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This value does not reflect the availability of the scene accessory, which is determined by the system.

## See Also

### Observing availability and controlling display

- [isAvailable](isavailable.md): Whether the associated scene accessory is available for display by the system or not.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Whether the content defined by this scene accessory should be displayed or not.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isEnabled) BOOL enabled;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This value does not reflect the availability of the scene accessory, which is determined by the system.

## See Also

### Observing availability and controlling display

- [available](isavailable.md): Whether the associated scene accessory is available for display by the system or not.
