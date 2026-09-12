> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuniqueidspecifier/init(containerclassdescription:containerspecifier:key:uniqueid:)](https://developer.apple.com/documentation/foundation/nsuniqueidspecifier/init(containerclassdescription:containerspecifier:key:uniqueid:))

# init(containerClassDescription:containerSpecifier:key:uniqueID:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSUniqueIDSpecifier` object, initialized with the given arguments.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, uniqueID: Any)
```

## Parameters

- `classDesc`: The class description for the new object.
- `container`: The container for the new object.
- `property`: The property for the new object.
- `uniqueID`: The unique ID for the new object.

  `uniqueID` must be an instance of `NSNumber` or `NSString`. The type should match the declared type of the attribute of the specified scriptable class whose four-character code is `'ID  '`.

<a id="return-value"></a>

## Return Value

An `NSUniqueIDSpecifier` object, initialized with the given arguments.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and sets the ID to `uniqueID`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:uniqueID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSUniqueIDSpecifier` object, initialized with the given arguments.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property uniqueID:(id) uniqueID;
```

## Parameters

- `classDesc`: The class description for the new object.
- `container`: The container for the new object.
- `property`: The property for the new object.
- `uniqueID`: The unique ID for the new object.

  `uniqueID` must be an instance of `NSNumber` or `NSString`. The type should match the declared type of the attribute of the specified scriptable class whose four-character code is `'ID  '`.

<a id="return-value"></a>

## Return Value

An `NSUniqueIDSpecifier` object, initialized with the given arguments.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and sets the ID to `uniqueID`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
