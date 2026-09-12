> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(contentsof:options:)](https://developer.apple.com/documentation/foundation/data/init(contentsof:options:))

# init(contentsOf:options:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates data by reading from the specified URL.

## Declaration

```swift
init(contentsOf url: URL, options: Data.ReadingOptions = []) throws
```

## Parameters

- `url`: The `URL` to read.
- `options`: Options for the read operation. Default value is `[]`.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error in the Cocoa domain, if `url` cannot be read.
