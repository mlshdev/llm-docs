> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/component/init(stringliteral:)](https://developer.apple.com/documentation/system/filepath/component/init(stringliteral:))

# init(stringLiteral:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Create a file path component from a string literal.

## Declaration

```swift
init(stringLiteral: String)
```

<a id="discussion"></a>

## Discussion

Precondition: `stringLiteral` is non-empty, is not a root, and has only one component in it.
