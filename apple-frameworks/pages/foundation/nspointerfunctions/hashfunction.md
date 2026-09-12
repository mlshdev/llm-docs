> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/hashfunction](https://developer.apple.com/documentation/foundation/nspointerfunctions/hashfunction)

# hashFunction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The hash function.

## Declaration

```swift
var hashFunction: ((UnsafeRawPointer, ((UnsafeRawPointer) -> Int)?) -> Int)? { get set }
```

## See Also

### Personality Functions

- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.

# hashFunction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The hash function.

## Declaration

```objectivec
@property (nullable) unsigned long (*)(const void *, unsigned long (*)(const void *)) hashFunction;
```

## See Also

### Personality Functions

- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.
