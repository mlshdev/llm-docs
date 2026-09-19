> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/delegate-swift.property

# delegate (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The app-specific object that the system notifies when it hides and shows the panel.

## Declaration

```swift
weak var delegate: (any CPMapPanel.Delegate)? { get set }
```

<a id="discussion"></a>

## Discussion

Specify a custom object that adopts the [CPMapPanel.Delegate](delegate-swift.protocol.md) protocol if you want to know when the map panel appears or disappears from your CarPlay interface. The system maintains a weak reference to the object you provide, so keep a reference to the object in your own code.

# delegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The app-specific object that the system notifies when it hides and shows the panel.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<CPMapPanelDelegate> delegate;
```

<a id="discussion"></a>

## Discussion

Specify a custom object that adopts the [CPMapPanelDelegate](delegate-swift.protocol.md) protocol if you want to know when the map panel appears or disappears from your CarPlay interface. The system maintains a weak reference to the object you provide, so keep a reference to the object in your own code.
