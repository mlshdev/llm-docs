> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/customreflectable](https://developer.apple.com/documentation/swift/customreflectable)

# CustomReflectable

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that explicitly supplies its own mirror.

## Declaration

```swift
protocol CustomReflectable
```

<a id="overview"></a>

## Overview

You can create a mirror for any type using the `Mirror(reflecting:)` initializer, but if you are not satisfied with the mirror supplied for your type by default, you can make it conform to `CustomReflectable` and return a custom `Mirror` instance.

## Topics

### Instance Properties

- [customMirror](customreflectable/custommirror.md): The custom mirror for this instance.

## Relationships

### Inherited By

- [CustomLeafReflectable](customleafreflectable.md)

### Conforming Types

- [AnyHashable](anyhashable.md)
- [Array](array.md)
- [ArraySlice](arrayslice.md)
- [AutoreleasingUnsafeMutablePointer](autoreleasingunsafemutablepointer.md)
- [Bool](bool.md)
- [Character](character.md)
- [ClosedRange](closedrange.md)
- [CollectionOfOne](collectionofone.md)
- [ContiguousArray](contiguousarray.md)
- [Dictionary](dictionary.md)
- [Dictionary.Iterator](dictionary/iterator.md)
- [Double](double.md)
- [Float](float.md)
- [Float80](float80.md)
- [Int](int.md)
- [Int128](int128.md)
- [Int16](int16.md)
- [Int32](int32.md)
- [Int64](int64.md)
- [Int8](int8.md)
- [Mirror](mirror.md)
- [Optional](optional.md)
- [Range](range.md)
- [Set](set.md)
- [Set.Iterator](set/iterator.md)
- [StaticBigInt](staticbigint.md)
- [StaticString](staticstring.md)
- [StrideThrough](stridethrough.md)
- [StrideTo](strideto.md)
- [String](string.md)
- [String.UTF16View](string/utf16view.md)
- [String.UTF8View](string/utf8view.md)
- [String.UnicodeScalarView](string/unicodescalarview.md)
- [Substring](substring.md)
- [UInt](uint.md)
- [UInt128](uint128.md)
- [UInt16](uint16.md)
- [UInt32](uint32.md)
- [UInt64](uint64.md)
- [UInt8](uint8.md)
- [Unicode.Scalar](unicode/scalar.md)
- [UnsafeMutablePointer](unsafemutablepointer.md)
- [UnsafeMutableRawPointer](unsafemutablerawpointer.md)
- [UnsafePointer](unsafepointer.md)
- [UnsafeRawPointer](unsaferawpointer.md)

## See Also

### Customizing Your Type’s Reflection

- [CustomLeafReflectable](customleafreflectable.md): A type that explicitly supplies its own mirror, but whose descendant classes are not represented in the mirror unless they also override `customMirror`.
- [CustomPlaygroundDisplayConvertible](customplaygrounddisplayconvertible.md): A type that supplies a custom description for playground logging.
- [PlaygroundQuickLook](playgroundquicklook.md): Deprecated. The sum of types that can be used as a Quick Look representation.
- [DebugDescription()](debugdescription%28%29.md): Converts description definitions to a debugger Type Summary.
