> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsindexspecifier/init(containerclassdescription:containerspecifier:key:index:)](https://developer.apple.com/documentation/foundation/nsindexspecifier/init(containerclassdescription:containerspecifier:key:index:))

# init(containerClassDescription:containerSpecifier:key:index:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes an allocated [NSIndexSpecifier](../nsindexspecifier.md) object with a class description, container specifier, collection key, and object index.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String, index: Int)
```

## Parameters

- `classDesc`: Description for the container of the collection.
- `container`: Container of the collection.
- `property`: Name of the collection.
- `index`: The object within the `key` collection the index specifier is to identify.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSpecifier](../nsindexspecifier.md) object with its `index` property set to `objectIndex`.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and sets the `index` property of the index specifier to `objectIndex`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithContainerClassDescription:containerSpecifier:key:index: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Initializes an allocated [NSIndexSpecifier](../nsindexspecifier.md) object with a class description, container specifier, collection key, and object index.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property index:(NSInteger) index;
```

## Parameters

- `classDesc`: Description for the container of the collection.
- `container`: Container of the collection.
- `property`: Name of the collection.
- `index`: The object within the `key` collection the index specifier is to identify.

<a id="return-value"></a>

## Return Value

Initialized [NSIndexSpecifier](../nsindexspecifier.md) object with its `index` property set to `objectIndex`.

<a id="Discussion"></a>

## Discussion

Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](../nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and sets the `index` property of the index specifier to `objectIndex`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
