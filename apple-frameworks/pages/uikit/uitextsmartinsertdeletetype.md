> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsmartinsertdeletetype](https://developer.apple.com/documentation/uikit/uitextsmartinsertdeletetype)

# UITextSmartInsertDeleteType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.

## Declaration

```swift
enum UITextSmartInsertDeleteType
```

## Topics

### Constants

- [UITextSmartInsertDeleteType.default](uitextsmartinsertdeletetype/default.md): Use the default behavior for inserting and deleting space characters.
- [UITextSmartInsertDeleteType.no](uitextsmartinsertdeletetype/no.md): Disable the insertion or deletion of extra spaces.
- [UITextSmartInsertDeleteType.yes](uitextsmartinsertdeletetype/yes.md): Enable the insertion or deletion of extra spaces.

### Initializers

- [init(rawValue:)](uitextsmartinsertdeletetype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](uitextinputtraits/smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](uitextinputtraits/smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](uitextinputtraits/smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.

# UITextSmartInsertDeleteType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.

## Declaration

```objectivec
enum UITextSmartInsertDeleteType : NSInteger;
```

## Topics

### Constants

- [UITextSmartInsertDeleteTypeDefault](uitextsmartinsertdeletetype/default.md): Use the default behavior for inserting and deleting space characters.
- [UITextSmartInsertDeleteTypeNo](uitextsmartinsertdeletetype/no.md): Disable the insertion or deletion of extra spaces.
- [UITextSmartInsertDeleteTypeYes](uitextsmartinsertdeletetype/yes.md): Enable the insertion or deletion of extra spaces.

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](uitextinputtraits/smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](uitextinputtraits/smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](uitextinputtraits/smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.
