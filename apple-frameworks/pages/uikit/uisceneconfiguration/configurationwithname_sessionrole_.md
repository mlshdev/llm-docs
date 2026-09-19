> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisceneconfiguration/configurationwithname:sessionrole:

# configurationWithName:sessionRole:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns a scene-configuration object with the specified role and app-specific name.

## Declaration

```objectivec
+ (instancetype) configurationWithName:(NSString *) name sessionRole:(UISceneSessionRole) sessionRole;
```

## See Also

### Creating a configuration object

- [initWithName:sessionRole:](init%28name_sessionrole_%29.md): Creates a scene-configuration object with the specified role and app-specific name.
- [initWithName:](init%28name_%29.md): Creates a scene-configuration object with the specified name.
- [init](init%28%29.md): Creates a scene-configuration object.
