> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/parsestrategy/port(_:)](https://developer.apple.com/documentation/foundation/url/parsestrategy/port(_:))

# port(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Modifies a parse strategy to parse a URL’s port component in accordance with the provided behavior.

## Declaration

```swift
func port(_ strategy: URL.ParseStrategy.ComponentParseStrategy<Int> = .optional) -> URL.ParseStrategy
```

## Parameters

- `strategy`: A strategy for parsing the port component.

<a id="return-value"></a>

## Return Value

A modified [URL.ParseStrategy](../parsestrategy.md) that incorporates the specified behavior.

## See Also

### Customizing strategy behavior

- [scheme(\_:)](scheme%28__%29.md): Modifies a parse strategy to parse a URL’s scheme component in accordance with the provided behavior.
- [user(\_:)](user%28__%29.md): Modifies a parse strategy to parse a URL’s user component in accordance with the provided behavior.
- [password(\_:)](password%28__%29.md): Modifies a parse strategy to parse a URL’s password component in accordance with the provided behavior.
- [host(\_:)](host%28__%29.md): Modifies a parse strategy to parse a URL’s host component in accordance with the provided behavior.
- [path(\_:)](path%28__%29.md): Modifies a parse strategy to parse a URL’s path component in accordance with the provided behavior.
- [query(\_:)](query%28__%29.md): Modifies a parse strategy to parse a URL’s query component in accordance with the provided behavior.
- [fragment(\_:)](fragment%28__%29.md): Modifies a parse strategy to parse a URL’s fragment component in accordance with the provided behavior.
- [URL.ParseStrategy.ComponentParseStrategy](componentparsestrategy.md): The strategy used to parse one component of a URL.
