> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rppreviewviewcontrollermode](https://developer.apple.com/documentation/replaykit/rppreviewviewcontrollermode)

# RPPreviewViewControllerMode (Swift)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** tvOS

The modes used to determine whether the preview view controller or the share screen appears when editing a replay.

## Declaration

```swift
enum RPPreviewViewControllerMode
```

## Topics

### Constants

- [RPPreviewViewControllerMode.preview](rppreviewviewcontrollermode/preview.md): Preview screen displayed when editing a replay.
- [RPPreviewViewControllerMode.share](rppreviewviewcontrollermode/share.md): Share/AirDrop screen displayed when editing a replay.

### Initializers

- [init(rawValue:)](rppreviewviewcontrollermode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.
- [RPPreviewViewControllerDelegate](rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.

# RPPreviewViewControllerMode (Objective-C)

**Framework:** ReplayKit  
**Kind:** Enumeration  
**Availability:** tvOS

The modes used to determine whether the preview view controller or the share screen appears when editing a replay.

## Declaration

```objectivec
enum RPPreviewViewControllerMode : NSInteger;
```

## Topics

### Constants

- [RPPreviewViewControllerModePreview](rppreviewviewcontrollermode/preview.md): Preview screen displayed when editing a replay.
- [RPPreviewViewControllerModeShare](rppreviewviewcontrollermode/share.md): Share/AirDrop screen displayed when editing a replay.

## See Also

### Displaying the Preview UI

- [mode](rppreviewviewcontroller/mode.md): Deprecated. The type of screen that appears when the view is presented.
- [previewControllerDelegate](rppreviewviewcontroller/previewcontrollerdelegate.md): Deprecated. The preview view controller’s delegate.
- [RPPreviewViewControllerDelegate](rppreviewviewcontrollerdelegate.md): Deprecated. The protocol you implement to respond to changes to a screen-recording user interface.
