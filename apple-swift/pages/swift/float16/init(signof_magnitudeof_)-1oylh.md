> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/init(signof:magnitudeof:)-1oylh](https://developer.apple.com/documentation/swift/float16/init(signof:magnitudeof:)-1oylh)

# init(signOf:magnitudeOf:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new floating-point value using the sign of one value and the magnitude of another.

## Declaration

```swift
init(signOf: Self, magnitudeOf: Self)
```

## Parameters

- `signOf`: A value from which to use the sign. The result of the initializer has the same sign as `signOf`.
- `magnitudeOf`: A value from which to use the magnitude. The result of the initializer has the same magnitude as `magnitudeOf`.

<a id="discussion"></a>

## Discussion

The following example uses this initializer to create a new `Double` instance with the sign of `a` and the magnitude of `b`:

```swift
let a = -21.5
let b = 305.15
let c = Double(signOf: a, magnitudeOf: b)
print(c)
// Prints "-305.15"
```

This initializer implements the IEEE 754 `copysign` operation.
