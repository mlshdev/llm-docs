> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/contiguousarray/init()

# init()

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new, empty array.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

This is equivalent to initializing with an empty array literal. For example:

```swift
var emptyArray = Array<Int>()
print(emptyArray.isEmpty)
// Prints "true"

emptyArray = []
print(emptyArray.isEmpty)
// Prints "true"
```
