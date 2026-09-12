> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneaccessoryregistration/isavailable](https://developer.apple.com/documentation/uikit/uisceneaccessoryregistration/isavailable)

# isAvailable (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Whether the associated scene accessory is available for display by the system or not.

## Declaration

```swift
var isAvailable: Bool { get }
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This value is observable during the `updateProperties` and `layoutSubviews` lifecycle events.

## See Also

### Observing availability and controlling display

- [isEnabled](isenabled.md): Whether the content defined by this scene accessory should be displayed or not.

# available (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Whether the associated scene accessory is available for display by the system or not.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAvailable) BOOL available;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="discussion"></a>

## Discussion

This value is observable during the `updateProperties` and `layoutSubviews` lifecycle events.

## See Also

### Observing availability and controlling display

- [enabled](isenabled.md): Whether the content defined by this scene accessory should be displayed or not.
