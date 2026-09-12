> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryinteger/init(_:)-8gmdl](https://developer.apple.com/documentation/swift/binaryinteger/init(_:)-8gmdl)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

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

## Default Implementations

### BinaryInteger Implementations

- [init(\_:)](init%28__%29-3cx61.md): Creates a new integer value from the given string.
- [init(\_:)](init%28__%29-5yrn0.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.
- [init(\_:)](init%28__%29-62cdc.md)
- [init(\_:)](init%28__%29-6u4mr.md): Conforms when `Self` conforms to `FixedWidthInteger`. Creates a new instance from the given integer.

### FixedWidthInteger Implementations

- [init(\_:)](../fixedwidthinteger/init%28__%29.md): Convert from an Backtrace.Address.

## See Also

### Converting Integers

- [init(clamping:)](init%28clamping_%29.md): Creates a new instance with the representable value that’s closest to the given integer.
- [init(truncatingIfNeeded:)](init%28truncatingifneeded_%29.md): Creates a new instance from the bit pattern of the given instance by sign-extending or truncating to fit this type.
