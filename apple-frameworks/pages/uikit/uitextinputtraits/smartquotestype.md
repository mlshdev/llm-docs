> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/smartquotestype](https://developer.apple.com/documentation/uikit/uitextinputtraits/smartquotestype)

# smartQuotesType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for smart quotes.

## Declaration

```swift
optional var smartQuotesType: UITextSmartQuotesType { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit replaces straight apostrophes and quotation marks with region-specific glyphs. The default value of this property is [UITextSmartQuotesType.default](../uitextsmartquotestype/default.md), which selectively enables smart quotes based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.

# smartQuotesType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The configuration state for smart quotes.

## Declaration

```objectivec
@property (nonatomic) UITextSmartQuotesType smartQuotesType;
```

<a id="Discussion"></a>

## Discussion

Use this property to configure whether UIKit replaces straight apostrophes and quotation marks with region-specific glyphs. The default value of this property is [UITextSmartQuotesTypeDefault](../uitextsmartquotestype/default.md), which selectively enables smart quotes based on the keyboard type.

## See Also

### Configuring the autoformatting behaviors

- [UITextSmartQuotesType](../uitextsmartquotestype.md): Constants that indicate whether to enable or disable smart quotes.
- [smartDashesType](smartdashestype.md): The configuration state for smart dashes.
- [UITextSmartDashesType](../uitextsmartdashestype.md): Constants that specify the automatic conversion behavior between hyphens and en or em dashes.
- [smartInsertDeleteType](smartinsertdeletetype.md): The configuration state for the smart insertion and deletion of space characters.
- [UITextSmartInsertDeleteType](../uitextsmartinsertdeletetype.md): Constants that specify whether to automatically insert extra spaces after a paste operation or to delete them after a cut or delete operation.
