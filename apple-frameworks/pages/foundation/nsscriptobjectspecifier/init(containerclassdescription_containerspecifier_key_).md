> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/init(containerclassdescription:containerspecifier:key:)](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/init(containerclassdescription:containerspecifier:key:))

# init(containerClassDescription:containerSpecifier:key:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSScriptObjectSpecifier` object initialized with the given attributes.

## Declaration

```swift
init(containerClassDescription classDesc: NSScriptClassDescription, containerSpecifier container: NSScriptObjectSpecifier?, key property: String)
```

<a id="return-value"></a>

## Return Value

An `NSScriptObjectSpecifier` object initialized with container specifier `specifier`, key `key`, and the class description of the object specifier `classDescription`, derived from the value of the specifier’s key.

<a id="Discussion"></a>

## Discussion

You should never pass `nil` for the value of `classDescription`. The receiver’s child reference is set to `nil`.

This is the designated initializer for `NSScriptObjectSpecifier`.

## See Also

### Initializing an object specifier

- [init(containerSpecifier:key:)](init%28containerspecifier_key_%29.md): Returns an `NSScriptObjectSpecifier` object initialized with a given container specifier and key.

# initWithContainerClassDescription:containerSpecifier:key: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSScriptObjectSpecifier` object initialized with the given attributes.

## Declaration

```objectivec
- (instancetype) initWithContainerClassDescription:(NSScriptClassDescription *) classDesc containerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property;
```

<a id="return-value"></a>

## Return Value

An `NSScriptObjectSpecifier` object initialized with container specifier `specifier`, key `key`, and the class description of the object specifier `classDescription`, derived from the value of the specifier’s key.

<a id="Discussion"></a>

## Discussion

You should never pass `nil` for the value of `classDescription`. The receiver’s child reference is set to `nil`.

This is the designated initializer for `NSScriptObjectSpecifier`.

## See Also

### Initializing an object specifier

- [initWithContainerSpecifier:key:](init%28containerspecifier_key_%29.md): Returns an `NSScriptObjectSpecifier` object initialized with a given container specifier and key.
