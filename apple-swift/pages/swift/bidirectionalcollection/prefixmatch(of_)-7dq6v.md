> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/bidirectionalcollection/prefixmatch(of:)-7dq6v

# prefixMatch(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a match if this string is matched by the given regex at its start.

## Declaration

```swift
func prefixMatch<R>(of regex: R) -> Regex<R.RegexOutput>.Match? where R : RegexComponent
```

## Parameters

- `regex`: The regular expression to match.

<a id="return-value"></a>

## Return Value

The match, if one is found. If there is no match, or a transformation in `regex` throws an error, this method returns `nil`.
