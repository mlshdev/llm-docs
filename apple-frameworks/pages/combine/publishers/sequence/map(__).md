> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/map(_:)](https://developer.apple.com/documentation/combine/publishers/sequence/map(_:))

# map(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func map<T>(_ transform: (Elements.Element) -> T) -> Publishers.Sequence<[T], Failure>
```

## See Also

### Mapping elements

- [scan(\_:\_:)](scan%28____%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [replaceNil(with:)](replacenil%28with_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
