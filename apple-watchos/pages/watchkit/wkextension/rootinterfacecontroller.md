> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkextension/rootinterfacecontroller](https://developer.apple.com/documentation/watchkit/wkextension/rootinterfacecontroller)

# rootInterfaceController (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The app’s root interface controller.

## Declaration

```swift
var rootInterfaceController: WKInterfaceController? { get }
```

<a id="Discussion"></a>

## Discussion

The root interface controller is located in the app’s main storyboard and has the Main Entry Point object associated with it. WatchKit displays the root interface controller at launch time, although the app can present a different interface controller before the launch sequence finishes.

## See Also

### Getting the interface controllers

- [visibleInterfaceController](visibleinterfacecontroller.md): Deprecated. Returns the last visible interface controller.

# rootInterfaceController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 9.2)

The app’s root interface controller.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) WKInterfaceController * rootInterfaceController;
```

<a id="Discussion"></a>

## Discussion

The root interface controller is located in the app’s main storyboard and has the Main Entry Point object associated with it. WatchKit displays the root interface controller at launch time, although the app can present a different interface controller before the launch sequence finishes.

## See Also

### Getting the interface controllers

- [visibleInterfaceController](visibleinterfacecontroller.md): Deprecated. Returns the last visible interface controller.
