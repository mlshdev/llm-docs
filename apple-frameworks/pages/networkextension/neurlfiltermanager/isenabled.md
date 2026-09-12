> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/isenabled](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/isenabled)

# isEnabled

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A Boolean value that toggles the enabled status of the URL filter.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the URL filter starts filtering URLs. If `false`, the filter stops filtering.

This value defaults to `false`.

## See Also

### Managing filter life cycle

- [shouldFailClosed](shouldfailclosed.md): A Boolean value that determines how the filter behaves if it fails to make a filtering decision.
- [prefilterFetchInterval](prefilterfetchinterval.md): The time interval at which the the filter control provider app extension runs.
