> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/sequence/contains(_:)](https://developer.apple.com/documentation/combine/publishers/sequence/contains(_:))

# contains(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func contains(_ output: Elements.Element) -> Result<Bool, Failure>.Publisher
```

## See Also

### Applying matching criteria to elements

- [contains(where:)](contains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryContains(where:)](trycontains%28where_%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [allSatisfy(\_:)](allsatisfy%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
- [tryAllSatisfy(\_:)](tryallsatisfy%28__%29.md): Conforms when `Elements` conforms to `Sequence` and `Failure` conforms to `Error`.
