> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/smartdashestype](https://developer.apple.com/documentation/uikit/uitextinputtraits/smartdashestype)

# smartDashesType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for smart dashes.

## Declaration

```swift
optional var smartDashesType: UITextSmartDashesType { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit converts two hyphens into an en-dash and three hyphens into an em-dash automatically. The default value of this property is [UITextSmartDashesType.default](../uitextsmartdashestype/default.md), which selectively enables smart dashes based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.

# smartDashesType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for smart dashes.

## Declaration

```objectivec
@property (nonatomic) UITextSmartDashesType smartDashesType;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit converts two hyphens into an en-dash and three hyphens into an em-dash automatically. The default value of this property is [UITextSmartDashesTypeDefault](../uitextsmartdashestype/default.md), which selectively enables smart dashes based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [smartQuotesType](smartquotestype.md): The configuration state for smart quotes.
- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.
