> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscene/interfacecontroller

# interfaceController (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The controller object you use to present your app’s interface.

## Declaration

```swift
var interfaceController: CPInterfaceController { get }
```

<a id="discussion"></a>

## Discussion

This property contains the interface controller you use to build the interface for your CarPlay app. CarPlay apps use a template-based approach to presenting content, which insulates you from having to customize your interface for different vehicles and different display sizes. Each template contains the data to display and the expected presentation style. The interface controller creates the views necessary to display that content on the current vehicle’s display.

All apps use the interface controller in this property to build their interface. If you’re building a navigation app, you present most of your content using this interface controller but also add your custom map content to the scene’s window.

# interfaceController (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The controller object you use to present your app’s interface.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPInterfaceController * interfaceController;
```

<a id="discussion"></a>

## Discussion

This property contains the interface controller you use to build the interface for your CarPlay app. CarPlay apps use a template-based approach to presenting content, which insulates you from having to customize your interface for different vehicles and different display sizes. Each template contains the data to display and the expected presentation style. The interface controller creates the views necessary to display that content on the current vehicle’s display.

All apps use the interface controller in this property to build their interface. If you’re building a navigation app, you present most of your content using this interface controller but also add your custom map content to the scene’s window.
