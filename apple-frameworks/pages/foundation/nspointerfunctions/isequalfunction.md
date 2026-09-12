> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/isequalfunction](https://developer.apple.com/documentation/foundation/nspointerfunctions/isequalfunction)

# isEqualFunction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to compare pointers.

## Declaration

```swift
var isEqualFunction: ((UnsafeRawPointer, UnsafeRawPointer, ((UnsafeRawPointer) -> Int)?) -> ObjCBool)? { get set }
```

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.

# isEqualFunction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to compare pointers.

## Declaration

```objectivec
@property (nullable) _Bool (*)(const void *, const void *, unsigned long (*)(const void *)) isEqualFunction;
```

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.
