> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/smartinsertdeletetype](https://developer.apple.com/documentation/uikit/uitextinputtraits/smartinsertdeletetype)

# smartInsertDeleteType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for the smart insertion and deletion of space characters.

## Declaration

```swift
optional var smartInsertDeleteType: UITextSmartInsertDeleteType { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit may insert an extra space after a paste operation or delete one or two spaces after a cut or delete operation. The default value of this property is [UITextSmartInsertDeleteType.default](../uitextsmartinsertdeletetype/default.md), which selectively enables the behavior based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.

# smartInsertDeleteType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for the smart insertion and deletion of space characters.

## Declaration

```objectivec
@property (nonatomic) UITextSmartInsertDeleteType smartInsertDeleteType;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit may insert an extra space after a paste operation or delete one or two spaces after a cut or delete operation. The default value of this property is [UITextSmartInsertDeleteTypeDefault](../uitextsmartinsertdeletetype/default.md), which selectively enables the behavior based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.
