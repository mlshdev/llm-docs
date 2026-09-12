> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bidirectionalcollection/wholematch(of:)-7741n](https://developer.apple.com/documentation/swift/bidirectionalcollection/wholematch(of:)-7741n)

# wholeMatch(of:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a match if this string is matched by the given regex in its entirety.

## Declaration

```swift
func wholeMatch<R>(of regex: R) -> Regex<R.RegexOutput>.Match? where R : RegexComponent
```

## Parameters

- `regex`: The regular expression to match.

<a id="return-value"></a>

## Return Value

The match, if one is found. If there is no match, or a transformation in `regex` throws an error, this method returns `nil`.
