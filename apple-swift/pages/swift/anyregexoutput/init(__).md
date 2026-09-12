> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyregexoutput/init(_:)](https://developer.apple.com/documentation/swift/anyregexoutput/init(_:))

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a dynamic regular expression match output from an existing match.

## Declaration

```swift
init<Output>(_ match: Regex<Output>.Match)
```

<a id="discussion"></a>

## Discussion

You can use this initializer when you need an `AnyRegexOutput` instance instead of the output type of a strongly-typed `Regex.Match`.
