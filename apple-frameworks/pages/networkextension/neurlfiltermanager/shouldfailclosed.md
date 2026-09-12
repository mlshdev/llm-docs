> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/shouldfailclosed](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/shouldfailclosed)

# shouldFailClosed

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A Boolean value that determines how the filter behaves if it fails to make a filtering decision.

## Declaration

```swift
var shouldFailClosed: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the filter blocks URLs if the filter is enabled but failed to make any filtering decision. This can be the case when the filter encounters a communication failure with the PIR server. If the value is `false`, URLs are allowed even if the filter failed to make a filtering decision.

This value defaults to `false`.

## See Also

### Managing filter life cycle

- [isEnabled](isenabled.md): A Boolean value that toggles the enabled status of the URL filter.
- [prefilterFetchInterval](prefilterfetchinterval.md): The time interval at which the the filter control provider app extension runs.
