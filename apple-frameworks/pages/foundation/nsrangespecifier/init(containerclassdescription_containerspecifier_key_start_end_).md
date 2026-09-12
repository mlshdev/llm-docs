> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrangespecifier/init(containerclassdescription:containerspecifier:key:start:end:)](https://developer.apple.com/documentation/foundation/nsrangespecifier/init(containerclassdescription:containerspecifier:key:start:end:))

# init(containerClassDescription:containerSpecifier:key:start:end:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a range specifier initialized with the given properties.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, start startSpec: NSScriptObjectSpecifier?, end endSpec: NSScriptObjectSpecifier?)
```

## Parameters

- `classDesc`: The class description.
- `container`: The container.
- `property`: The property.
- `startSpec`: The object specifier representing the first object of the range.
- `endSpec`: The object specifier representing the last object of the range.

<a id="return-value"></a>

## Return Value

A range specifier initialized with the given properties.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the instance with the object specifiers representing the starting element, `startSpec`, and the ending element, `endSpec`, of a range of elements in the container.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:startSpecifier:endSpecifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a range specifier initialized with the given properties.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property startSpecifier:(NSScriptObjectSpecifier *) startSpec endSpecifier:(NSScriptObjectSpecifier *) endSpec;
```

## Parameters

- `classDesc`: The class description.
- `container`: The container.
- `property`: The property.
- `startSpec`: The object specifier representing the first object of the range.
- `endSpec`: The object specifier representing the last object of the range.

<a id="return-value"></a>

## Return Value

A range specifier initialized with the given properties.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the instance with the object specifiers representing the starting element, `startSpec`, and the ending element, `endSpec`, of a range of elements in the container.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
