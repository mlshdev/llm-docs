> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiepropertykey/init(rawvalue:)](https://developer.apple.com/documentation/foundation/httpcookiepropertykey/init(rawvalue:))

# init(rawValue:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an HTTP cookie property key using the given string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: The string to use as a key.

<a id="Discussion"></a>

## Discussion

You can use this initializer to create HTTP cookie property keys that aren’t already represented by the predefined constants.

## See Also

### Creating custom cookie property keys

- [init(\_:)](init%28__%29.md): Creates an HTTP cookie property key using the given string.
