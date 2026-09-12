> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(base64encoded:options:)-654f](https://developer.apple.com/documentation/foundation/data/init(base64encoded:options:)-654f)

# init(base64Encoded:options:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize a `Data` from a Base-64 encoded String using the given options.

## Declaration

```swift
init?(base64Encoded base64String: String, options: Data.Base64DecodingOptions = [])
```

## Parameters

- `base64String`: The string to parse.
- `options`: Encoding options. Default value is `[]`.

<a id="discussion"></a>

## Discussion

Returns nil when the input is not recognized as valid Base-64.
