> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unfoldfirstsequence](https://developer.apple.com/documentation/swift/unfoldfirstsequence)

# UnfoldFirstSequence

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The return type of `sequence(first:next:)`.

## Declaration

```swift
typealias UnfoldFirstSequence<T> = UnfoldSequence<T, (T?, Bool)>
```

## See Also

### Type Aliases

- [UnfoldSequence.Iterator](unfoldsequence/iterator.md): A type that provides the sequence’s iteration interface and encapsulates its iteration state.
