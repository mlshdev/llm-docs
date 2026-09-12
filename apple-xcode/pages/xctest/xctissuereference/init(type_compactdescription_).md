> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/init(type:compactdescription:)](https://developer.apple.com/documentation/xctest/xctissuereference/init(type:compactdescription:))

# init(type:compactDescription:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an issue with a compact description for a test failure.

## Declaration

```swift
convenience init(type: XCTIssueReference.IssueType, compactDescription: String)
```

## Parameters

- `type`: A value for classifying an issue that occurs during testing.
- `compactDescription`: A concise description of the issue that doesn’t include transient data and is suitable for use in test run summaries and for aggregation of results across multiple test runs.

## See Also

### Initializers

- [init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:)](init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_%29.md): Creates an issue for a test failure, with descriptions, source code location, error, and attachments.

# initWithType:compactDescription: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an issue with a compact description for a test failure.

## Declaration

```objectivec
- (instancetype) initWithType:(XCTIssueType) type compactDescription:(NSString *) compactDescription;
```

## Parameters

- `type`: A value for classifying an issue that occurs during testing.
- `compactDescription`: A concise description of the issue that doesn’t include transient data and is suitable for use in test run summaries and for aggregation of results across multiple test runs.

## See Also

### Initializers

- [initWithType:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:](init%28type_compactdescription_detaileddescription_sourcecodecontext_associatederror_attachments_%29.md): Creates an issue for a test failure, with descriptions, source code location, error, and attachments.
