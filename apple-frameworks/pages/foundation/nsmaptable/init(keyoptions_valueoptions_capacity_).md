> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmaptable/init(keyoptions:valueoptions:capacity:)](https://developer.apple.com/documentation/foundation/nsmaptable/init(keyoptions:valueoptions:capacity:))

# init(keyOptions:valueOptions:capacity:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a map table, initialized with the given options.

## Declaration

```swift
init(keyOptions: NSPointerFunctions.Options = [], valueOptions: NSPointerFunctions.Options = [], capacity initialCapacity: Int)
```

## Parameters

- `keyOptions`: A bit field that specifies the options for the keys in the map table. For possible values, see [NSMapTableOptions](../nsmaptableoptions.md).
- `valueOptions`: A bit field that specifies the options for the values in the map table. For possible values, see [NSMapTableOptions](../nsmaptableoptions.md).
- `initialCapacity`: The initial capacity of the map table. This is just a hint; the map table may subsequently grow and shrink as required.

<a id="return-value"></a>

## Return Value

A map table initialized using the given options.

<a id="Discussion"></a>

## Discussion

`values` must contain entries at all the indexes specified in `keys`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating and Initializing a Map Table

- [init(keyOptions:valueOptions:)](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [init(keyPointerFunctions:valuePointerFunctions:capacity:)](init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjects()](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjects()](weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjects()](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjects()](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.

# initWithKeyOptions:valueOptions:capacity: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a map table, initialized with the given options.

## Declaration

```objectivec
- (instancetype) initWithKeyOptions:(NSPointerFunctionsOptions) keyOptions valueOptions:(NSPointerFunctionsOptions) valueOptions capacity:(NSUInteger) initialCapacity;
```

## Parameters

- `keyOptions`: A bit field that specifies the options for the keys in the map table. For possible values, see [NSMapTableOptions](../nsmaptableoptions.md).
- `valueOptions`: A bit field that specifies the options for the values in the map table. For possible values, see [NSMapTableOptions](../nsmaptableoptions.md).
- `initialCapacity`: The initial capacity of the map table. This is just a hint; the map table may subsequently grow and shrink as required.

<a id="return-value"></a>

## Return Value

A map table initialized using the given options.

<a id="Discussion"></a>

## Discussion

`values` must contain entries at all the indexes specified in `keys`.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating and Initializing a Map Table

- [mapTableWithKeyOptions:valueOptions:](init%28keyoptions_valueoptions_%29.md): Returns a new map table, initialized with the given options
- [initWithKeyPointerFunctions:valuePointerFunctions:capacity:](init%28keypointerfunctions_valuepointerfunctions_capacity_%29.md): Returns a map table, initialized with the given functions.
- [strongToStrongObjectsMapTable](strongtostrongobjects%28%29.md): Returns a new map table object which has strong references to the keys and values.
- [weakToStrongObjectsMapTable](weaktostrongobjects%28%29.md): Returns a new map table object which has weak references to the keys and strong references to the values.
- [strongToWeakObjectsMapTable](strongtoweakobjects%28%29.md): Returns a new map table object which has strong references to the keys and weak references to the values.
- [weakToWeakObjectsMapTable](weaktoweakobjects%28%29.md): Returns a new map table object which has weak references to the keys and values.
- [NSMapTableOptions](../nsmaptableoptions.md): Constants used as components in a bitfield to specify the behavior of elements (keys and values) in an `NSMapTable` object.
