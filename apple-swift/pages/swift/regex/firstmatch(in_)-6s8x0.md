> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/firstmatch(in:)-6s8x0](https://developer.apple.com/documentation/swift/regex/firstmatch(in:)-6s8x0)

# firstMatch(in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the first match for this regex found in the given string.

## Declaration

```swift
func firstMatch(in string: String) throws -> Regex<Output>.Match?
```

## Parameters

- `string`: The string to match this regular expression against.

<a id="return-value"></a>

## Return Value

The match, if one is found; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Use the `firstMatch(in:)` method to search for the first occurrence of this regular expression in `string`. This example searches for the first sequence of digits that occurs in a string:

```swift
let digits = /[0-9]+/

if let digitsMatch = try digits.firstMatch(in: "The year is 2022; last year was 2021.") {
    print(digitsMatch.0)
} else {
    print("No match.")
}
// Prints "2022"
```

The `firstMatch(in:)` method can throw an error if this regex includes a transformation closure that throws an error.
