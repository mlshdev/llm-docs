> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswhosespecifier/init(containerclassdescription:containerspecifier:key:test:)](https://developer.apple.com/documentation/foundation/nswhosespecifier/init(containerclassdescription:containerspecifier:key:test:))

# init(containerClassDescription:containerSpecifier:key:test:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSWhoseSpecifier` object initialized with the given attributes.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, test: NSScriptWhoseTest)
```

## Parameters

- `classDesc`: Class description for the receiver’s container object.
- `container`: An object specifier for the receiver’s container object.
- `property`: The key for the property for which to test.
- `test`: The test condition.

<a id="return-value"></a>

## Return Value

An `NSWhoseSpecifier` object initialized with the given attributes.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) and sets the whose test condition to `test`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:test: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSWhoseSpecifier` object initialized with the given attributes.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property test:(NSScriptWhoseTest *) test;
```

## Parameters

- `classDesc`: Class description for the receiver’s container object.
- `container`: An object specifier for the receiver’s container object.
- `property`: The key for the property for which to test.
- `test`: The test condition.

<a id="return-value"></a>

## Return Value

An `NSWhoseSpecifier` object initialized with the given attributes.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) and sets the whose test condition to `test`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
