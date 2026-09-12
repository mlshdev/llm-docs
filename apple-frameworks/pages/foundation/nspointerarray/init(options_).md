> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerarray/init(options:)](https://developer.apple.com/documentation/foundation/nspointerarray/init(options:))

# init(options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver to use the given options.

## Declaration

```swift
init(options: NSPointerFunctions.Options = [])
```

## Parameters

- `options`: The pointer functions options for the new instance.

<a id="return-value"></a>

## Return Value

The receiver, initialized to use the given options.

## See Also

### Related Documentation

- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating and Initializing a New Pointer Array

- [init(pointerFunctions:)](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [strongObjects()](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [weakObjects()](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.

# initWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the receiver to use the given options.

## Declaration

```objectivec
- (instancetype) initWithOptions:(NSPointerFunctionsOptions) options;
```

## Parameters

- `options`: The pointer functions options for the new instance.

<a id="return-value"></a>

## Return Value

The receiver, initialized to use the given options.

## See Also

### Related Documentation

- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [Collections Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Collections/Collections.html#//apple_ref/doc/uid/10000034i)

### Creating and Initializing a New Pointer Array

- [initWithPointerFunctions:](init%28pointerfunctions_%29.md): Initializes the receiver to use the given functions.
- [pointerArrayWithOptions:](pointerarraywithoptions_.md): Returns a new pointer array initialized to use the given options.
- [pointerArrayWithPointerFunctions:](pointerarraywithpointerfunctions_.md): A new pointer array initialized to use the given functions.
- [strongObjectsPointerArray](strongobjects%28%29.md): Returns a new pointer array that maintains strong references to its elements.
- [pointerArrayWithStrongObjects](pointerarraywithstrongobjects.md): Deprecated. Returns a new pointer array that maintains strong references to its elements.
- [weakObjectsPointerArray](weakobjects%28%29.md): Returns a new pointer array that maintains weak references to its elements.
- [pointerArrayWithWeakObjects](pointerarraywithweakobjects.md): Deprecated. Returns a new pointer array that maintains weak references to its elements.
