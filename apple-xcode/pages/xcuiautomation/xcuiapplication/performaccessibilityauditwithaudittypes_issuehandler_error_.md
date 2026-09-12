> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/performaccessibilityauditwithaudittypes:issuehandler:error:](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/performaccessibilityauditwithaudittypes:issuehandler:error:)

# performAccessibilityAuditWithAuditTypes:issueHandler:error:

**Interface language:** Objective-C

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Xcode 16.3+

## Declaration

```objectivec
- (BOOL) performAccessibilityAuditWithAuditTypes:(XCUIAccessibilityAuditType) auditTypes issueHandler:(BOOL (^)(XCUIAccessibilityAuditIssue *issue)) block error:(NSError **) outError;
```

## See Also

### Performing an accessibility audit

- [XCUIAccessibilityAuditType](../xcuiaccessibilityaudittype.md)
- [XCUIAccessibilityAuditIssue](../xcuiaccessibilityauditissue.md)
