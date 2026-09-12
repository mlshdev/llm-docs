> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issuehandlingtrait/handleissue(_:)](https://developer.apple.com/documentation/testing/issuehandlingtrait/handleissue(_:))

# handleIssue(\_:)

**Framework:** Swift Testing  
**Kind:** Instance Method  
**Availability:** Swift 6.2+ · Xcode 26.0+

Handle a specified issue.

## Declaration

```swift
func handleIssue(_ issue: Issue) -> Issue?
```

## Parameters

- `issue`: The issue to handle.

<a id="return-value"></a>

## Return Value

An issue to replace `issue`, or else `nil` if the issue should not be recorded.
