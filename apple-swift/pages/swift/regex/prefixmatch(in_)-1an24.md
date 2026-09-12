> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/prefixmatch(in:)-1an24](https://developer.apple.com/documentation/swift/regex/prefixmatch(in:)-1an24)

# prefixMatch(in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a match if this regex matches the given substring at its start.

## Declaration

```swift
func prefixMatch(in string: Substring) throws -> Regex<Output>.Match?
```

## Parameters

- `string`: The substring to match this regular expression against.

<a id="return-value"></a>

## Return Value

The match, if this regex matches at the start of `string`; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Call this method if you want the regular expression to succeed only when it matches only at the start of the given string. This example uses `prefixMatch(in:)` and a regex that matches a title-case word to search for such a word at the start of different strings:

```swift
let titleCaseWord = /[A-Z][A-Za-z]+/

if let wordMatch = try titleCaseWord.prefixMatch(in: "Searching in a Regex") {
    print(wordMatch.0)
} else {
    print("No match.")
}
// Prints "Searching"

if let wordMatch = try titleCaseWord.prefixMatch(in: "title case word at the End") {
    print(wordMatch.0)
} else {
    print("No match.")
}
// Prints "No match."
```

The `prefixMatch(in:)` method can throw an error if this regex includes a transformation closure that throws an error.
