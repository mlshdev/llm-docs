> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/just/contains(where:)

# contains(where:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func contains(where predicate: (Output) -> Bool) -> Just<Bool>
```

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Output` conforms to `Equatable`.
- [tryContains(where:)](trycontains%28where_%29.md)
- [allSatisfy(\_:)](allsatisfy%28__%29.md)
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md)
