> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/subtitle](https://developer.apple.com/documentation/uikit/uiscene/subtitle)

# subtitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A string that the app displays in the title bar of a window when running in macOS.

## Declaration

```swift
var subtitle: String { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is an empty string, the system removes the subtitle from the window layout. The default value is an empty string.

> **Note**

>  Apps running in iOS ignore the [subtitle](subtitle.md) property.

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [UIScene.ActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.

# subtitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A string that the app displays in the title bar of a window when running in macOS.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * subtitle;
```

<a id="Discussion"></a>

## Discussion

When this property is an empty string, the system removes the subtitle from the window layout. The default value is an empty string.

> **Note**

>  Apps running in iOS ignore the [subtitle](subtitle.md) property.

## See Also

### Getting the scene attributes

- [activationState](activationstate-swift.property.md): The current execution state of the scene.
- [UISceneActivationState](activationstate-swift.enum.md): Constants that indicate the foreground or background execution state of your app.
- [title](title.md): A user-visible string you supply to help users differentiate among your app’s scenes.
