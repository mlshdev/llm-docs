> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/append(queryitems:)

# append(queryItems:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Appends a list of query items to the URL.

## Declaration

```swift
mutating func append(queryItems: [URLQueryItem])
```

## Parameters

- `queryItems`: An array of [URLQueryItem](../urlqueryitem.md) instances to append to the URL.

## See Also

### Adding query items

- [appending(queryItems:)](appending%28queryitems_%29.md): Returns a new URL formed by appending a list of query items to the URL.
- [URLQueryItem](../urlqueryitem.md): A single name-value pair from the query portion of a URL.
