> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationscene/carwindow

# carWindow (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The window that displays the scene’s content.

## Declaration

```swift
var carWindow: CPWindow { get }
```

<a id="discussion"></a>

## Discussion

The system uses the scene’s window to manage its content. Navigation apps also use this window to display their custom map content. All other apps use a [CPInterfaceController](../cpinterfacecontroller.md) to present their interface content and don’t use this window.

# carWindow (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The window that displays the scene’s content.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPWindow * carWindow;
```

<a id="discussion"></a>

## Discussion

The system uses the scene’s window to manage its content. Navigation apps also use this window to display their custom map content. All other apps use a [CPInterfaceController](../cpinterfacecontroller.md) to present their interface content and don’t use this window.
