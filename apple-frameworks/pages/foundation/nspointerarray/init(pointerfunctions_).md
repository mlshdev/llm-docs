> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/init(pointerfunctions:)](https://developer.apple.com/documentation/foundation/nspointerarray/init(pointerfunctions:))

# init(pointerFunctions:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver to use the given functions.

## Declaration

```swift
init(pointerFunctions functions: NSPointerFunctions)
```

## Parameters

- `functions`: The pointer functions for the new instance.

<a id="return-value"></a>

## Return Value

The receiver, initialized to use the given functions.

## See Also

### Creating and Initializing a New Pointer Array

- [init(options:)](init%28options_%29.md): Initializes the receiver to use the given options.
- [strongObjects()](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [weakObjects()](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.

# initWithPointerFunctions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver to use the given functions.

## Declaration

```objectivec
- (instancetype) initWithPointerFunctions:(NSPointerFunctions *) functions;
```

## Parameters

- `functions`: The pointer functions for the new instance.

<a id="return-value"></a>

## Return Value

The receiver, initialized to use the given functions.

## See Also

### Related Documentation

- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.

### Creating and Initializing a New Pointer Array

- [initWithOptions:](init%28options_%29.md): Initializes the receiver to use the given options.
- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [strongObjectsPointerArray](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [pointerArrayWithStrongObjects](pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
- [pointerArrayWithWeakObjects](pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.
