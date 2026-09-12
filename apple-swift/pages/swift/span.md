> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/span](https://developer.apple.com/documentation/swift/span)

# Span

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

`Span<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.

## Declaration

```swift
@frozen struct Span<Element> where Element : ~Copyable
```

<a id="overview"></a>

## Overview

A `Span` instance is a non-owning, non-escaping view into memory. When a `Span` is created, it inherits the lifetime of the container owning the contiguous memory, ensuring temporal safety and avoiding use-after-free errors. Operations on `Span` are bounds-checked, ensuring spatial safety and avoiding buffer overflow errors.

## Topics

### Initializers

- [init()](span/init%28%29.md): Create an empty span.
- [init(viewing:)](span/init%28viewing_%29-18wsr.md): Conforms when `Element` conforms to `BitwiseCopyable`. View initialized raw memory as a typed span.
- [init(viewing:)](span/init%28viewing_%29-9d31g.md): Conforms when `Element` is `UInt8`. View initialized raw memory as a span of bytes.

### Instance Properties

- [bytes](span/bytes-6qp42.md): Construct a raw span over the memory represented by this span.
- [bytes](span/bytes-8rxg.md): Conforms when `Element` conforms to `ConvertibleToBytes`. A raw span over the memory represented by this span.
- [count](span/count.md): The number of elements in the span.
- [indices](span/indices.md): The indices that are valid for subscripting the span, in ascending order.
- [isEmpty](span/isempty.md): A Boolean value indicating whether the span is empty.

### Instance Methods

- [extracting(\_:)](span/extracting%28__%29-1c6e6.md): Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(\_:)](span/extracting%28__%29-48neh.md): Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(\_:)](span/extracting%28__%29-57peb.md): Constructs a new span over all the items of this span.
- [extracting(droppingFirst:)](span/extracting%28droppingfirst_%29.md): Returns a span over all but the given number of initial elements.
- [extracting(droppingLast:)](span/extracting%28droppinglast_%29.md): Returns a span over all but the given number of trailing elements.
- [extracting(first:)](span/extracting%28first_%29.md): Returns a span containing the initial elements of this span, up to the specified maximum length.
- [extracting(last:)](span/extracting%28last_%29.md): Returns a span containing the trailing elements of the span, up to the given maximum length.
- [extracting(unchecked:)](span/extracting%28unchecked_%29-46y0h.md): Constructs a new span over the items within the supplied range of indices within this span.
- [extracting(unchecked:)](span/extracting%28unchecked_%29-8hfj1.md): Constructs a new span over the items within the supplied range of indices within this span.
- [indices(of:)](span/indices%28of_%29.md): Returns the indices within this span where the memory represented by other is located, or nil if other is not located within this span.
- [isIdentical(to:)](span/isidentical%28to_%29.md): Returns a Boolean value indicating whether two instances refer to the same memory region.
- [isTriviallyIdentical(to:)](span/istriviallyidentical%28to_%29.md): Returns a Boolean value indicating whether two instances refer to the same memory region.
- [withUnsafeBufferPointer(\_:)](span/withunsafebufferpointer%28__%29.md): Calls a closure with a pointer to the viewed contiguous storage.
- [withUnsafeBytes(\_:)](span/withunsafebytes%28__%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Calls the given closure with a pointer to the underlying bytes of the viewed contiguous storage.

### Subscripts

- [subscript(\_:)](span/subscript%28__%29-2g4jz.md): Conforms when `Element` conforms to `BitwiseCopyable`. Accesses the element at the specified index in the `Span`.
- [subscript(\_:)](span/subscript%28__%29-3r1qm.md): Accesses the element at the specified index in the `Span`.
- [subscript(unchecked:)](span/subscript%28unchecked_%29-2no6f.md): Conforms when `Element` conforms to `BitwiseCopyable`. Accesses the element at the specified index in the `Span`.
- [subscript(unchecked:)](span/subscript%28unchecked_%29-6gur1.md): Accesses the element at the specified index in the `Span`.

### Type Aliases

- [Span.Index](span/index.md): The representation for an index in `Span`.

### Default Implementations

- [Iterable Implementations](span/iterable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [ContiguousBytes](https://developer.apple.com/documentation/foundation/contiguousbytes)
- [Iterable](iterable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Safe Memory Access

- [RawSpan](rawspan.md): `RawSpan` represents a contiguous region of memory which contains initialized bytes.
- [OutputSpan](outputspan.md): `OutputSpan` is a reference to a contiguous region of memory that starts with some number of initialized `Element` instances followed by uninitialized memory. It provides operations to access the items it stores, as well as to add new elements and to remove existing ones.
- [OutputRawSpan](outputrawspan.md): `OutputRawSpan` is a reference to a contiguous region of memory which starts with some number of initialized bytes, followed by uninitialized memory. It provides operations to access the bytes it stores, as well as to append and to remove bytes.
- [UTF8Span](utf8span.md): A borrowed view into contiguous memory that contains validly-encoded UTF-8 code units.
- [MutableSpan](mutablespan.md): `MutableSpan<Element>` represents a contiguous region of memory which contains initialized instances of `Element`.
- [MutableRawSpan](mutablerawspan.md): `MutableRawSpan` represents a contiguous region of memory which contains initialized bytes.
