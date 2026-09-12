> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/sizefunction](https://developer.apple.com/documentation/foundation/nspointerfunctions/sizefunction)

# sizeFunction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to determine the size of pointers.

## Declaration

```swift
var sizeFunction: ((UnsafeRawPointer) -> Int)? { get set }
```

<a id="Discussion"></a>

## Discussion

This function is used for copy-in operations (unless the collection has an object personality).

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.

# sizeFunction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to determine the size of pointers.

## Declaration

```objectivec
@property (nullable) unsigned long (*)(const void *) sizeFunction;
```

<a id="Discussion"></a>

## Discussion

This function is used for copy-in operations (unless the collection has an object personality).

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [descriptionFunction](descriptionfunction.md): The function used to describe elements.
