> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/flatmap(_:)](https://developer.apple.com/documentation/swift/optional/flatmap(_:))

# flatMap(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Evaluates the given closure when this `Optional` instance is not `nil`, passing the unwrapped value as a parameter.

## Declaration

```swift
func flatMap<E, U>(_ transform: (Wrapped) throws(E) -> U?) throws(E) -> U? where E : Error, U : ~Copyable
```

## Parameters

- `transform`: A closure that takes the unwrapped value of the instance.

<a id="return-value"></a>

## Return Value

The result of the given closure. If this instance is `nil`, returns `nil`.

<a id="discussion"></a>

## Discussion

Use the `flatMap` method with a closure that returns an optional value. This example performs an arithmetic operation with an optional result on an optional integer.

```swift
let possibleNumber: Int? = Int("42")
let nonOverflowingSquare = possibleNumber.flatMap { x -> Int? in
    let (result, overflowed) = x.multipliedReportingOverflow(by: x)
    return overflowed ? nil : result
}
print(nonOverflowingSquare)
// Prints "Optional(1764)"
```

## See Also

### Transforming an Optional Value

- [map(\_:)](map%28__%29.md): Evaluates the given closure when this `Optional` instance is not `nil`, passing the unwrapped value as a parameter.
