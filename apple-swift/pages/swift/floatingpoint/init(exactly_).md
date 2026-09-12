> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/floatingpoint/init(exactly:)](https://developer.apple.com/documentation/swift/floatingpoint/init(exactly:))

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value, if the given integer can be represented exactly.

## Declaration

```swift
init?<Source>(exactly value: Source) where Source : BinaryInteger
```

## Parameters

- `value`: The integer to convert to a floating-point value.

<a id="discussion"></a>

## Discussion

If the given integer cannot be represented exactly, the result is `nil`.

## Default Implementations

### BinaryFloatingPoint Implementations

- [init(exactly:)](../binaryfloatingpoint/init%28exactly_%29-6fobm.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](../binaryfloatingpoint/init%28exactly_%29-9lyid.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
