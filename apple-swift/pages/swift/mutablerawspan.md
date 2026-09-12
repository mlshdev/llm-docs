> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutablerawspan](https://developer.apple.com/documentation/swift/mutablerawspan)

# MutableRawSpan

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

`MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.

## Declaration

```swift
@frozen struct MutableRawSpan
```

## Topics

### Initializers

- [init()](mutablerawspan/init%28%29.md): Create an empty span.
- [init(elements:)](mutablerawspan/init%28elements_%29.md): Convert a typed span to a raw span.
- [init(mutating:)](mutablerawspan/init%28mutating_%29.md): Mutate the elements of a typed span as bytes.
- [init(unsafeElements:)](mutablerawspan/init%28unsafeelements_%29.md): Unsafely convert a typed span to a raw span.

### Instance Properties

- [byteCount](mutablerawspan/bytecount.md): The number of bytes in the span.
- [byteOffsets](mutablerawspan/byteoffsets.md): The valid byte offsets for accessing this span, in ascending order.
- [bytes](mutablerawspan/bytes.md): Borrow the underlying initialized memory for read-only access.
- [isEmpty](mutablerawspan/isempty.md): A Boolean value indicating whether the span is empty.

### Instance Methods

- [extracting(\_:)](mutablerawspan/extracting%28__%29-18k75.md): Deprecated. Constructs a new span over the bytes within the supplied range of positions within this span.
- [extracting(\_:)](mutablerawspan/extracting%28__%29-6fpo6.md): Deprecated. Constructs a new span over the bytes within the supplied range of positions within this span.
- [extracting(\_:)](mutablerawspan/extracting%28__%29-7d5f1.md): Deprecated. Constructs a new span over all the bytes of this span.
- [extracting(droppingFirst:)](mutablerawspan/extracting%28droppingfirst_%29.md): Deprecated. Returns a span over all but the given number of initial bytes.
- [extracting(droppingLast:)](mutablerawspan/extracting%28droppinglast_%29.md): Deprecated. Returns a span over all but the given number of trailing bytes.
- [extracting(first:)](mutablerawspan/extracting%28first_%29.md): Deprecated. Returns a span containing the initial bytes of this span, up to the specified maximum length.
- [extracting(last:)](mutablerawspan/extracting%28last_%29.md): Deprecated. Returns a span containing the trailing bytes of the span, up to the given maximum length.
- [extracting(unchecked:)](mutablerawspan/extracting%28unchecked_%29-4b7xa.md): Deprecated. Constructs a new span over the bytes within the supplied range of positions within this span.
- [extracting(unchecked:)](mutablerawspan/extracting%28unchecked_%29-7oy38.md): Deprecated. Constructs a new span over the bytes within the supplied range of positions within this span.
- [load(fromByteOffset:as:)](mutablerawspan/load%28frombyteoffset_as_%29.md): Returns a value constructed from the raw memory at the specified offset.
- [load(fromByteOffset:as:\_:)](mutablerawspan/load%28frombyteoffset_as___%29.md): Returns a value constructed from the raw memory at the specified offset.
- [storeBytes(of:toByteOffset:as:)](mutablerawspan/storebytes%28of_tobyteoffset_as_%29-1afju.md): Stores the given value’s bytes to the specified offset into the span’s memory.
- [storeBytes(of:toByteOffset:as:)](mutablerawspan/storebytes%28of_tobyteoffset_as_%29-37pwo.md): Stores the given value’s bytes into the span’s raw memory at the specified byte offset.
- [storeBytes(of:toByteOffset:as:\_:)](mutablerawspan/storebytes%28of_tobyteoffset_as___%29.md): Stores the given value’s bytes to the specified offset into the span’s memory.
- [storeBytes(of:toUncheckedByteOffset:as:)](mutablerawspan/storebytes%28of_touncheckedbyteoffset_as_%29.md): Stores the given value’s bytes into the span’s raw memory at the specified byte offset.
- [storeBytes(repeating:count:as:)](mutablerawspan/storebytes%28repeating_count_as_%29-6822y.md): Stores the given value’s bytes repeatedly into this span’s memory.
- [storeBytes(repeating:count:as:)](mutablerawspan/storebytes%28repeating_count_as_%29-7cd7p.md): Stores the given value’s bytes repeatedly into this span’s memory.
- [storeBytes(repeating:count:as:\_:)](mutablerawspan/storebytes%28repeating_count_as___%29.md): Stores the given value’s bytes repeatedly into this span’s memory.
- [unsafeLoad(fromByteOffset:as:)](mutablerawspan/unsafeload%28frombyteoffset_as_%29.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [unsafeLoad(fromUncheckedByteOffset:as:)](mutablerawspan/unsafeload%28fromuncheckedbyteoffset_as_%29.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [unsafeLoadUnaligned(fromByteOffset:as:)](mutablerawspan/unsafeloadunaligned%28frombyteoffset_as_%29.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [unsafeLoadUnaligned(fromUncheckedByteOffset:as:)](mutablerawspan/unsafeloadunaligned%28fromuncheckedbyteoffset_as_%29.md): Returns a new instance of the given type, constructed from the raw memory at the specified offset.
- [withUnsafeBytes(\_:)](mutablerawspan/withunsafebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the viewed contiguous storage.
- [withUnsafeMutableBytes(\_:)](mutablerawspan/withunsafemutablebytes%28__%29.md): Calls the given closure with a mutable pointer to the underlying bytes of the viewed contiguous storage.

### Subscripts

- [subscript(\_:)](mutablerawspan/subscript%28__%29.md): Accesses the byte at the specified offset in the span.
- [subscript(unchecked:)](mutablerawspan/subscript%28unchecked_%29.md): Accesses the byte at the specified offset in the span.

### Default Implementations

- [Iterable Implementations](mutablerawspan/iterable-implementations.md)

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
- [MutableSpan](mutablespan.md): `MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
