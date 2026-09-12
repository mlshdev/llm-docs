> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/weaktostrongobjects()](https://developer.apple.com/documentation/foundation/nsmaptable/weaktostrongobjects())

# weakToStrongObjects() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new map table object which has weak references to the keys and strong references to the values.

## Declaration

```swift
class func weakToStrongObjects() -> NSMapTable<KeyType, ObjectType>
```

<a id="return-value"></a>

## Return Value

A new map table object which has weak references to the keys and strong references to the values.

<a id="Discussion"></a>

## Discussion

Use of weak-to-strong map tables is not recommended. The strong values for weak keys which get zeroed out continue to be maintained until the map table resizes itself.

## See Also

### Creating and Initializing a Map Table

- [init(keyOptions:valueOptions:capacity:)](init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [init(keyOptions:valueOptions:)](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [init(keyPointerFunctions:valuePointerFunctions:capacity:)](init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjects()](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [strongToWeakObjects()](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjects()](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

# weakToStrongObjectsMapTable (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new map table object which has weak references to the keys and strong references to the values.

## Declaration

```objectivec
+ (NSMapTable<id,id> *) weakToStrongObjectsMapTable;
```

<a id="return-value"></a>

## Return Value

A new map table object which has weak references to the keys and strong references to the values.

<a id="Discussion"></a>

## Discussion

Use of weak-to-strong map tables is not recommended. The strong values for weak keys which get zeroed out continue to be maintained until the map table resizes itself.

## See Also

### Creating and Initializing a Map Table

- [initWithKeyOptions:valueOptions:capacity:](init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [mapTableWithKeyOptions:valueOptions:](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [initWithKeyPointerFunctions:valuePointerFunctions:capacity:](init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjectsMapTable](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [strongToWeakObjectsMapTable](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjectsMapTable](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
