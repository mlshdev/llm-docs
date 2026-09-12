> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/binaryfloatingpoint/init(exactly:)](https://developer.apple.com/documentation/swift/binaryfloatingpoint/init(exactly:))

# init(exactly:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the given value, if it can be represented exactly.

## Declaration

```swift
init?<Source>(exactly value: Source) where Source : BinaryFloatingPoint
```

## Parameters

- `value`: A floating-point value to be converted.

<a id="discussion"></a>

## Discussion

If the given floating-point value cannot be represented exactly, the result is `nil`. A value that is NaN (“not a number”) cannot be represented exactly if its payload cannot be encoded exactly.

## Default Implementations

### BinaryFloatingPoint Implementations

- [init(exactly:)](init%28exactly_%29-6fobm.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](init%28exactly_%29-9lyid.md): Conforms when `RawSignificand` conforms to `FixedWidthInteger`. Creates a new value, if the given integer can be represented exactly.
