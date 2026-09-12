> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputrawspan](https://developer.apple.com/documentation/swift/outputrawspan)

# OutputRawSpan

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

`OutputRawSpan` is a reference to a contiguous region of memory which starts with some number of initialized bytes, followed by uninitialized memory. It provides operations to access the bytes it stores, as well as to append and to remove bytes.

## Declaration

```swift
@frozen struct OutputRawSpan
```

## Topics

### Initializers

- [init()](outputrawspan/init%28%29.md): Create an OutputRawSpan with zero capacity.
- [init(buffer:initializedCount:)](outputrawspan/init%28buffer_initializedcount_%29-1vcj6.md): Unsafely create an OutputRawSpan over partly-initialized memory.
- [init(buffer:initializedCount:)](outputrawspan/init%28buffer_initializedcount_%29-5sduz.md): Unsafely create an OutputRawSpan over partly-initialized memory.

### Instance Properties

- [byteCount](outputrawspan/bytecount.md): The number of initialized bytes in this span.
- [byteOffsets](outputrawspan/byteoffsets.md): The indices that are valid for subscripting the span, in ascending order.
- [bytes](outputrawspan/bytes.md): Borrow the underlying initialized memory for read-only access.
- [capacity](outputrawspan/capacity.md): The total number of bytes that this output span can contain.
- [freeCapacity](outputrawspan/freecapacity.md): The number of additional bytes that can be appended to this span.
- [isEmpty](outputrawspan/isempty.md): A Boolean value indicating whether the span is empty.
- [isFull](outputrawspan/isfull.md): A Boolean value indicating whether the span is full.
- [mutableBytes](outputrawspan/mutablebytes.md): Exclusively borrow the underlying initialized memory for mutation.

### Instance Methods

- [append(\_:)](outputrawspan/append%28__%29.md): Append a single byte to this span.
- [append(\_:as:)](outputrawspan/append%28__as_%29-63w17.md): Appends the given value’s bytes to this span’s bytes.
- [append(\_:as:)](outputrawspan/append%28__as_%29-89j87.md): Appends the given value’s bytes to this span’s bytes.
- [append(\_:as:\_:)](outputrawspan/append%28__as___%29.md): Appends the given value’s bytes to this span’s bytes.
- [append(repeating:count:as:)](outputrawspan/append%28repeating_count_as_%29-1h8m1.md): Appends the given value’s bytes repeatedly to this span’s bytes.
- [append(repeating:count:as:)](outputrawspan/append%28repeating_count_as_%29-3z0bf.md): Appends the given value’s bytes repeatedly to this span’s bytes.
- [append(repeating:count:as:\_:)](outputrawspan/append%28repeating_count_as___%29.md): Appends the given value’s bytes repeatedly to this span’s bytes.
- [finalize(for:)](outputrawspan/finalize%28for_%29-4su35.md): Consume the output span and return the number of initialized bytes.
- [finalize(for:)](outputrawspan/finalize%28for_%29-8oz61.md): Consume the output span and return the number of initialized bytes.
- [removeAll()](outputrawspan/removeall%28%29.md): Remove all this span’s bytes and return its memory to the uninitialized state.
- [removeLast()](outputrawspan/removelast%28%29.md): Remove the last byte from this span.
- [removeLast(\_:)](outputrawspan/removelast%28__%29.md): Remove the last n bytes from this span, returning the memory they occupy to the uninitialized state.
- [withUnsafeMutableBytes(\_:)](outputrawspan/withunsafemutablebytes%28__%29.md): Call the given closure with the unsafe buffer pointer addressed by this OutputRawSpan and a mutable reference to its count of initialized bytes.

### Subscripts

- [subscript(\_:)](outputrawspan/subscript%28__%29.md): Accesses the byte at the specified offset in the span.
- [subscript(unchecked:)](outputrawspan/subscript%28unchecked_%29.md): Accesses the byte at the specified offset in the span.

### Default Implementations

- [Iterable Implementations](outputrawspan/iterable-implementations.md)

## Relationships

### Conforms To

- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [Iterable](iterable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Safe Memory Access

- [Span](span.md): `Span<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [RawSpan](rawspan.md): `RawSpan` represents a contiguous region of memory which contains initialized bytes.
- [OutputSpan](outputspan.md): `OutputSpan` is a reference to a contiguous region of memory that starts with some number of initialized `Element` instances followed by uninitialized memory. It provides operations to access the items it stores, as well as to add new elements and to remove existing ones.
- [UTF8Span](utf8span.md): A borrowed view into contiguous memory that contains validly-encoded UTF-8 code units.
- [MutableSpan](mutablespan.md): `MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [MutableRawSpan](mutablerawspan.md): `MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.
