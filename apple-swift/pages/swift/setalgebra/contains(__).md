> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/setalgebra/contains(_:)](https://developer.apple.com/documentation/swift/setalgebra/contains(_:))

# contains(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the given element exists in the set.

## Declaration

```swift
func contains(_ member: Self.Element) -> Bool
```

## Parameters

- `member`: An element to look for in the set.

<a id="return-value"></a>

## Return Value

`true` if `member` exists in the set; otherwise, `false`.

<a id="discussion"></a>

## Discussion

This example uses the `contains(_:)` method to test whether an integer is a member of a set of prime numbers.

```swift
let primes: Set = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]
let x = 5
if primes.contains(x) {
    print("\(x) is prime!")
} else {
    print("\(x). Not prime.")
}
// Prints "5 is prime!"
```

## Default Implementations

### SetAlgebra Implementations

- [contains(\_:)](contains%28__%29-xkyd.md): Conforms when `Self` is `Self.Element`. Returns a Boolean value that indicates whether a given element is a member of the option set.

## See Also

### Testing for Membership

- [Element](element.md): A type for which the conforming type provides a containment test.
