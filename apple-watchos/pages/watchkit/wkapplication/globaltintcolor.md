> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplication/globaltintcolor](https://developer.apple.com/documentation/watchkit/wkapplication/globaltintcolor)

# globalTintColor (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

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

- [isAutorotating](isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [isAutorotated](isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.

# globalTintColor (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

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

- [autorotating](isautorotating.md): A Boolean value that determines whether the interface automatically rotates when the user flips their wrist.
- [autorotated](isautorotated.md): A Boolean value that indicates whether the system has automatically rotated the user interface, orienting it properly for another viewer.
