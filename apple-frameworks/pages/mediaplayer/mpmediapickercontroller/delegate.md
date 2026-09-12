> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediapickercontroller/delegate](https://developer.apple.com/documentation/mediaplayer/mpmediapickercontroller/delegate)

# delegate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

The delegate for a media item picker.

## Declaration

```swift
weak var delegate: (any MPMediaPickerControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Typically, you set the delegate to be the same object that initializes and displays the media item picker.

## See Also

### Responding to media item picker selections

- [MPMediaPickerControllerDelegate](../mpmediapickercontrollerdelegate.md): The protocol you implement so that a media item picker can respond to a user making media item selections.

# delegate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

The delegate for a media item picker.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<MPMediaPickerControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Typically, you set the delegate to be the same object that initializes and displays the media item picker.

## See Also

### Responding to media item picker selections

- [MPMediaPickerControllerDelegate](../mpmediapickercontrollerdelegate.md): The protocol you implement so that a media item picker can respond to a user making media item selections.
