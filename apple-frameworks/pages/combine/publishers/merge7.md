> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge7](https://developer.apple.com/documentation/combine/publishers/merge7)

# Publishers.Merge7

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher created by applying the merge function to seven upstream publishers.

## Declaration

```swift
struct Merge7<A, B, C, D, E, F, G> where A : Publisher, B : Publisher, C : Publisher, D : Publisher, E : Publisher, F : Publisher, G : Publisher, A.Failure == B.Failure, A.Output == B.Output, B.Failure == C.Failure, B.Output == C.Output, C.Failure == D.Failure, C.Output == D.Output, D.Failure == E.Failure, D.Output == E.Output, E.Failure == F.Failure, E.Output == F.Output, F.Failure == G.Failure, F.Output == G.Output
```

## Topics

### Creating a merge-seven publisher

- [init(\_:\_:\_:\_:\_:\_:\_:)](merge7/init%28______________%29.md): Creates a publisher created by applying the merge function to seven upstream publishers.

### Merging elements

- [merge(with:)](merge7/merge%28with_%29.md)

### Declaring supporting types

- [Publishers.Merge7.Output](merge7/output.md): The kind of values published by this publisher.
- [Publishers.Merge7.Failure](merge7/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [a](merge7/a.md): A publisher to merge.
- [b](merge7/b.md): A second publisher to merge.
- [c](merge7/c.md): A third publisher to merge.
- [d](merge7/d.md): A fourth publisher to merge.
- [e](merge7/e.md): A fifth publisher to merge.
- [f](merge7/f.md): A sixth publisher to merge.
- [g](merge7/g.md): An seventh publisher to merge.

### Comparing publishers

- [==(\_:\_:)](merge7/==%28____%29.md): Conforms when `A` conforms to `Publisher`, `A` conforms to `Equatable`, `B` conforms to `Publisher`, `B` conforms to `Equatable`, `C` conforms to `Publisher`, `C` conforms to `Equatable`, `D` conforms to `Publisher`, `D` conforms to `Equatable`, `E` conforms to `Publisher`, `E` conforms to `Equatable`, `F` conforms to `Publisher`, `F` conforms to `Equatable`, `G` conforms to `Publisher`, `G` conforms to `Equatable`, `A.Failure` is `B.Failure`, `A.Output` is `B.Output`, `B.Failure` is `C.Failure`, `B.Output` is `C.Output`, `C.Failure` is `D.Failure`, `C.Output` is `D.Output`, `D.Failure` is `E.Failure`, `D.Output` is `E.Output`, `E.Failure` is `F.Failure`, `E.Output` is `F.Output`, `F.Failure` is `G.Failure`, and `F.Output` is `G.Output`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](merge7/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Combining elements from multiple publishers

- [Publishers.CombineLatest](combinelatest.md): A publisher that receives and combines the latest elements from two publishers.
- [Publishers.CombineLatest3](combinelatest3.md): A publisher that receives and combines the latest elements from three publishers.
- [Publishers.CombineLatest4](combinelatest4.md): A publisher that receives and combines the latest elements from four publishers.
- [Publishers.Merge](merge.md): A publisher created by applying the merge function to two upstream publishers.
- [Publishers.Merge3](merge3.md): A publisher created by applying the merge function to three upstream publishers.
- [Publishers.Merge4](merge4.md): A publisher created by applying the merge function to four upstream publishers.
- [Publishers.Merge5](merge5.md): A publisher created by applying the merge function to five upstream publishers.
- [Publishers.Merge6](merge6.md): A publisher created by applying the merge function to six upstream publishers.
- [Publishers.Merge8](merge8.md): A publisher created by applying the merge function to eight upstream publishers.
- [Publishers.MergeMany](mergemany.md): A publisher created by applying the merge function to an arbitrary number of upstream publishers.
- [Publishers.Zip](zip.md): A publisher created by applying the zip function to two upstream publishers.
- [Publishers.Zip3](zip3.md): A publisher created by applying the zip function to three upstream publishers.
- [Publishers.Zip4](zip4.md): A publisher created by applying the zip function to four upstream publishers.
