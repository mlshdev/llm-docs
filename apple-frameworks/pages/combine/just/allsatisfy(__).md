> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just/allsatisfy(_:)](https://developer.apple.com/documentation/combine/just/allsatisfy(_:))

# allSatisfy(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func allSatisfy(_ predicate: (Output) -> Bool) -> Just<Bool>
```

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Output` conforms to `Equatable`.
- [contains(where:)](contains%28where_%29.md)
- [tryContains(where:)](trycontains%28where_%29.md)
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md)
