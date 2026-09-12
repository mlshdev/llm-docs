> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/pointerarraywithpointerfunctions:](https://developer.apple.com/documentation/foundation/nspointerarray/pointerarraywithpointerfunctions:)

# pointerArrayWithPointerFunctions:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A new pointer array initialized to use the given functions.

## Declaration

```objectivec
+ (NSPointerArray *) pointerArrayWithPointerFunctions:(NSPointerFunctions *) functions;
```

## Parameters

- `functions`: The pointer functions for the new instance.

<a id="return-value"></a>

## Return Value

A new pointer array initialized to use the given pointer functions.

## See Also

### Creating and Initializing a New Pointer Array

- [initWithOptions:](init%28options_%29.md): Initializes the receiver to use the given options.
- [initWithPointerFunctions:](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [strongObjectsPointerArray](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [pointerArrayWithStrongObjects](pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
- [pointerArrayWithWeakObjects](pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.
