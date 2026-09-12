> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptobjectspecifier/init(containerspecifier:key:)](https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/init(containerspecifier:key:))

# init(containerSpecifier:key:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSScriptObjectSpecifier` object initialized with a given container specifier  and key.

## Declaration

```swift
convenience init(containerSpecifier container: NSScriptObjectSpecifier, key property: String)
```

<a id="return-value"></a>

## Return Value

An `NSScriptObjectSpecifier` object  initialized with container specifier `specifier` and key `key`.

<a id="Discussion"></a>

## Discussion

The class description of the container is set automatically.

## See Also

### Initializing an object specifier

- [init(containerClassDescription:containerSpecifier:key:)](init%28containerclassdescription_containerspecifier_key_%29.md): Returns an `NSScriptObjectSpecifier` object initialized with the given attributes.

# initWithContainerSpecifier:key: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an `NSScriptObjectSpecifier` object initialized with a given container specifier  and key.

## Declaration

```objectivec
- (instancetype) initWithContainerSpecifier:(NSScriptObjectSpecifier *) container key:(NSString *) property;
```

<a id="return-value"></a>

## Return Value

An `NSScriptObjectSpecifier` object  initialized with container specifier `specifier` and key `key`.

<a id="Discussion"></a>

## Discussion

The class description of the container is set automatically.

## See Also

### Initializing an object specifier

- [initWithContainerClassDescription:containerSpecifier:key:](init%28containerclassdescription_containerspecifier_key_%29.md): Returns an `NSScriptObjectSpecifier` object initialized with the given attributes.
