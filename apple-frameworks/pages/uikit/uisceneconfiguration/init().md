> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/init()](https://developer.apple.com/documentation/uikit/uisceneconfiguration/init())

# init() (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene-configuration object.

## Declaration

```swift
convenience init()
```

<a id="discussion"></a>

## Discussion

Scene sessions created from this configuration will have their role automatically set by the system.

## See Also

### Creating a configuration object

- [init(name:sessionRole:)](init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [init(name:)](init%28name_%29.md): Creates a scene-configuration object with the specified name.

# init (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a scene-configuration object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

Scene sessions created from this configuration will have their role automatically set by the system.

## See Also

### Creating a configuration object

- [configurationWithName:sessionRole:](configurationwithname_sessionrole_.md): Returns a scene-configuration object with the specified role and app-specific name.
- [initWithName:sessionRole:](init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [initWithName:](init%28name_%29.md): Creates a scene-configuration object with the specified name.
