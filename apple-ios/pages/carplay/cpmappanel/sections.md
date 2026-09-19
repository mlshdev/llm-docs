> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanel/sections

# sections (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The sections of content to display in the panel.

## Declaration

```swift
var sections: [CPMapPanelSection] { get set }
```

<a id="discussion"></a>

## Discussion

You specify this information initially when you create the panel, but can also update the list of sections by assigning a new value to this property. When assigning a new value to this property, the panel discards the previous data and stores a copy of the new sections you provide.

If the panel isn’t tall enough to display all of the sections at the same time, it places them in a scrollable interface.

# sections (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The sections of content to display in the panel.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSArray<CPMapPanelSection *> * sections;
```

<a id="discussion"></a>

## Discussion

You specify this information initially when you create the panel, but can also update the list of sections by assigning a new value to this property. When assigning a new value to this property, the panel discards the previous data and stores a copy of the new sections you provide.

If the panel isn’t tall enough to display all of the sections at the same time, it places them in a scrollable interface.
