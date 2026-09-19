> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uislider/behavioralstyle

# behavioralStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The style that determines how the slider behaves.

## Declaration

```swift
var behavioralStyle: UIBehavioralStyle { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual behavior style when the [preferredBehavioralStyle](../uibutton/preferredbehavioralstyle.md) is [UIBehavioralStyle.automatic](../uibehavioralstyle/automatic.md).

## See Also

### Modifying the slider’s behavior

- [isContinuous](iscontinuous.md): A Boolean value indicating whether changes in the slider’s value generate continuous update events.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.

# behavioralStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The style that determines how the slider behaves.

## Declaration

```objectivec
@property (nonatomic, readonly) UIBehavioralStyle behavioralStyle;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the actual behavior style when the [preferredBehavioralStyle](../uibutton/preferredbehavioralstyle.md) is [UIBehavioralStyleAutomatic](../uibehavioralstyle/automatic.md).

## See Also

### Modifying the slider’s behavior

- [continuous](iscontinuous.md): A Boolean value indicating whether changes in the slider’s value generate continuous update events.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.
