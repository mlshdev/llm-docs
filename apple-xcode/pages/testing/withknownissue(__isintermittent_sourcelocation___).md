> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:)](https://developer.apple.com/documentation/testing/withknownissue(_:isintermittent:sourcelocation:_:))

# withKnownIssue(\_:isIntermittent:sourceLocation:\_:)

**Framework:** Swift Testing  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Invoke a function that has a known issue that is expected to occur during its execution.

## Declaration

```swift
func withKnownIssue(_ comment: Comment? = nil, isIntermittent: Bool = false, sourceLocation: SourceLocation = #_sourceLocation, _ body: () throws -> Void)
```

## Parameters

- `comment`: An optional comment describing the known issue.
- `isIntermittent`: Whether or not the known issue occurs intermittently. If this argument is `true` and the known issue does not occur, no secondary issue is recorded.
- `sourceLocation`: The source location to which any recorded issues should be attributed.
- `body`: The function to invoke.

## Mentioned In

- [Migrating a test from XCTest](migratingfromxctest.md)

<a id="discussion"></a>

## Discussion

Use this function when a test is known to record one or more issues that should not cause the test to fail. For example:

```swift
@Test func example() {
  withKnownIssue {
    try flakyCall()
  }
}
```

Because all errors thrown by `body` are caught as known issues, this function is not throwing. If only some errors or issues are known to occur while others should continue to cause test failures, use [withKnownIssue(\_:isIntermittent:sourceLocation:\_:when:matching:)](withknownissue%28__isintermittent_sourcelocation___when_matching_%29.md) instead.

## See Also

### Related Documentation

- [Known issues](known-issues.md): Mark issues as known when running tests.

### Recording known issues in tests

- [withKnownIssue(\_:isIntermittent:isolation:sourceLocation:\_:)](withknownissue%28__isintermittent_isolation_sourcelocation___%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [withKnownIssue(\_:isIntermittent:sourceLocation:\_:when:matching:)](withknownissue%28__isintermittent_sourcelocation___when_matching_%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [withKnownIssue(\_:isIntermittent:isolation:sourceLocation:\_:when:matching:)](withknownissue%28__isintermittent_isolation_sourcelocation___when_matching_%29.md): Invoke a function that has a known issue that is expected to occur during its execution.
- [KnownIssueMatcher](knownissuematcher.md): A function that is used to match known issues.
