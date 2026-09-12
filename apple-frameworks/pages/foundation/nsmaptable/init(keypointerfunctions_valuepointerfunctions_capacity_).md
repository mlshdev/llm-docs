> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/init(keypointerfunctions:valuepointerfunctions:capacity:)](https://developer.apple.com/documentation/foundation/nsmaptable/init(keypointerfunctions:valuepointerfunctions:capacity:))

# init(keyPointerFunctions:valuePointerFunctions:capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a map table, initialized with the given functions.

## Declaration

```swift
init(keyPointerFunctions keyFunctions: NSPointerFunctions, valuePointerFunctions valueFunctions: NSPointerFunctions, capacity initialCapacity: Int)
```

## Parameters

- `keyFunctions`: The functions the map table uses to manage keys.
- `valueFunctions`: The functions the map table uses to manage values.
- `initialCapacity`: The initial capacity of the map table. This is just a hint; the map table may subsequently grow and shrink as required.

<a id="return-value"></a>

## Return Value

A map table, initialized with the given functions.

## See Also

### Creating and Initializing a Map Table

- [init(keyOptions:valueOptions:capacity:)](init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [init(keyOptions:valueOptions:)](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [strongToStrongObjects()](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjects()](weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjects()](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjects()](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

# initWithKeyPointerFunctions:valuePointerFunctions:capacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a map table, initialized with the given functions.

## Declaration

```objectivec
- (instancetype) initWithKeyPointerFunctions:(NSPointerFunctions *) keyFunctions valuePointerFunctions:(NSPointerFunctions *) valueFunctions capacity:(NSUInteger) initialCapacity;
```

## Parameters

- `keyFunctions`: The functions the map table uses to manage keys.
- `valueFunctions`: The functions the map table uses to manage values.
- `initialCapacity`: The initial capacity of the map table. This is just a hint; the map table may subsequently grow and shrink as required.

<a id="return-value"></a>

## Return Value

A map table, initialized with the given functions.

## See Also

### Creating and Initializing a Map Table

- [initWithKeyOptions:valueOptions:capacity:](init%28keyoptions_valueoptions_capacity_%29.md): Returns a map table, initialized with the given options.
- [mapTableWithKeyOptions:valueOptions:](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [strongToStrongObjectsMapTable](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjectsMapTable](weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjectsMapTable](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjectsMapTable](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
