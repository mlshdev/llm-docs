> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppanel/maximumpanelitemscount

# maximumPanelItemsCount (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The maximum number of items the panel is able to display.

## Declaration

```swift
class var maximumPanelItemsCount: Int { get }
```

<a id="discussion"></a>

## Discussion

Each panel subtype configures this property with the maximum number of items it’s able to display. When assembling content for your panel, check the value of this property to determine precisely how many items the current type of panel supports.

# maximumPanelItemsCount (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The maximum number of items the panel is able to display.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSInteger maximumPanelItemsCount;
```

<a id="discussion"></a>

## Discussion

Each panel subtype configures this property with the maximum number of items it’s able to display. When assembling content for your panel, check the value of this property to determine precisely how many items the current type of panel supports.
