> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-bfcfe27766c6; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctissue-swift.struct/init(type:compactdescription:detaileddescription:sourcecodecontext:associatederror:attachments:severity:)

# init(type:compactDescription:detailedDescription:sourceCodeContext:associatedError:attachments:severity:)

**Framework:** XCTest  
**Kind:** Initializer

## Declaration

```swift
init(type: XCTIssue.IssueType, compactDescription: String, detailedDescription: String? = nil, sourceCodeContext: XCTSourceCodeContext = .init(), associatedError: (any Error)? = nil, attachments: [XCTAttachment] = [], severity: XCTIssue.Severity = .error)
```
