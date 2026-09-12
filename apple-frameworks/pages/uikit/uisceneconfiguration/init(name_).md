> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneconfiguration/init(name:)](https://developer.apple.com/documentation/uikit/uisceneconfiguration/init(name:))

# init(name:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a scene-configuration object with the specified name.

## Declaration

```swift
convenience init(name: String?)
```

<a id="discussion"></a>

## Discussion

Scene sessions created from this configuration will have their role automatically set by the system.

## See Also

### Creating a configuration object

- [init(name:sessionRole:)](init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [init()](init%28%29.md): Creates a scene-configuration object.

# initWithName: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a scene-configuration object with the specified name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

<a id="discussion"></a>

## Discussion

Scene sessions created from this configuration will have their role automatically set by the system.

## See Also

### Creating a configuration object

- [configurationWithName:sessionRole:](configurationwithname_sessionrole_.md): Returns a scene-configuration object with the specified role and app-specific name.
- [initWithName:sessionRole:](init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [init](init%28%29.md): Creates a scene-configuration object.
