> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/performaccessibilityaudit(for:_:)](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/performaccessibilityaudit(for:_:))

# performAccessibilityAudit(for:\_:)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+ · Xcode 16.3+

## Declaration

```swift
@MainActor @nonobjc @preconcurrency func performAccessibilityAudit(for auditTypes: XCUIAccessibilityAuditType = .all, _ issueHandler: ((XCUIAccessibilityAuditIssue) throws -> Bool)? = nil) throws
```

## See Also

### Performing an accessibility audit

- [XCUIAccessibilityAuditType](../xcuiaccessibilityaudittype.md)
- [XCUIAccessibilityAuditIssue](../xcuiaccessibilityauditissue.md)
