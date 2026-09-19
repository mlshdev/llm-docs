> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uislider/iscontinuous

# isContinuous (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether changes in the slider’s value generate continuous update events.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the slider triggers the associated target’s action method repeatedly, as the user moves the thumb. If [false](https://developer.apple.com/documentation/swift/false), the slider triggers the associated action method just once, when the user releases the slider’s thumb control to set the final value.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Modifying the slider’s behavior

- [behavioralStyle](behavioralstyle.md): The style that determines how the slider behaves.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.

# continuous (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether changes in the slider’s value generate continuous update events.

## Declaration

```objectivec
@property (nonatomic, getter=isContinuous) BOOL continuous;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the slider triggers the associated target’s action method repeatedly, as the user moves the thumb. If [false](https://developer.apple.com/documentation/swift/false), the slider triggers the associated action method just once, when the user releases the slider’s thumb control to set the final value.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Modifying the slider’s behavior

- [behavioralStyle](behavioralstyle.md): The style that determines how the slider behaves.
- [preferredBehavioralStyle](preferredbehavioralstyle.md): The preferred behavioral style.
- [UIBehavioralStyle](../uibehavioralstyle.md): Constants that indicate how a control behaves in apps built with Mac Catalyst.
