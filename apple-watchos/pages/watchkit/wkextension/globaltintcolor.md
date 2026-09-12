> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/globaltintcolor](https://developer.apple.com/documentation/watchkit/wkextension/globaltintcolor)

# globalTintColor (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The watchOS app’s global tint color.

## Declaration

```swift
var globalTintColor: UIColor { get }
```

<a id="Discussion"></a>

## Discussion

This property provides access to the global tint color so that you can match the color elsewhere in your user interface. You specify the global tint color in the app’s storyboard, or in the asset catalog. If you don’t set a global tint color, this property returns the system default tint color.

For more information, see [Setting the app’s accent color](../../watchos-apps/setting-the-app-s-accent-color.md).

## See Also

### Managing the user interface

- [isAutorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [enableWaterLock()](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.

# globalTintColor (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The watchOS app’s global tint color.

## Declaration

```objectivec
@property (nonatomic, readonly) UIColor * globalTintColor;
```

<a id="Discussion"></a>

## Discussion

This property provides access to the global tint color so that you can match the color elsewhere in your user interface. You specify the global tint color in the app’s storyboard, or in the asset catalog. If you don’t set a global tint color, this property returns the system default tint color.

For more information, see [Setting the app’s accent color](../../watchos-apps/setting-the-app-s-accent-color.md).

## See Also

### Managing the user interface

- [autorotating](isautorotating.md): Deprecated. A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](isautorotated.md): Deprecated. A Boolean value that indicates whether the system has automatically rotated the user interface so that it is properly oriented for another viewer.
- [enableWaterLock](enablewaterlock%28%29.md): Deprecated. Disables the Apple Watch touch screen to prevent accidental taps while the watch is underwater.
