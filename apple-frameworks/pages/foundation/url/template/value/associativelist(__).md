> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/template/value/associativelist(_:)

# associativeList(\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An associative list value (ordered key-value pairs) to be used with a `URL.Template`.

## Declaration

```swift
static func associativeList(_ list: some Sequence<(key: String, value: String)>) -> URL.Template.Value
```
