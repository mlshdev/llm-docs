> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/+(_:_:)-drfc](https://developer.apple.com/documentation/foundation/attributedstring/+(_:_:)-drfc)

# +(\_:\_:)

**Framework:** Foundation  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Concatenates two attributed strings or substrings.

## Declaration

```swift
static func + (lhs: AttributedString, rhs: some AttributedStringProtocol) -> AttributedString
```

## Parameters

- `lhs`: An attributed string or substring to concatenate.
- `rhs`: Another attributed string or substring to concatenate.

<a id="return-value"></a>

## Return Value

The result of concatenating `rhs` to the end of `lhs`.

## See Also

### Combining Attributed Strings

- [append(\_:)](append%28__%29.md): Appends a string to the attributed string.
- [+(\_:\_:)](+%28____%29-8sbsq.md): Concatenates two attributed strings.
- [+=(\_:\_:)](+=%28____%29-4dk88.md): Appends an attributed string to another attributed string.
- [+=(\_:\_:)](+=%28____%29-6yimu.md): Appends an attributed string or substring to another attributed string.
