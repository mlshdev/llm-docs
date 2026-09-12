> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/path/init(validating:)](https://developer.apple.com/documentation/usdkit/usdlayer/path/init(validating:))

# init(validating:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a path from its string representation, validating that `path` is well-formed.

## Declaration

```swift
init?(validating path: String)
```

## Parameters

- `path`: The path string to validate.

<a id="return-value"></a>

## Return Value

`nil` if `path` cannot be parsed as a USD path expression.
