> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/wholematch(in:)-9do8t](https://developer.apple.com/documentation/swift/regex/wholematch(in:)-9do8t)

# wholeMatch(in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a match if this regex matches the given string in its entirety.

## Declaration

```swift
func wholeMatch(in string: String) throws -> Regex<Output>.Match?
```

## Parameters

- `string`: The string to match this regular expression against.

<a id="return-value"></a>

## Return Value

The match, if this regex matches the entirety of `string`; otherwise, `nil`.

<a id="discussion"></a>

## Discussion

Call this method if you want the regular expression to succeed only when it matches the entire string you pass as `string`. The following example shows matching a regular expression that only matches digits, with different candidate strings.

```swift
let digits = /[0-9]+/

if let digitsMatch = try digits.wholeMatch(in: "2022") {
    print(digitsMatch.0)
} else {
    print("No match.")
}
// Prints "2022"

if let digitsMatch = try digits.wholeMatch(in: "The year is 2022.") {
    print(digitsMatch.0)
} else {
    print("No match.")
}
// Prints "No match."
```

The `wholeMatch(in:)` method can throw an error if this regex includes a transformation closure that throws an error.
