> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscene/instrumentclustercontroller

# instrumentClusterController (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The controller object you use to present your map content in the instrument cluster.

## Declaration

```swift
var instrumentClusterController: CPInstrumentClusterController { get }
```

<a id="discussion"></a>

## Discussion

This property contains the interface controller you use to build your app’s instrument-cluster interface. CarPlay apps use a template-based approach to presenting content, which automatically adapts your interface to different vehicles and display sizes. Each template contains the data to display and the expected presentation style. The interface controller creates the views necessary to display that content in the instrument cluster.

## See Also

### Managing the scene’s interface

- [contentStyle](contentstyle.md): The current interface style for the instrument-cluster content.

# instrumentClusterController (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The controller object you use to present your map content in the instrument cluster.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) CPInstrumentClusterController * instrumentClusterController;
```

<a id="discussion"></a>

## Discussion

This property contains the interface controller you use to build your app’s instrument-cluster interface. CarPlay apps use a template-based approach to presenting content, which automatically adapts your interface to different vehicles and display sizes. Each template contains the data to display and the expected presentation style. The interface controller creates the views necessary to display that content in the instrument cluster.

## See Also

### Managing the scene’s interface

- [contentStyle](contentstyle.md): The current interface style for the instrument-cluster content.
