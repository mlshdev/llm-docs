> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/knownissuematcher](https://developer.apple.com/documentation/testing/knownissuematcher)

# KnownIssueMatcher

**Framework:** Swift Testing  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A function that is used to match known issues.

## Declaration

```swift
typealias KnownIssueMatcher = @Sendable (Issue) -> Bool
```

## Parameters

- `issue`: The issue to match.

<a id="return-value"></a>

## Return Value

Whether or not `issue` is known to occur.

## See Also

### Recording known issues in tests

- [withKnownIssue(\_:isIntermittent:sourceLocation:\_:)](withknownissue%28__isintermittent_sourcelocation___%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [withKnownIssue(\_:isIntermittent:isolation:sourceLocation:\_:)](withknownissue%28__isintermittent_isolation_sourcelocation___%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [withKnownIssue(\_:isIntermittent:sourceLocation:\_:when:matching:)](withknownissue%28__isintermittent_sourcelocation___when_matching_%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [withKnownIssue(\_:isIntermittent:isolation:sourceLocation:\_:when:matching:)](withknownissue%28__isintermittent_isolation_sourcelocation___when_matching_%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
