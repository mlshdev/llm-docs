> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpwindow/mapbuttonsafearealayoutguide

# mapButtonSafeAreaLayoutGuide (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A layout guide that represents the portion of the window unobscured by other content.

## Declaration

```swift
var mapButtonSafeAreaLayoutGuide: UILayoutGuide { get }
```

<a id="discussion"></a>

## Discussion

The [CPMapTemplate](../cpmaptemplate.md) type adds buttons and other content to your navigation interface. When displaying map content in your custom view controller, this layout guide defines the area not covered by that other content. Use this guide to position map-related content that needs to remain visible.

# mapButtonSafeAreaLayoutGuide (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A layout guide that represents the portion of the window unobscured by other content.

## Declaration

```objectivec
@property (nonatomic, readonly) UILayoutGuide * mapButtonSafeAreaLayoutGuide;
```

<a id="discussion"></a>

## Discussion

The [CPMapTemplate](../cpmaptemplate.md) type adds buttons and other content to your navigation interface. When displaying map content in your custom view controller, this layout guide defines the area not covered by that other content. Use this guide to position map-related content that needs to remain visible.
