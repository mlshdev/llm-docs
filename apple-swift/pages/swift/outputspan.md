> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/outputspan](https://developer.apple.com/documentation/swift/outputspan)

# OutputSpan

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

`OutputSpan` is a reference to a contiguous region of memory that starts with some number of initialized `Element` instances followed by uninitialized memory. It provides operations to access the items it stores, as well as to add new elements and to remove existing ones.

## Declaration

```swift
@frozen struct OutputSpan<Element> where Element : ~Copyable
```

## Topics

### Initializers

- [init()](outputspan/init%28%29.md): Create an OutputSpan with zero capacity.
- [init(buffer:initializedCount:)](outputspan/init%28buffer_initializedcount_%29-3tbg3.md): Unsafely create an OutputSpan over partly-initialized memory.
- [init(buffer:initializedCount:)](outputspan/init%28buffer_initializedcount_%29-vie3.md): Unsafely create an OutputSpan over partly-initialized memory.

### Instance Properties

- [capacity](outputspan/capacity.md): The total number of elements that this output span can contain.
- [count](outputspan/count.md): The number of initialized elements in this span.
- [freeCapacity](outputspan/freecapacity.md): The number of additional elements that can be added to this span.
- [indices](outputspan/indices.md): The range of initialized indices for this `OutputSpan`.
- [isEmpty](outputspan/isempty.md): A Boolean value indicating whether the span is empty.
- [isFull](outputspan/isfull.md): A Boolean value indicating whether the span is full.
- [mutableSpan](outputspan/mutablespan.md): Exclusively borrow the underlying initialized memory for mutation.
- [span](outputspan/span.md): Borrow the underlying initialized memory for read-only access.

### Instance Methods

- [append(\_:)](outputspan/append%28__%29.md): Append a single element to this span.
- [append(repeating:count:)](outputspan/append%28repeating_count_%29.md): Repeatedly append an element to this span.
- [finalize(for:)](outputspan/finalize%28for_%29-5utkq.md): Consume the output span and return the number of initialized elements.
- [finalize(for:)](outputspan/finalize%28for_%29-83pw0.md): Consume the output span and return the number of initialized elements.
- [removeAll()](outputspan/removeall%28%29.md): Remove all this span’s elements and return its memory to the uninitialized state.
- [removeLast()](outputspan/removelast%28%29.md): Remove the last initialized element from this span.
- [removeLast(\_:)](outputspan/removelast%28__%29.md): Remove the last n elements of this span, returning the memory they occupy to the uninitialized state.
- [swapAt(\_:\_:)](outputspan/swapat%28____%29.md): Exchange the elements at the two given indices.
- [swapAt(unchecked:unchecked:)](outputspan/swapat%28unchecked_unchecked_%29.md): Exchange the elements at the two given indices.
- [withUnsafeMutableBufferPointer(\_:)](outputspan/withunsafemutablebufferpointer%28__%29.md): Call the given closure with the unsafe buffer pointer addressed by this OutputSpan and a mutable reference to its count of initialized elements.

### Subscripts

- [subscript(\_:)](outputspan/subscript%28__%29.md): Accesses the element at the specified index.
- [subscript(unchecked:)](outputspan/subscript%28unchecked_%29.md): Accesses the element at the specified index.

### Type Aliases

- [OutputSpan.Index](outputspan/index.md): The type that represents an initialized index in an `OutputSpan`.

### Default Implementations

- [Iterable Implementations](outputspan/iterable-implementations.md)

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
- [OutputRawSpan](outputrawspan.md): `OutputRawSpan` is a reference to a contiguous region of memory which starts with some number of initialized bytes, followed by uninitialized memory. It provides operations to access the bytes it stores, as well as to append and to remove bytes.
- [UTF8Span](utf8span.md): A borrowed view into contiguous memory that contains validly-encoded UTF-8 code units.
- [MutableSpan](mutablespan.md): `MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [MutableRawSpan](mutablerawspan.md): `MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.
