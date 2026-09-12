> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/init(_:)-92siq](https://developer.apple.com/documentation/swift/regex/init(_:)-92siq)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regular expression with a dynamic capture list from the given regular expression.

## Declaration

```swift
init<OtherOutput>(_ regex: Regex<OtherOutput>)
```

## Parameters

- `regex`: A regular expression to convert to use a dynamic capture list.

<a id="discussion"></a>

## Discussion

You can use this initializer to convert a `Regex` with strongly-typed captures into a `Regex` with `AnyRegexOutput` as its output type.
