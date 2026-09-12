> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/assetsresult/init(rawvalue:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/assetsresult/init(rawvalue:))

# init(rawValue:)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Creates an embedding key with the given string as its raw value.

## Declaration

```swift
init?(rawValue: Int)
```

## Parameters

- `rawValue`: The string value you specify.

<a id="return-value"></a>

## Return Value

An embedding key instance if the raw value is valid, or `nil` if the value doesn’t correspond to a valid embedding key.
