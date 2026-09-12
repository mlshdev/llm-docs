> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacevolumecontrol/init(origin:)](https://developer.apple.com/documentation/watchkit/wkinterfacevolumecontrol/init(origin:))

# init(origin:) (Swift)

**Framework:** WatchKit  
**Kind:** Initializer  
**Availability:** watchOS 6.0+

Creates a volume control for use in SwiftUI.

## Declaration

```swift
init(origin: WKInterfaceVolumeControl.Origin)
```

## Parameters

- `origin`: The source of the audio managed by the volume control. For a list of possible values, see [WKInterfaceVolumeControl.Origin](origin.md).

<a id="Discussion"></a>

## Discussion

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### SwiftUI

- [WKInterfaceVolumeControl.Origin](origin.md): The source of the audio managed by the volume control.

# initWithOrigin: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Creates a volume control for use in SwiftUI.

## Declaration

```objectivec
- (instancetype) initWithOrigin:(WKInterfaceVolumeControlOrigin) origin;
```

## Parameters

- `origin`: The source of the audio managed by the volume control. For a list of possible values, see [WKInterfaceVolumeControlOrigin](origin.md).

<a id="Discussion"></a>

## Discussion

Use this initializer to create an instance that you can wrap in a [WKInterfaceObjectRepresentable](https://developer.apple.com/documentation/swiftui/wkinterfaceobjectrepresentable) view. If you aren’t using SwiftUI, create the control by dragging it from the Object library to your storyboard instead.

## See Also

### SwiftUI

- [WKInterfaceVolumeControlOrigin](origin.md): The source of the audio managed by the volume control.
