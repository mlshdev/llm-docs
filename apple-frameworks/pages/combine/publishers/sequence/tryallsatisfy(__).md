> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/sequence/tryallsatisfy(_:)

# tryAllSatisfy(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func tryAllSatisfy(_ predicate: (Publishers.Sequence<Elements, Failure>.Output) throws -> Bool) -> Result<Bool, any Error>.Publisher
```

## See Also

### Applying matching criteria to elements

- [contains(\_:)](contains%28__%29.md): Conforms when `Elements` conforms to `Sequence`, `Failure` conforms to `Error`, and `Elements.Element` conforms to `Equatable`.
- [contains(where:)](contains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryContains(where:)](trycontains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
