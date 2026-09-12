> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiokit/auaudiounitviewconfiguration/init(width:height:hosthascontroller:)](https://developer.apple.com/documentation/coreaudiokit/auaudiounitviewconfiguration/init(width:height:hosthascontroller:))

# init(width:height:hostHasController:) (Swift)

**Framework:** CoreAudioKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Creates a new configuration object.

## Declaration

```swift
init(width: CGFloat, height: CGFloat, hostHasController: Bool)
```

## Parameters

- `width`: The view’s width.
- `height`: The view’s height.
- `hostHasController`: A Boolean value that indicates whether the host shows its own control surface in this view configuration.

# initWithWidth:height:hostHasController: (Objective-C)

**Framework:** CoreAudioKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Creates a new configuration object.

## Declaration

```objectivec
- (instancetype) initWithWidth:(CGFloat) width height:(CGFloat) height hostHasController:(BOOL) hostHasController;
```

## Parameters

- `width`: The view’s width.
- `height`: The view’s height.
- `hostHasController`: A Boolean value that indicates whether the host shows its own control surface in this view configuration.
