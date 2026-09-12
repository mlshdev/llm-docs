> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/runs-swift.struct](https://developer.apple.com/documentation/foundation/attributedstring/runs-swift.struct)

# AttributedString.Runs

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An iterable view into segments of the attributed string, each of which indicates where a run of identical attributes begins or ends.

## Declaration

```swift
struct Runs
```

## Topics

### Structures

- [AttributedString.Runs.AttributesSlice1](runs-swift.struct/attributesslice1.md)
- [AttributedString.Runs.AttributesSlice2](runs-swift.struct/attributesslice2.md)
- [AttributedString.Runs.AttributesSlice3](runs-swift.struct/attributesslice3.md)
- [AttributedString.Runs.AttributesSlice4](runs-swift.struct/attributesslice4.md)
- [AttributedString.Runs.AttributesSlice5](runs-swift.struct/attributesslice5.md)
- [AttributedString.Runs.Run](runs-swift.struct/run.md)

### Subscripts

- [subscript(\_:)](runs-swift.struct/subscript%28__%29-5vfpg.md)
- [subscript(\_:)](runs-swift.struct/subscript%28__%29-6aptr.md)
- [subscript(\_:)](runs-swift.struct/subscript%28__%29-8hdu9.md)
- [subscript(\_:\_:)](runs-swift.struct/subscript%28____%29-3taux.md)
- [subscript(\_:\_:)](runs-swift.struct/subscript%28____%29-8nn2m.md)
- [subscript(\_:\_:\_:)](runs-swift.struct/subscript%28______%29-10o3s.md)
- [subscript(\_:\_:\_:)](runs-swift.struct/subscript%28______%29-948ef.md)
- [subscript(\_:\_:\_:\_:)](runs-swift.struct/subscript%28________%29-7h5tw.md)
- [subscript(\_:\_:\_:\_:)](runs-swift.struct/subscript%28________%29-sac8.md)
- [subscript(\_:\_:\_:\_:\_:)](runs-swift.struct/subscript%28__________%29-9i87e.md)
- [subscript(\_:\_:\_:\_:\_:)](runs-swift.struct/subscript%28__________%29-o61e.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Accessing Views into the Attributed String

- [characters](characters.md): The characters of the attributed string, as a view into the underlying string.
- [AttributedString.CharacterView](characterview.md): A view into the underlying storage of the attributed string, as Unicode characters.
- [unicodeScalars](unicodescalars.md): The Unicode scalars of the attributed string, as a view into the underlying string.
- [AttributedString.UnicodeScalarView](unicodescalarview.md): A view into the underlying storage of the attributed string, as Unicode scalars.
- [runs](runs-swift.property.md): The attributed runs of the attributed string, as a view into the underlying string.
