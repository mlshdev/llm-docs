> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uivibrancyeffect/notificationcenter()](https://developer.apple.com/documentation/uikit/uivibrancyeffect/notificationcenter())

# notificationCenter() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0)

Creates a vibrancy effect for use in Notification Center.

> Use [widgetPrimary()](widgetprimary%28%29.md) instead.

## Declaration

```swift
class func notificationCenter() -> UIVibrancyEffect
```

<a id="return-value"></a>

## Return Value

The vibrancy effect that’s appropriate for use in Today widgets in Notification Center. To learn more about Today widgets, see [Today](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Today.html#//apple_ref/doc/uid/TP40014214-CH11).

## See Also

### Deprecated

- [widgetPrimary()](widgetprimary%28%29.md): Deprecated. Creates a vibrancy effect suitable for use with certain supporting text and template images within a widget.
- [widgetSecondary()](widgetsecondary%28%29.md): Deprecated. Creates a vibrancy effect suitable for indicating the secondary importance or relevance of supporting text and template images within a widget.
- [widgetEffect(forVibrancyStyle:)](widgeteffect%28forvibrancystyle_%29.md): Deprecated. Creates a vibrancy effect for the specified style.

# notificationCenterVibrancyEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0)

Creates a vibrancy effect for use in Notification Center.

> Use [widgetPrimaryVibrancyEffect](widgetprimary%28%29.md) instead.

## Declaration

```objectivec
+ (UIVibrancyEffect *) notificationCenterVibrancyEffect;
```

<a id="return-value"></a>

## Return Value

The vibrancy effect that’s appropriate for use in Today widgets in Notification Center. To learn more about Today widgets, see [Today](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/Today.html#//apple_ref/doc/uid/TP40014214-CH11).

## See Also

### Deprecated

- [widgetPrimaryVibrancyEffect](widgetprimary%28%29.md): Deprecated. Creates a vibrancy effect suitable for use with certain supporting text and template images within a widget.
- [widgetSecondaryVibrancyEffect](widgetsecondary%28%29.md): Deprecated. Creates a vibrancy effect suitable for indicating the secondary importance or relevance of supporting text and template images within a widget.
- [widgetEffectForVibrancyStyle:](widgeteffect%28forvibrancystyle_%29.md): Deprecated. Creates a vibrancy effect for the specified style.
