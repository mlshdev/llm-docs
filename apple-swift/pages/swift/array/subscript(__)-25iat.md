> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/array/subscript(_:)-25iat](https://developer.apple.com/documentation/swift/array/subscript(_:)-25iat)

# subscript(\_:)

**Framework:** Swift  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Accesses the element at the specified position.

## Declaration

```swift
subscript(index: Int) -> Element { get set }
```

## Parameters

- `index`: The position of the element to access. `index` must be greater than or equal to `startIndex` and less than `endIndex`.

<a id="overview"></a>

## Overview

The following example uses indexed subscripting to update an array’s second element. After assigning the new value (`"Butler"`) at a specific position, that value is immediately available at that same position.

```swift
var streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]
streets[1] = "Butler"
print(streets[1])
// Prints "Butler"
```

> **Complexity**

> Reading an element from an array is O(1). Writing is O(1) unless the array’s storage is shared with another array or uses a bridged `NSArray` instance as its storage, in which case writing is O(*n*), where *n* is the length of the array.

## See Also

### Accessing Elements

- [first](first.md): The first element of the collection.
- [last](last.md): The last element of the collection.
- [subscript(\_:)](subscript%28__%29-53fvb.md): Accesses a contiguous subrange of the array’s elements.
- [subscript(\_:)](subscript%28__%29-3kwny.md)
- [subscript(\_:)](subscript%28__%29-4h7rl.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](subscript%28__%29-3pmfg.md)
- [randomElement()](randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.
