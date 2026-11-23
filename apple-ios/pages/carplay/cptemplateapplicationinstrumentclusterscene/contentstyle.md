> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptemplateapplicationinstrumentclusterscene/contentstyle

# contentStyle (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The current interface style for the instrument-cluster content.

## Declaration

```swift
var contentStyle: UIUserInterfaceStyle { get }
```

<a id="discussion"></a>

## Discussion

This property indicates whether your app displays instrument-cluster content using a light, dark, or unspecified appearance. The vehicle settings define the style, which can change while CarPlay is active. When the style changes, CarPlay reports the change to the [contentStyleDidChange(\_:)](../cptemplateapplicationinstrumentclusterscenedelegate/contentstyledidchange%28__%29.md) method of the scene’s delegate object.

## See Also

### Managing the scene’s interface

- [instrumentClusterController](instrumentclustercontroller.md): The controller object you use to present your map content in the instrument cluster.

# contentStyle (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

The current interface style for the instrument-cluster content.

## Declaration

```objectivec
@property (nonatomic, readonly) UIUserInterfaceStyle contentStyle;
```

<a id="discussion"></a>

## Discussion

This property indicates whether your app displays instrument-cluster content using a light, dark, or unspecified appearance. The vehicle settings define the style, which can change while CarPlay is active. When the style changes, CarPlay reports the change to the [contentStyleDidChange:](../cptemplateapplicationinstrumentclusterscenedelegate/contentstyledidchange%28__%29.md) method of the scene’s delegate object.

## See Also

### Managing the scene’s interface

- [instrumentClusterController](instrumentclustercontroller.md): The controller object you use to present your map content in the instrument cluster.
