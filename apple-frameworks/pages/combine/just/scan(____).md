> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/scan(_:_:)](https://developer.apple.com/documentation/combine/just/scan(_:_:))

# scan(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func scan<T>(_ initialResult: T, _ nextPartialResult: (T, Output) -> T) -> Result<T, Just<Output>.Failure>.Publisher
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29.md)
- [tryMap(\_:)](trymap%28__%29.md)
- [mapError(\_:)](maperror%28__%29.md)
- [tryScan(\_:\_:)](tryscan%28____%29.md)
- [setFailureType(to:)](setfailuretype%28to_%29.md)
