> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/merge4](https://developer.apple.com/documentation/combine/publishers/merge4)

# Publishers.Merge4

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher created by applying the merge function to four upstream publishers.

## Declaration

```swift
struct Merge4<A, B, C, D> where A : Publisher, B : Publisher, C : Publisher, D : Publisher, A.Failure == B.Failure, A.Output == B.Output, B.Failure == C.Failure, B.Output == C.Output, C.Failure == D.Failure, C.Output == D.Output
```

## Topics

### Creating a merge-four publisher

- [init(\_:\_:\_:\_:)](merge4/init%28________%29.md): Creates a publisher created by applying the merge function to four upstream publishers.

### Merging elements

- [merge(with:)](merge4/merge%28with_%29.md)
- [merge(with:\_:)](merge4/merge%28with___%29.md)
- [merge(with:\_:\_:)](merge4/merge%28with_____%29.md)
- [merge(with:\_:\_:\_:)](merge4/merge%28with_______%29.md)

### Declaring supporting types

- [Publishers.Merge4.Output](merge4/output.md): The kind of values published by this publisher.
- [Publishers.Merge4.Failure](merge4/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [a](merge4/a.md): A publisher to merge.
- [b](merge4/b.md): A second publisher to merge.
- [c](merge4/c.md): A third publisher to merge.
- [d](merge4/d.md): A fourth publisher to merge.

### Comparing publishers

- [==(\_:\_:)](merge4/==%28____%29.md): Conforms when `A` conforms to `Publisher`, `A` conforms to `Equatable`, `B` conforms to `Publisher`, `B` conforms to `Equatable`, `C` conforms to `Publisher`, `C` conforms to `Equatable`, `D` conforms to `Publisher`, `D` conforms to `Equatable`, `A.Failure` is `B.Failure`, `A.Output` is `B.Output`, `B.Failure` is `C.Failure`, `B.Output` is `C.Output`, `C.Failure` is `D.Failure`, and `C.Output` is `D.Output`. Returns a Boolean value that indicates whether two publishers are equivalent.

### Default Implementations

- [Equatable Implementations](merge4/equatable-implementations.md)

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
- [Publishers.Merge5](merge5.md): A publisher created by applying the merge function to five upstream publishers.
- [Publishers.Merge6](merge6.md): A publisher created by applying the merge function to six upstream publishers.
- [Publishers.Merge7](merge7.md): A publisher created by applying the merge function to seven upstream publishers.
- [Publishers.Merge8](merge8.md): A publisher created by applying the merge function to eight upstream publishers.
- [Publishers.MergeMany](mergemany.md): A publisher created by applying the merge function to an arbitrary number of upstream publishers.
- [Publishers.Zip](zip.md): A publisher created by applying the zip function to two upstream publishers.
- [Publishers.Zip3](zip3.md): A publisher created by applying the zip function to three upstream publishers.
- [Publishers.Zip4](zip4.md): A publisher created by applying the zip function to four upstream publishers.
