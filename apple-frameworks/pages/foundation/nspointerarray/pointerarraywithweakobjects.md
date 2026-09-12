> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/pointerarraywithweakobjects](https://developer.apple.com/documentation/foundation/nspointerarray/pointerarraywithweakobjects)

# pointerArrayWithWeakObjects

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.5+ (deprecated in 10.8)

Returns a new pointer array that maintains weak references to its elements.

> Use the [weakObjectsPointerArray](weakobjects%28%29.md) class method.

## Declaration

```objectivec
+ (id) pointerArrayWithWeakObjects;
```

<a id="return-value"></a>

## Return Value

A new pointer array that maintains weak references to its elements.

## See Also

### Creating and Initializing a New Pointer Array

- [initWithOptions:](init%28options_%29.md): Initializes the receiver to use the given options.
- [initWithPointerFunctions:](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [strongObjectsPointerArray](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [pointerArrayWithStrongObjects](pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
