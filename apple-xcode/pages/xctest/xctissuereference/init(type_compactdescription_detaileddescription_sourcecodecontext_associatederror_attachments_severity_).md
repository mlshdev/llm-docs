> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissuereference/init(type:compactdescription:detaileddescription:sourcecodecontext:associatederror:attachments:severity:)](https://developer.apple.com/documentation/xctest/xctissuereference/init(type:compactdescription:detaileddescription:sourcecodecontext:associatederror:attachments:severity:))

# init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

## Declaration

```swift
init(type: XCTIssueReference.IssueType, compactDescription: String, detailedDescription: String?, sourceCodeContext: XCTSourceCodeContext, associatedError: (any Error)?, attachments: [XCTAttachment], severity: XCTIssueReference.Severity)
```

# initWithType:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

## Declaration

```objectivec
- (instancetype) initWithType:(XCTIssueType) type compactDescription:(NSString *) compactDescription detailedDescription:(NSString *) detailedDescription sourceCodeContext:(XCTSourceCodeContext *) sourceCodeContext associatedError:(NSError *) associatedError attachments:(NSArray<XCTAttachment *> *) attachments severity:(XCTIssueSeverity) severity;
```
