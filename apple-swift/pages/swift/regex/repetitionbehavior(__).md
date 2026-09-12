> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/repetitionbehavior(_:)](https://developer.apple.com/documentation/swift/regex/repetitionbehavior(_:))

# repetitionBehavior(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a regular expression where quantifiers use the specified behavior by default.

## Declaration

```swift
func repetitionBehavior(_ behavior: RegexRepetitionBehavior) -> Regex<Regex<Output>.RegexOutput>
```

## Parameters

- `behavior`: The default behavior to use for quantifiers.

<a id="discussion"></a>

## Discussion

This setting does not affect calls to quantifier methods, such as `OneOrMore`, that include an explicit `behavior` parameter.

Passing `.eager` or `.reluctant` to this method corresponds to applying the `(?-U)` or `(?U)` option in regex syntax, respectively.
