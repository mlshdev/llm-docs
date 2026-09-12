> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/range/relative(to:)](https://developer.apple.com/documentation/swift/range/relative(to:))

# relative(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of indices described by this range expression within the given collection.

## Declaration

```swift
func relative<C>(to collection: C) -> Range<Bound> where Bound == C.Index, C : Collection
```

## Parameters

- `collection`: The collection to evaluate this range expression in relation to.

<a id="return-value"></a>

## Return Value

A range suitable for slicing `collection`. The returned range is *not* guaranteed to be inside the bounds of `collection`. Callers should apply the same preconditions to the return value as they would to a range provided directly by the user.

## See Also

### Converting Ranges

- [init(\_:in:)](init%28__in_%29-5cclx.md): Conforms when `Bound` is `String.Index`.
- [init(\_:in:)](init%28__in_%29-5qfor.md): Conforms when `Bound` is `String.Index`.
