> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptableoptions](https://developer.apple.com/documentation/foundation/nsmaptableoptions)

# NSMapTableOptions (Swift)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

## Declaration

```swift
typealias NSMapTableOptions = Int
```

## See Also

### Creating and Initializing a Map Table

- [init(keyOptions:valueOptions:capacity:)](nsmaptable/init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [init(keyOptions:valueOptions:)](nsmaptable/init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [init(keyPointerFunctions:valuePointerFunctions:capacity:)](nsmaptable/init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjects()](nsmaptable/strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjects()](nsmaptable/weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjects()](nsmaptable/strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjects()](nsmaptable/weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.

# NSMapTableOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

## Declaration

```objectivec
typedef NSUInteger NSMapTableOptions;
```

## See Also

### Creating and Initializing a Map Table

- [initWithKeyOptions:valueOptions:capacity:](nsmaptable/init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [mapTableWithKeyOptions:valueOptions:](nsmaptable/init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [initWithKeyPointerFunctions:valuePointerFunctions:capacity:](nsmaptable/init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjectsMapTable](nsmaptable/strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjectsMapTable](nsmaptable/weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjectsMapTable](nsmaptable/strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjectsMapTable](nsmaptable/weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
