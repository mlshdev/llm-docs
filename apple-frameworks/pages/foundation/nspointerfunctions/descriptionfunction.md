> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspointerfunctions/descriptionfunction](https://developer.apple.com/documentation/foundation/nspointerfunctions/descriptionfunction)

# descriptionFunction (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to describe elements.

## Declaration

```swift
var descriptionFunction: ((UnsafeRawPointer) -> String?)? { get set }
```

<a id="Discussion"></a>

## Discussion

This function is used by description methods for hash and map tables.

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.

# descriptionFunction (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The function used to describe elements.

## Declaration

```objectivec
@property (nullable) NSString *(*)(const void *) descriptionFunction;
```

<a id="Discussion"></a>

## Discussion

This function is used by description methods for hash and map tables.

## See Also

### Personality Functions

- [hashFunction](hashfunction.md): The hash function.
- [isEqualFunction](isequalfunction.md): The function used to compare pointers.
- [sizeFunction](sizefunction.md): The function used to determine the size of pointers.
