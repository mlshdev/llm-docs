> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/asciionlycharacterclasses(_:)](https://developer.apple.com/documentation/swift/regex/asciionlycharacterclasses(_:))

# asciiOnlyCharacterClasses(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a regular expression that matches only ASCII characters when matching character classes.

## Declaration

```swift
func asciiOnlyCharacterClasses(_ useASCII: Bool = true) -> Regex<Regex<Output>.RegexOutput>
```

## Parameters

- `useASCII`: A Boolean value indicating whether to match only ASCII characters when matching character classes.

<a id="return-value"></a>

## Return Value

The modified regular expression.
