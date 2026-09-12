> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchqueryerror/cancelled](https://developer.apple.com/documentation/corespotlight/cssearchqueryerror/cancelled)

# cancelled

**Framework:** Core Spotlight  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The query stopped because someone canceled it.

## Declaration

```swift
static var cancelled: CSSearchQueryError.Code { get }
```

<a id="Discussion"></a>

## Discussion

The system reports this error if your code called the [cancel()](../csuserquery/cancel%28%29.md) method.

## See Also

### Getting the error codes

- [indexUnreachable](indexunreachable.md): The index is unreachable.
- [invalidQuery](invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [unknown](unknown.md): An unknown error occurred.
