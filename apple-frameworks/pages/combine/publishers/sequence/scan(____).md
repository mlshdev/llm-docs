> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/scan(_:_:)](https://developer.apple.com/documentation/combine/publishers/sequence/scan(_:_:))

# scan(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func scan<T>(_ initialResult: T, _ nextPartialResult: @escaping (T, Publishers.Sequence<Elements, Failure>.Output) -> T) -> Publishers.Sequence<[T], Failure>
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [setFailureType(to:)](setfailuretype%28to_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [replaceNil(with:)](replacenil%28with_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
