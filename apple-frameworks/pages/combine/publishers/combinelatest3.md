> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publishers/combinelatest3](https://developer.apple.com/documentation/combine/publishers/combinelatest3)

# Publishers.CombineLatest3

**Framework:** Combine  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A publisher that receives and combines the latest elements from three publishers.

## Declaration

```swift
struct CombineLatest3<A, B, C> where A : Publisher, B : Publisher, C : Publisher, A.Failure == B.Failure, B.Failure == C.Failure
```

## Topics

### Creating a combine latest-three publisher

- [init(\_:\_:\_:)](combinelatest3/init%28______%29.md)

### Declaring supporting types

- [Publishers.CombineLatest3.Output](combinelatest3/output.md): The kind of values published by this publisher.
- [Publishers.CombineLatest3.Failure](combinelatest3/failure.md): The kind of errors this publisher might publish.

### Inspecting publisher properties

- [a](combinelatest3/a.md)
- [b](combinelatest3/b.md)
- [c](combinelatest3/c.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Publisher](../publisher.md)

## See Also

### Combining elements from multiple publishers

- [Publishers.CombineLatest](combinelatest.md): A publisher that receives and combines the latest elements from two publishers.
- [Publishers.CombineLatest4](combinelatest4.md): A publisher that receives and combines the latest elements from four publishers.
- [Publishers.Merge](merge.md): A publisher created by applying the merge function to two upstream publishers.
- [Publishers.Merge3](merge3.md): A publisher created by applying the merge function to three upstream publishers.
- [Publishers.Merge4](merge4.md): A publisher created by applying the merge function to four upstream publishers.
- [Publishers.Merge5](merge5.md): A publisher created by applying the merge function to five upstream publishers.
- [Publishers.Merge6](merge6.md): A publisher created by applying the merge function to six upstream publishers.
- [Publishers.Merge7](merge7.md): A publisher created by applying the merge function to seven upstream publishers.
- [Publishers.Merge8](merge8.md): A publisher created by applying the merge function to eight upstream publishers.
- [Publishers.MergeMany](mergemany.md): A publisher created by applying the merge function to an arbitrary number of upstream publishers.
- [Publishers.Zip](zip.md): A publisher created by applying the zip function to two upstream publishers.
- [Publishers.Zip3](zip3.md): A publisher created by applying the zip function to three upstream publishers.
- [Publishers.Zip4](zip4.md): A publisher created by applying the zip function to four upstream publishers.
