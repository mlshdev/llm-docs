> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkapplication/rootinterfacecontroller

# rootInterfaceController (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The app’s root interface controller.

## Declaration

```swift
var rootInterfaceController: WKInterfaceController? { get }
```

<a id="Discussion"></a>

## Discussion

The root interface controller is located in the app’s main storyboard and has the Main Entry Point object associated with it. WatchKit displays the root interface controller at launch time, although the app can present a different interface controller before the launch sequence finishes.

## See Also

### Getting the interface controller

- [visibleInterfaceController](visibleinterfacecontroller.md): Returns the last visible interface controller.

# rootInterfaceController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The app’s root interface controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKInterfaceController * rootInterfaceController;
```

<a id="Discussion"></a>

## Discussion

The root interface controller is located in the app’s main storyboard and has the Main Entry Point object associated with it. WatchKit displays the root interface controller at launch time, although the app can present a different interface controller before the launch sequence finishes.

## See Also

### Getting the interface controller

- [visibleInterfaceController](visibleinterfacecontroller.md): Returns the last visible interface controller.
