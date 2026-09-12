> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnamespecifier/init(containerclassdescription:containerspecifier:key:name:)](https://developer.apple.com/documentation/foundation/nsnamespecifier/init(containerclassdescription:containerspecifier:key:name:))

# init(containerClassDescription:containerSpecifier:key:name:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and then sets the name instance variable to `name`.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, name: String)
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:name: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and then sets the name instance variable to `name`.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property name:(NSString *) name;
```

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
