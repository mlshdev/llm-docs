> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiaccessibilityaudittype](https://developer.apple.com/documentation/xcuiautomation/xcuiaccessibilityaudittype)

# XCUIAccessibilityAuditType (Swift)

**Framework:** XCUIAutomation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Xcode 16.3+

## Declaration

```swift
struct XCUIAccessibilityAuditType
```

## Topics

### Accessibility audit type creation

- [init(rawValue:)](xcuiaccessibilityaudittype/init%28rawvalue_%29.md)

### Accessibility audit types

- [action](xcuiaccessibilityaudittype/action.md)
- [all](xcuiaccessibilityaudittype/all.md)
- [contrast](xcuiaccessibilityaudittype/contrast.md)
- [dynamicType](xcuiaccessibilityaudittype/dynamictype.md)
- [elementDetection](xcuiaccessibilityaudittype/elementdetection.md)
- [hitRegion](xcuiaccessibilityaudittype/hitregion.md)
- [parentChild](xcuiaccessibilityaudittype/parentchild.md)
- [sufficientElementDescription](xcuiaccessibilityaudittype/sufficientelementdescription.md)
- [textClipped](xcuiaccessibilityaudittype/textclipped.md)
- [trait](xcuiaccessibilityaudittype/trait.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Performing an accessibility audit

- [performAccessibilityAudit(for:\_:)](xcuiapplication/performaccessibilityaudit%28for___%29.md)
- [XCUIAccessibilityAuditIssue](xcuiaccessibilityauditissue.md)

# XCUIAccessibilityAuditType (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

## Declaration

```objectivec
enum XCUIAccessibilityAuditType : uint64_t;
```

## Topics

### Accessibility audit types

- [XCUIAccessibilityAuditTypeAction](xcuiaccessibilityaudittype/action.md)
- [XCUIAccessibilityAuditTypeAll](xcuiaccessibilityaudittype/all.md)
- [XCUIAccessibilityAuditTypeContrast](xcuiaccessibilityaudittype/contrast.md)
- [XCUIAccessibilityAuditTypeDynamicType](xcuiaccessibilityaudittype/dynamictype.md)
- [XCUIAccessibilityAuditTypeElementDetection](xcuiaccessibilityaudittype/elementdetection.md)
- [XCUIAccessibilityAuditTypeHitRegion](xcuiaccessibilityaudittype/hitregion.md)
- [XCUIAccessibilityAuditTypeParentChild](xcuiaccessibilityaudittype/parentchild.md)
- [XCUIAccessibilityAuditTypeSufficientElementDescription](xcuiaccessibilityaudittype/sufficientelementdescription.md)
- [XCUIAccessibilityAuditTypeTextClipped](xcuiaccessibilityaudittype/textclipped.md)
- [XCUIAccessibilityAuditTypeTrait](xcuiaccessibilityaudittype/trait.md)

## See Also

### Performing an accessibility audit

- [performAccessibilityAuditWithAuditTypes:issueHandler:error:](xcuiapplication/performaccessibilityauditwithaudittypes_issuehandler_error_.md)
- [XCUIAccessibilityAuditIssue](xcuiaccessibilityauditissue.md)
