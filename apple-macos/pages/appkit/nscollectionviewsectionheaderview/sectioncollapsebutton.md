> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewsectionheaderview/sectioncollapsebutton](https://developer.apple.com/documentation/appkit/nscollectionviewsectionheaderview/sectioncollapsebutton)

# sectionCollapseButton (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A control that lets users collapse and open a collection view section.

## Declaration

```swift
@MainActor @IBOutlet weak optional var sectionCollapseButton: NSButton? { get set }
```

<a id="Discussion"></a>

## Discussion

For the best user experience, set this property to the button that lets users control the collapsing of a section so that the collection view can show and hide the button appropriately, based on whether the section’s items can be displayed in the available space. The collection view uses its [toggleSectionCollapse(\_:)](../nscollectionview/togglesectioncollapse%28__%29.md) property to access this button.

# sectionCollapseButton (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12+

A control that lets users collapse and open a collection view section.

## Declaration

```objectivec
@property (weak, nullable) NSButton * sectionCollapseButton;
```

<a id="Discussion"></a>

## Discussion

For the best user experience, set this property to the button that lets users control the collapsing of a section so that the collection view can show and hide the button appropriately, based on whether the section’s items can be displayed in the available space. The collection view uses its [toggleSectionCollapse:](../nscollectionview/togglesectioncollapse%28__%29.md) property to access this button.
