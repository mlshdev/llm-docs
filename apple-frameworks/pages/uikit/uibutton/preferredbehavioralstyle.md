> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/preferredbehavioralstyle](https://developer.apple.com/documentation/uikit/uibutton/preferredbehavioralstyle)

# preferredBehavioralStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The preferred behavioral style.

## Declaration

```swift
var preferredBehavioralStyle: UIBehavioralStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the behavioral style for the button. If the value of the property is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md), use the [behavioralStyle](behavioralstyle.md) property to determine the actual style.

The default value for [preferredBehavioralStyle](preferredbehavioralstyle.md) is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md). To learn more about behavioral styles, see [UIBehavioralStyle](../uibehavioralstyle.md).

## See Also

### Specifying the behavioral style

- [behavioralStyle](behavioralstyle.md): The style that determines how the button behaves.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.

# preferredBehavioralStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The preferred behavioral style.

## Declaration

```objectivec
@property (nonatomic) UIBehavioralStyle preferredBehavioralStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the behavioral style for the button. If the value of the property is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md), use the [behavioralStyle](behavioralstyle.md) property to determine the actual style.

The default value for [preferredBehavioralStyle](preferredbehavioralstyle.md) is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md). To learn more about behavioral styles, see [UIBehavioralStyle](../uibehavioralstyle.md).

## See Also

### Specifying the behavioral style

- [behavioralStyle](behavioralstyle.md): The style that determines how the button behaves.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.
