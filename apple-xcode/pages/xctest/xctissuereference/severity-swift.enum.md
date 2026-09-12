> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/severity-swift.enum](https://developer.apple.com/documentation/xctest/xctissuereference/severity-swift.enum)

# XCTIssueReference.Severity (Swift)

**Framework:** XCTest  
**Kind:** Enumeration

An enum representing the severity of a test issue.

## Declaration

```swift
enum Severity
```

<a id="overview"></a>

## Overview

The numeric values of this enum’s cases are comparable. A case which represents higher severity has a larger numeric value than one which represents lower severity. Specifying a numeric severity value other than one corresponding to a case defined below when initializing an `XCTIssue` is unsupported.

## Topics

### Enumeration Cases

- [XCTIssueReference.Severity.error](severity-swift.enum/error.md): The severity level for an issue which represents an error in a test.
- [XCTIssueReference.Severity.warning](severity-swift.enum/warning.md): The severity level for an issue which should be noted but is not necessarily an error.

### Initializers

- [init(rawValue:)](severity-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCTIssueSeverity (Objective-C)

**Framework:** XCTest  
**Kind:** Enumeration

An enum representing the severity of a test issue.

## Declaration

```objectivec
enum XCTIssueSeverity : NSInteger;
```

<a id="overview"></a>

## Overview

The numeric values of this enum’s cases are comparable. A case which represents higher severity has a larger numeric value than one which represents lower severity. Specifying a numeric severity value other than one corresponding to a case defined below when initializing an `XCTIssue` is unsupported.

## Topics

### Enumeration Cases

- [XCTIssueSeverityError](severity-swift.enum/error.md): The severity level for an issue which represents an error in a test.
- [XCTIssueSeverityWarning](severity-swift.enum/warning.md): The severity level for an issue which should be noted but is not necessarily an error.
