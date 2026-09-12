> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/dropfirst(_:)](https://developer.apple.com/documentation/combine/publishers/sequence/dropfirst(_:))

# dropFirst(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func dropFirst(_ count: Int = 1) -> Publishers.Sequence<DropFirstSequence<Elements>, Failure>
```

## See Also

### Applying sequence operations to elements

- [drop(while:)](drop%28while_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [append(\_:)](append%28__%29-45rm8.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [append(\_:)](append%28__%29-3dj6k.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [append(\_:)](append%28__%29-2knh4.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](prepend%28__%29-1r564.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](prepend%28__%29-71f7p.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prepend(\_:)](prepend%28__%29-2ros1.md): Conforms when `Elements` conforms to `RangeReplaceableCollection` and `Failure` conforms to `Error`.
- [prefix(\_:)](prefix%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [prefix(while:)](prefix%28while_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
