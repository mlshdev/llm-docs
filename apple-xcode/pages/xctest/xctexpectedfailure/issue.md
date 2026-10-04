> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-4fca00e84bae; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctexpectedfailure/issue

# issue (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The issue that fulfills the expected failure.

## Declaration

```swift
var issue: XCTIssue { get }
```

```swift
@NSCopying var issue: XCTIssueReference { get }
```

## See Also

### Detailing Expected Failure

- [failureReason](failurereason.md): An optional string that describes why the test expects a failure.

# issue (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The issue that fulfills the expected failure.

## Declaration

```objectivec
@property (copy, readonly) XCTIssue * issue;
```

## See Also

### Detailing Expected Failure

- [failureReason](failurereason.md): An optional string that describes why the test expects a failure.
