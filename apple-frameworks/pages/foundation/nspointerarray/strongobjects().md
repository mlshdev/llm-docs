> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/strongobjects()](https://developer.apple.com/documentation/foundation/nspointerarray/strongobjects())

# strongObjects() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new pointer array that maintains strong references to its elements.

## Declaration

```swift
class func strongObjects() -> NSPointerArray
```

<a id="return-value"></a>

## Return Value

A new pointer array that maintains strong references to its elements.

## See Also

### Creating and Initializing a New Pointer Array

- [init(options:)](init%28options_%29.md): Initializes the receiver to use the given options.
- [init(pointerFunctions:)](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [weakObjects()](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.

# strongObjectsPointerArray (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new pointer array that maintains strong references to its elements.

## Declaration

```objectivec
+ (NSPointerArray *) strongObjectsPointerArray;
```

<a id="return-value"></a>

## Return Value

A new pointer array that maintains strong references to its elements.

## See Also

### Related Documentation

- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [pointerArrayWithWeakObjects](pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.

### Creating and Initializing a New Pointer Array

- [initWithOptions:](init%28options_%29.md): Initializes the receiver to use the given options.
- [initWithPointerFunctions:](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [pointerArrayWithStrongObjects](pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
- [pointerArrayWithWeakObjects](pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.
