> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/init(exactly:)-1h1oe](https://developer.apple.com/documentation/swift/float/init(exactly:)-1h1oe)

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

## See Also

### Converting with No Loss of Precision

- [init(exactly:)](init%28exactly_%29-8esr8.md): Creates a new instance from the given value, if it can be represented exactly.
- [init(exactly:)](init%28exactly_%29-89na7.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-89pn7.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-6l5fa.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
- [init(exactly:)](init%28exactly_%29-zknq.md)
- [init(exactly:)](init%28exactly_%29-8ho5q.md): Creates a new instance initialized to the given value, if it can be represented without rounding.
