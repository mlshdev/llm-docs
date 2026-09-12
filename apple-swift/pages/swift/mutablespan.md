> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablespan](https://developer.apple.com/documentation/swift/mutablespan)

# MutableSpan

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

`MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.

## Declaration

```swift
@frozen struct MutableSpan<Element> where Element : ~Copyable
```

## Topics

### Initializers

- [init()](mutablespan/init%28%29.md): Create an empty span.
- [init(mutableBytes:)](mutablespan/init%28mutablebytes_%29.md): Conforms when `Element` conforms to `ConvertibleFromBytes` and `ConvertibleToBytes`. Convert a raw span to a typed span.
- [init(mutating:)](mutablespan/init%28mutating_%29.md): Conforms when `Element` conforms to `ConvertibleFromBytes` and `ConvertibleToBytes`. Mutate untyped memory as a typed span.

### Instance Properties

- [bytes](mutablespan/bytes-478ye.md): Conforms when `Element` conforms to `ConvertibleToBytes`. A raw span over the memory represented by this span.
- [bytes](mutablespan/bytes-61tq.md): Construct a raw span over the memory represented by this span.
- [count](mutablespan/count.md): The number of elements in the span.
- [indices](mutablespan/indices.md): The range of valid indices for subscripting the span.
- [isEmpty](mutablespan/isempty.md): A Boolean value indicating whether the span is empty.
- [mutableBytes](mutablespan/mutablebytes-7cwoq.md): Conforms when `Element` conforms to `BitwiseCopyable`. Construct a mutable raw span over the memory represented by this span.
- [mutableBytes](mutablespan/mutablebytes-9ha97.md): Conforms when `Element` conforms to `ConvertibleFromBytes` and `ConvertibleToBytes`. A mutable raw span over the memory represented by this span.
- [span](mutablespan/span.md): Borrow the underlying initialized memory for read-only access.

### Instance Methods

- [extracting(\_:)](mutablespan/extracting%28__%29-2g8w3.md): Deprecated. Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(\_:)](mutablespan/extracting%28__%29-80srp.md): Deprecated. Constructs a new span over all the items of this span.
- [extracting(\_:)](mutablespan/extracting%28__%29-bphj.md): Deprecated. Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(droppingFirst:)](mutablespan/extracting%28droppingfirst_%29.md): Deprecated. Returns a span over all but the given number of initial elements.
- [extracting(droppingLast:)](mutablespan/extracting%28droppinglast_%29.md): Deprecated. Returns a span over all but the given number of trailing elements.
- [extracting(first:)](mutablespan/extracting%28first_%29.md): Deprecated. Returns a span containing the initial elements of this span, up to the specified maximum length.
- [extracting(last:)](mutablespan/extracting%28last_%29.md): Deprecated. Returns a span containing the trailing elements of the span, up to the given maximum length.
- [extracting(unchecked:)](mutablespan/extracting%28unchecked_%29-23qq.md): Deprecated. Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(unchecked:)](mutablespan/extracting%28unchecked_%29-4y8oj.md): Deprecated. Constructs a new span over the items within the supplied range of indices within this span.
- [swapAt(\_:\_:)](mutablespan/swapat%28____%29.md): Exchange the elements at the two given indices.
- [swapAt(unchecked:unchecked:)](mutablespan/swapat%28unchecked_unchecked_%29.md): Exchange the elements at the two given indices.
- [update(repeating:)](mutablespan/update%28repeating_%29.md): Update every element of this span to the given value.
- [withUnsafeBufferPointer(\_:)](mutablespan/withunsafebufferpointer%28__%29.md): Call a closure with a pointer to the viewed contiguous storage.
- [withUnsafeBytes(\_:)](mutablespan/withunsafebytes%28__%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Calls the given closure with a pointer to the underlying bytes of the viewed contiguous storage.
- [withUnsafeMutableBufferPointer(\_:)](mutablespan/withunsafemutablebufferpointer%28__%29.md): Call a closure with a pointer to the viewed mutable contiguous storage.
- [withUnsafeMutableBytes(\_:)](mutablespan/withunsafemutablebytes%28__%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Calls the given closure with a mutable pointer to the underlying bytes of the viewed contiguous storage.

### Subscripts

- [subscript(\_:)](mutablespan/subscript%28__%29.md): Accesses the element at the specified index in the `MutableSpan`.
- [subscript(unchecked:)](mutablespan/subscript%28unchecked_%29.md): Accesses the element at the specified index in the `MutableSpan`.

### Type Aliases

- [MutableSpan.Index](mutablespan/index.md): The type that represents an index in a `MutableSpan`.

### Default Implementations

- [Iterable Implementations](mutablespan/iterable-implementations.md)

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
- [OutputRawSpan](outputrawspan.md): `OutputRawSpan` is a reference to a contiguous region of memory which starts with some number of initialized bytes, followed by uninitialized memory. It provides operations to access the bytes it stores, as well as to append and to remove bytes.
- [UTF8Span](utf8span.md): A borrowed view into contiguous memory that contains validly-encoded UTF-8 code units.
- [MutableRawSpan](mutablerawspan.md): `MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.
