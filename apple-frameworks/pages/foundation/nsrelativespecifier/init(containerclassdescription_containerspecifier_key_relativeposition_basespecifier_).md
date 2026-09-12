> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrelativespecifier/init(containerclassdescription:containerspecifier:key:relativeposition:basespecifier:)](https://developer.apple.com/documentation/foundation/nsrelativespecifier/init(containerclassdescription:containerspecifier:key:relativeposition:basespecifier:))

# init(containerClassDescription:containerSpecifier:key:relativePosition:baseSpecifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the relative position and base specifier to `relPos` and `baseSpecifier`.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, relativePosition relPos: NSRelativeSpecifier.RelativePosition, baseSpecifier: NSScriptObjectSpecifier?)
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:relativePosition:baseSpecifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the relative position and base specifier to `relPos` and `baseSpecifier`.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property relativePosition:(NSRelativePosition) relPos baseSpecifier:(NSScriptObjectSpecifier *) baseSpecifier;
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
