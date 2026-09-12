> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/maperror(_:)](https://developer.apple.com/documentation/combine/just/maperror(_:))

# mapError(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func mapError<E>(_ transform: (Just<Output>.Failure) -> E) -> Result<Output, E>.Publisher where E : Error
```

## See Also

### Mapping elements

- [map(\_:)](map%28__%29.md)
- [tryMap(\_:)](trymap%28__%29.md)
- [scan(\_:\_:)](scan%28____%29.md)
- [tryScan(\_:\_:)](tryscan%28____%29.md)
- [setFailureType(to:)](setfailuretype%28to_%29.md)
