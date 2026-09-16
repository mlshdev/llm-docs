> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uint128/init(_:)-luvl

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a new instance from the given integer.

## Declaration

```swift
init<T>(_ source: T) where T : BinaryInteger
```

## Parameters

- `source`: An integer to convert. `source` must be representable in this type.

<a id="discussion"></a>

## Discussion

If the value passed as `source` is not representable in this type, a runtime error may occur.

```swift
let x = -500 as Int
let y = Int32(x)
// y == -500

// -500 is not representable as a 'UInt32' instance
let z = UInt32(x)
// Error
```
