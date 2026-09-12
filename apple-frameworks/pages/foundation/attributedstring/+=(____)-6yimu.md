> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/+=(_:_:)-6yimu](https://developer.apple.com/documentation/foundation/attributedstring/+=(_:_:)-6yimu)

# +=(\_:\_:)

**Framework:** Foundation  
**Kind:** Operator  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Appends an attributed string or substring to another attributed string.

## Declaration

```swift
static func += (lhs: inout AttributedString, rhs: some AttributedStringProtocol)
```

## Parameters

- `lhs`: An attributed string. After the operation, the value of this string is the original `lhs` string with `rhs` appended to it.
- `rhs`: An attributed string or substring to append to `lhs`.

## See Also

### Combining Attributed Strings

- [append(\_:)](append%28__%29.md): Appends a string to the attributed string.
- [+(\_:\_:)](+%28____%29-8sbsq.md): Concatenates two attributed strings.
- [+(\_:\_:)](+%28____%29-drfc.md): Concatenates two attributed strings or substrings.
- [+=(\_:\_:)](+=%28____%29-4dk88.md): Appends an attributed string to another attributed string.
