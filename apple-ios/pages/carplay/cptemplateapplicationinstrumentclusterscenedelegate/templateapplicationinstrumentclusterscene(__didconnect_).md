> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscenedelegate/templateapplicationinstrumentclusterscene(_:didconnect:)

# templateApplicationInstrumentClusterScene(\_:didConnect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that CarPlay added an instrument cluster scene to your app.

## Declaration

```swift
optional func templateApplicationInstrumentClusterScene(_ templateApplicationInstrumentClusterScene: CPTemplateApplicationInstrumentClusterScene, didConnect instrumentClusterController: CPInstrumentClusterController)
```

## Parameters

- `templateApplicationInstrumentClusterScene`: The instrument cluster scene that CarPlay added.
- `instrumentClusterController`: The object you use to manage the scene’s interface. This type contains the scene’s window in its [instrumentClusterWindow](../cpinstrumentclustercontroller/instrumentclusterwindow.md) property.

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it adds an instrument cluster scene to your app. The object in the `instrumentClusterController` parameter provides a window you can use to install your custom content and details about additional content to show. Set the [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property of this window to the view controller you use to manage the content. Present your content using the scene’s suggested interface style, which can get from the scene’s [contentStyle](../cptemplateapplicationinstrumentclusterscene/contentstyle.md) property.

## See Also

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene(\_:didDisconnectInstrumentClusterController:)](templateapplicationinstrumentclusterscene%28__diddisconnectinstrumentclustercontroller_%29.md): Tells the delegate about the removal of an instrument cluster scene from your app.

# templateApplicationInstrumentClusterScene:didConnectInstrumentClusterController: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

Tells the delegate that CarPlay added an instrument cluster scene to your app.

## Declaration

```objectivec
- (void) templateApplicationInstrumentClusterScene:(CPTemplateApplicationInstrumentClusterScene *) templateApplicationInstrumentClusterScene didConnectInstrumentClusterController:(CPInstrumentClusterController *) instrumentClusterController;
```

## Parameters

- `templateApplicationInstrumentClusterScene`: The instrument cluster scene that CarPlay added.
- `instrumentClusterController`: The object you use to manage the scene’s interface. This type contains the scene’s window in its [instrumentClusterWindow](../cpinstrumentclustercontroller/instrumentclusterwindow.md) property.

<a id="discussion"></a>

## Discussion

CarPlay calls this method when it adds an instrument cluster scene to your app. The object in the `instrumentClusterController` parameter provides a window you can use to install your custom content and details about additional content to show. Set the [rootViewController](https://developer.apple.com/documentation/uikit/uiwindow/rootviewcontroller) property of this window to the view controller you use to manage the content. Present your content using the scene’s suggested interface style, which can get from the scene’s [contentStyle](../cptemplateapplicationinstrumentclusterscene/contentstyle.md) property.

## See Also

### Responding to the scene life-cycle changes

- [templateApplicationInstrumentClusterScene:didDisconnectInstrumentClusterController:](templateapplicationinstrumentclusterscene%28__diddisconnectinstrumentclustercontroller_%29.md): Tells the delegate about the removal of an instrument cluster scene from your app.
