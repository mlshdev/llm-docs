> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regex/init(_:as:)-2ucu7](https://developer.apple.com/documentation/swift/regex/init(_:as:)-2ucu7)

# init(\_:as:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a regular expression with a strongly-typed capture list from the given regular expression.

## Declaration

```swift
init?(_ regex: Regex<AnyRegexOutput>, as outputType: Output.Type = Output.self)
```

## Parameters

- `regex`: A regular expression to convert to use a strongly-typed capture list.
- `outputType`: The capture structure to use.

<a id="discussion"></a>

## Discussion

You can use this initializer to convert a regular expression with a dynamic capture list to one with a strongly-typed capture list. If the type you provide as `outputType` doesn’t match the capture structure of `regex`, the initializer returns `nil`.

```swift
let dynamicRegex = try Regex("(.+?): (.+)")
if let stronglyTypedRegex = Regex(dynamicRegex, as: (Substring, Substring, Substring).self) {
    print("Converted properly")
}
// Prints "Converted properly"
```
