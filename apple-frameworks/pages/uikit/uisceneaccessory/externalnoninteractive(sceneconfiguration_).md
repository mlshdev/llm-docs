> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneaccessory/externalnoninteractive(sceneconfiguration:)](https://developer.apple.com/documentation/uikit/uisceneaccessory/externalnoninteractive(sceneconfiguration:))

# externalNonInteractive(sceneConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a new scene accessory configuration for presenting non-interactive content on an external display.

## Declaration

```swift
class func externalNonInteractive(sceneConfiguration: UISceneConfiguration) -> Self
```

## Parameters

- `sceneConfiguration`: A scene configuration value with delegate type defined for it.

<a id="discussion"></a>

## Discussion

When the display connects, the scene accessory’s content may be presented on it.

# externalNonInteractiveSceneAccessoryWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates a new scene accessory configuration for presenting non-interactive content on an external display.

## Declaration

```objectivec
+ (instancetype) externalNonInteractiveSceneAccessoryWithConfiguration:(UISceneConfiguration *) sceneConfiguration;
```

## Parameters

- `sceneConfiguration`: A scene configuration value with delegate type defined for it.

<a id="discussion"></a>

## Discussion

When the display connects, the scene accessory’s content may be presented on it.
