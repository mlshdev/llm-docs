> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/init(from:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/init(from:))

# init(from:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates an argument matcher from the given decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the data is corrupted or a required value is missing.
