> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/sizerestrictions](https://developer.apple.com/documentation/uikit/uiwindowscene/sizerestrictions)

# sizeRestrictions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The minimum and maximum size of the app’s windows.

## Declaration

```swift
var sizeRestrictions: UISceneSizeRestrictions? { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is not `nil`, use it to change the default minimum and maximum window sizes for your app. If the value of this property is `nil,` the system doesn’t allow you to set window size restrictions.

## See Also

### Getting the interface attributes

- [traitCollection](traitcollection.md): The traits that describe the current environment of the scene.
- [UISceneSizeRestrictions](../uiscenesizerestrictions.md): An object that specifies the minimum and maximum sizes for resizable windows.

# sizeRestrictions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The minimum and maximum size of the app’s windows.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UISceneSizeRestrictions * sizeRestrictions;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is not `nil`, use it to change the default minimum and maximum window sizes for your app. If the value of this property is `nil,` the system doesn’t allow you to set window size restrictions.

## See Also

### Getting the interface attributes

- [traitCollection](traitcollection.md): The traits that describe the current environment of the scene.
- [UISceneSizeRestrictions](../uiscenesizerestrictions.md): An object that specifies the minimum and maximum sizes for resizable windows.
