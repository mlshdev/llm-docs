> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/appending(queryitems:)](https://developer.apple.com/documentation/foundation/url/appending(queryitems:))

# appending(queryItems:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a new URL formed by appending a list of query items to the URL.

## Declaration

```swift
func appending(queryItems: [URLQueryItem]) -> URL
```

## Parameters

- `queryItems`: An array of [URLQueryItem](../urlqueryitem.md) instances to append to the URL.

## See Also

### Adding query items

- [append(queryItems:)](append%28queryitems_%29.md): Appends a list of query items to the URL.
- [URLQueryItem](../urlqueryitem.md): A single name-value pair from the query portion of a URL.
