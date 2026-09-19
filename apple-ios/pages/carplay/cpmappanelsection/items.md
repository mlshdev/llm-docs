> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelsection/items

# items (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The items to display in the section.

## Declaration

```swift
var items: [CPMapPanelItem] { get set }
```

<a id="discussion"></a>

## Discussion

You specify the set of items at initialization time, but can change the items at any time. If you change the value of this property while the panel is visible, the system updates your CarPlay interface to reflect the changes.

# items (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The items to display in the section.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<CPMapPanelItem *> * items;
```

<a id="discussion"></a>

## Discussion

You specify the set of items at initialization time, but can change the items at any time. If you change the value of this property while the panel is visible, the system updates your CarPlay interface to reflect the changes.
