> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/withcontiguousstorageifavailable(_:)](https://developer.apple.com/documentation/swift/string/withcontiguousstorageifavailable(_:))

# withContiguousStorageIfAvailable(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Executes a closure on the sequence’s contiguous storage.

## Declaration

```swift
func withContiguousStorageIfAvailable<R>(_ body: (UnsafeBufferPointer<Self.Element>) throws -> R) rethrows -> R?
```

## Parameters

- `body`: A closure that receives an `UnsafeBufferPointer` to the sequence’s contiguous storage.

<a id="return-value"></a>

## Return Value

The value returned from `body`, unless the sequence doesn’t support contiguous storage, in which case the method ignores `body` and returns `nil`.

<a id="discussion"></a>

## Discussion

This method calls `body(buffer)`, where `buffer` is a pointer to the collection’s contiguous storage. If the contiguous storage doesn’t exist, the collection creates it. If the collection doesn’t support an internal representation in a form of contiguous storage, the method doesn’t call `body` — it immediately returns `nil`.

The optimizer can often eliminate bounds- and uniqueness-checking within an algorithm. When that fails, however, invoking the same algorithm on the `buffer` argument may let you trade safety for speed.

Successive calls to this method may provide a different pointer on each call. Don’t store `buffer` outside of this method.

A `Collection` that provides its own implementation of this method must provide contiguous storage to its elements in the same order as they appear in the collection. This guarantees that it’s possible to generate contiguous mutable storage to any of its subsequences by slicing `buffer` with a range formed from the distances to the subsequence’s `startIndex` and `endIndex`, respectively.

## See Also

### Infrequently Used Functionality

- [index(of:)](index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [init(\_:)](init%28__%29-5a5lw.md)
- [init(stringInterpolation:)](init%28stringinterpolation_%29.md): Creates a new instance from an interpolated string literal.
- [init(stringLiteral:)](init%28stringliteral_%29.md): Creates an instance initialized to the given string value.
- [init(unicodeScalarLiteral:)](init%28unicodescalarliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.UnicodeScalarLiteralType`.
- [init(extendedGraphemeClusterLiteral:)](init%28extendedgraphemeclusterliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.StringLiteralType`.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `String` instance.
