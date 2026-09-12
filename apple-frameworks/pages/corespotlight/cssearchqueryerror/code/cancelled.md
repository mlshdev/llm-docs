> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchqueryerror/code/cancelled](https://developer.apple.com/documentation/corespotlight/cssearchqueryerror/code/cancelled)

# CSSearchQueryError.Code.cancelled (Swift)

**Framework:** Core Spotlight  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The query stopped because someone canceled it.

## Declaration

```swift
case cancelled
```

<a id="Discussion"></a>

## Discussion

The system reports this error if your code called the [cancel()](../../csuserquery/cancel%28%29.md) method.

## See Also

### Getting the error codes

- [CSSearchQueryError.Code.indexUnreachable](indexunreachable.md): The index is unreachable.
- [CSSearchQueryError.Code.invalidQuery](invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [CSSearchQueryError.Code.unknown](unknown.md): An unknown error occurred.

# CSSearchQueryErrorCodeCancelled (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The query stopped because someone canceled it.

## Declaration

```objectivec
CSSearchQueryErrorCodeCancelled
```

<a id="Discussion"></a>

## Discussion

The system reports this error if your code called the [cancel](../../csuserquery/cancel%28%29.md) method.

## See Also

### Getting the error codes

- [CSSearchQueryErrorCodeIndexUnreachable](indexunreachable.md): The index is unreachable.
- [CSSearchQueryErrorCodeInvalidQuery](invalidquery.md): The query is syntactically invalid or specifies items that your app doesn’t have access to.
- [CSSearchQueryErrorCodeUnknown](unknown.md): An unknown error occurred.
