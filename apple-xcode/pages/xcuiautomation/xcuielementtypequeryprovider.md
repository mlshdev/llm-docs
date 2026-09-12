> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielementtypequeryprovider](https://developer.apple.com/documentation/xcuiautomation/xcuielementtypequeryprovider)

# XCUIElementTypeQueryProvider (Swift)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A type that provides ready-made queries for locating descendant UI elements.

## Declaration

```swift
@MainActor protocol XCUIElementTypeQueryProvider
```

<a id="overview"></a>

## Overview

Accessing the properties to get queries for descendant elements on an instance of a conforming class (such as an [XCUIElement](xcuielement.md) or [XCUIElementQuery](xcuielementquery.md) instance) is equivalent to calling [descendants(matching:)](xcuielementquery/descendants%28matching_%29.md) for the corresponding element type.

## Topics

### Finding the first matching element

- [firstMatch](xcuielementtypequeryprovider/firstmatch.md): The first element that matches the query.

### Querying descendant elements

- [activityIndicators](xcuielementtypequeryprovider/activityindicators.md): A query that matches activity-indicator view elements.
- [alerts](xcuielementtypequeryprovider/alerts.md): A query that matches alert view elements.
- [browsers](xcuielementtypequeryprovider/browsers.md): A query that matches browser elements.
- [buttons](xcuielementtypequeryprovider/buttons.md): A query that matches button control elements.
- [cells](xcuielementtypequeryprovider/cells.md): A query that matches cell elements.
- [checkBoxes](xcuielementtypequeryprovider/checkboxes.md): A query that matches checkbox control elements.
- [collectionViews](xcuielementtypequeryprovider/collectionviews.md): A query that matches collection view elements.
- [colorWells](xcuielementtypequeryprovider/colorwells.md): A query that matches color-well elements.
- [comboBoxes](xcuielementtypequeryprovider/comboboxes.md): A query that matches combo-box control elements.
- [datePickers](xcuielementtypequeryprovider/datepickers.md): A query that matches date-picker control elements.
- [decrementArrows](xcuielementtypequeryprovider/decrementarrows.md): A query that matches decrement-arrow control elements.
- [dialogs](xcuielementtypequeryprovider/dialogs.md): A query that matches dialog view elements.
- [disclosureTriangles](xcuielementtypequeryprovider/disclosuretriangles.md): A query that matches disclosure-triangle control elements.
- [disclosedChildRows](xcuielementtypequeryprovider/disclosedchildrows.md): A query that matches disclosed child row elements.
- [dockItems](xcuielementtypequeryprovider/dockitems.md): A query that matches dock-item control elements.
- [drawers](xcuielementtypequeryprovider/drawers.md): A query that matches drawer elements.
- [grids](xcuielementtypequeryprovider/grids.md): A query that matches grid view elements.
- [groups](xcuielementtypequeryprovider/groups.md): A query that matches group elements.
- [handles](xcuielementtypequeryprovider/handles.md): A query that matches handle control elements.
- [helpTags](xcuielementtypequeryprovider/helptags.md): A query that matches help-tag elements.
- [icons](xcuielementtypequeryprovider/icons.md): A query that matches icon elements.
- [images](xcuielementtypequeryprovider/images.md): A query that matches image-view elements.
- [incrementArrows](xcuielementtypequeryprovider/incrementarrows.md): A query that matches increment-arrow control elements.
- [keyboards](xcuielementtypequeryprovider/keyboards.md): A query that matches keyboard elements.
- [keys](xcuielementtypequeryprovider/keys.md): A query that matches key elements.
- [layoutAreas](xcuielementtypequeryprovider/layoutareas.md): A query that matches layout-area elements.
- [layoutItems](xcuielementtypequeryprovider/layoutitems.md): A query that matches layout-item elements.
- [levelIndicators](xcuielementtypequeryprovider/levelindicators.md): A query that matches level-indicator elements.
- [links](xcuielementtypequeryprovider/links.md): A query that matches link elements.
- [maps](xcuielementtypequeryprovider/maps.md): A query that matches map-view elements.
- [mattes](xcuielementtypequeryprovider/mattes.md): A query that matches matte elements.
- [menuBarItems](xcuielementtypequeryprovider/menubaritems.md): A query that matches menu bar item elements.
- [menuBars](xcuielementtypequeryprovider/menubars.md): A query that matches menu bar elements.
- [menuButtons](xcuielementtypequeryprovider/menubuttons.md): A query that matches menu button elements.
- [menuItems](xcuielementtypequeryprovider/menuitems.md): A query that matches menu item elements.
- [menus](xcuielementtypequeryprovider/menus.md): A query that matches menu elements.
- [navigationBars](xcuielementtypequeryprovider/navigationbars.md): A query that matches navigation bar elements.
- [otherElements](xcuielementtypequeryprovider/otherelements.md): A query that matches other view or control elements.
- [outlineRows](xcuielementtypequeryprovider/outlinerows.md): A query that matches outline row elements.
- [outlines](xcuielementtypequeryprovider/outlines.md): A query that matches outline view elements.
- [pageIndicators](xcuielementtypequeryprovider/pageindicators.md): A query that matches page-indicator control elements.
- [pickerWheels](xcuielementtypequeryprovider/pickerwheels.md): A query that matches picker-wheel control elements.
- [pickers](xcuielementtypequeryprovider/pickers.md): A query that matches picker control elements.
- [popUpButtons](xcuielementtypequeryprovider/popupbuttons.md): A query that matches popup-button control elements.
- [popovers](xcuielementtypequeryprovider/popovers.md): A query that matches popover view elements.
- [progressIndicators](xcuielementtypequeryprovider/progressindicators.md): A query that matches progress-indicator control elements.
- [radioButtons](xcuielementtypequeryprovider/radiobuttons.md): A query that matches radio-button control elements.
- [radioGroups](xcuielementtypequeryprovider/radiogroups.md): A query that matches radio group elements.
- [ratingIndicators](xcuielementtypequeryprovider/ratingindicators.md): A query that matches rating-indicator view elements.
- [relevanceIndicators](xcuielementtypequeryprovider/relevanceindicators.md): A query that matches relevance-indicator view elements.
- [rulerMarkers](xcuielementtypequeryprovider/rulermarkers.md): A query that matches ruler marker elements.
- [rulers](xcuielementtypequeryprovider/rulers.md): A query that matches ruler view elements.
- [scrollBars](xcuielementtypequeryprovider/scrollbars.md): A query that matches scroll bar elements.
- [scrollViews](xcuielementtypequeryprovider/scrollviews.md): A query that matches scroll view elements.
- [searchFields](xcuielementtypequeryprovider/searchfields.md): A query that matches search field elements.
- [secureTextFields](xcuielementtypequeryprovider/securetextfields.md): A query that matches secure text field elements.
- [segmentedControls](xcuielementtypequeryprovider/segmentedcontrols.md): A query that matches segmented control elements.
- [sheets](xcuielementtypequeryprovider/sheets.md): A query that matches sheet elements.
- [sliders](xcuielementtypequeryprovider/sliders.md): A query that matches slider elements.
- [splitGroups](xcuielementtypequeryprovider/splitgroups.md): A query that matches split group elements.
- [splitters](xcuielementtypequeryprovider/splitters.md): A query that matches splitter elements.
- [staticTexts](xcuielementtypequeryprovider/statictexts.md): A query that matches static-text view elements.
- [statusBars](xcuielementtypequeryprovider/statusbars.md): A query that matches status bar elements.
- [statusItems](xcuielementtypequeryprovider/statusitems.md): A query that matches status item elements.
- [steppers](xcuielementtypequeryprovider/steppers.md): A query that matches stepper elements.
- [switches](xcuielementtypequeryprovider/switches.md): A query that matches switch control elements.
- [tabBars](xcuielementtypequeryprovider/tabbars.md): A query that matches tab bar elements.
- [tabGroups](xcuielementtypequeryprovider/tabgroups.md): A query that matches tab group elements.
- [tableColumns](xcuielementtypequeryprovider/tablecolumns.md): A query that matches table column elements.
- [tableRows](xcuielementtypequeryprovider/tablerows.md): A query that matches table row elements.
- [tables](xcuielementtypequeryprovider/tables.md): A query that matches table elements.
- [tabs](xcuielementtypequeryprovider/tabs.md): A query that matches tab elements.
- [textFields](xcuielementtypequeryprovider/textfields.md): A query that matches text field elements.
- [textViews](xcuielementtypequeryprovider/textviews.md): A query that matches text view elements.
- [timelines](xcuielementtypequeryprovider/timelines.md): A query that matches timeline view elements.
- [toggles](xcuielementtypequeryprovider/toggles.md): A query that matches toggle control elements.
- [toolbarButtons](xcuielementtypequeryprovider/toolbarbuttons.md): A query that matches toolbar button elements.
- [toolbars](xcuielementtypequeryprovider/toolbars.md): A query that matches toolbar elements.
- [touchBars](xcuielementtypequeryprovider/touchbars.md): A query that matches touch bar elements.
- [valueIndicators](xcuielementtypequeryprovider/valueindicators.md): A query that matches value indicator elements.
- [webViews](xcuielementtypequeryprovider/webviews.md): A query that matches web view elements.
- [windows](xcuielementtypequeryprovider/windows.md): A query that matches window elements.

## Relationships

### Conforming Types

- [XCUIApplication](xcuiapplication.md)
- [XCUIElement](xcuielement.md)
- [XCUIElementQuery](xcuielementquery.md)
- [XCUISiriService](xcuisiriservice.md)

## See Also

### UI element queries

- [XCUIElementQuery](xcuielementquery.md): An object that defines the search criteria a test uses to identify UI elements.

# XCUIElementTypeQueryProvider (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A type that provides ready-made queries for locating descendant UI elements.

## Declaration

```objectivec
@protocol XCUIElementTypeQueryProvider
```

<a id="overview"></a>

## Overview

Accessing the properties to get queries for descendant elements on an instance of a conforming class (such as an [XCUIElement](xcuielement.md) or [XCUIElementQuery](xcuielementquery.md) instance) is equivalent to calling [descendantsMatchingType:](xcuielementquery/descendants%28matching_%29.md) for the corresponding element type.

## Topics

### Finding the first matching element

- [firstMatch](xcuielementtypequeryprovider/firstmatch.md): The first element that matches the query.

### Querying descendant elements

- [activityIndicators](xcuielementtypequeryprovider/activityindicators.md): A query that matches activity-indicator view elements.
- [alerts](xcuielementtypequeryprovider/alerts.md): A query that matches alert view elements.
- [browsers](xcuielementtypequeryprovider/browsers.md): A query that matches browser elements.
- [buttons](xcuielementtypequeryprovider/buttons.md): A query that matches button control elements.
- [cells](xcuielementtypequeryprovider/cells.md): A query that matches cell elements.
- [checkBoxes](xcuielementtypequeryprovider/checkboxes.md): A query that matches checkbox control elements.
- [collectionViews](xcuielementtypequeryprovider/collectionviews.md): A query that matches collection view elements.
- [colorWells](xcuielementtypequeryprovider/colorwells.md): A query that matches color-well elements.
- [comboBoxes](xcuielementtypequeryprovider/comboboxes.md): A query that matches combo-box control elements.
- [datePickers](xcuielementtypequeryprovider/datepickers.md): A query that matches date-picker control elements.
- [decrementArrows](xcuielementtypequeryprovider/decrementarrows.md): A query that matches decrement-arrow control elements.
- [dialogs](xcuielementtypequeryprovider/dialogs.md): A query that matches dialog view elements.
- [disclosureTriangles](xcuielementtypequeryprovider/disclosuretriangles.md): A query that matches disclosure-triangle control elements.
- [disclosedChildRows](xcuielementtypequeryprovider/disclosedchildrows.md): A query that matches disclosed child row elements.
- [dockItems](xcuielementtypequeryprovider/dockitems.md): A query that matches dock-item control elements.
- [drawers](xcuielementtypequeryprovider/drawers.md): A query that matches drawer elements.
- [grids](xcuielementtypequeryprovider/grids.md): A query that matches grid view elements.
- [groups](xcuielementtypequeryprovider/groups.md): A query that matches group elements.
- [handles](xcuielementtypequeryprovider/handles.md): A query that matches handle control elements.
- [helpTags](xcuielementtypequeryprovider/helptags.md): A query that matches help-tag elements.
- [icons](xcuielementtypequeryprovider/icons.md): A query that matches icon elements.
- [images](xcuielementtypequeryprovider/images.md): A query that matches image-view elements.
- [incrementArrows](xcuielementtypequeryprovider/incrementarrows.md): A query that matches increment-arrow control elements.
- [keyboards](xcuielementtypequeryprovider/keyboards.md): A query that matches keyboard elements.
- [keys](xcuielementtypequeryprovider/keys.md): A query that matches key elements.
- [layoutAreas](xcuielementtypequeryprovider/layoutareas.md): A query that matches layout-area elements.
- [layoutItems](xcuielementtypequeryprovider/layoutitems.md): A query that matches layout-item elements.
- [levelIndicators](xcuielementtypequeryprovider/levelindicators.md): A query that matches level-indicator elements.
- [links](xcuielementtypequeryprovider/links.md): A query that matches link elements.
- [maps](xcuielementtypequeryprovider/maps.md): A query that matches map-view elements.
- [mattes](xcuielementtypequeryprovider/mattes.md): A query that matches matte elements.
- [menuBarItems](xcuielementtypequeryprovider/menubaritems.md): A query that matches menu bar item elements.
- [menuBars](xcuielementtypequeryprovider/menubars.md): A query that matches menu bar elements.
- [menuButtons](xcuielementtypequeryprovider/menubuttons.md): A query that matches menu button elements.
- [menuItems](xcuielementtypequeryprovider/menuitems.md): A query that matches menu item elements.
- [menus](xcuielementtypequeryprovider/menus.md): A query that matches menu elements.
- [navigationBars](xcuielementtypequeryprovider/navigationbars.md): A query that matches navigation bar elements.
- [otherElements](xcuielementtypequeryprovider/otherelements.md): A query that matches other view or control elements.
- [outlineRows](xcuielementtypequeryprovider/outlinerows.md): A query that matches outline row elements.
- [outlines](xcuielementtypequeryprovider/outlines.md): A query that matches outline view elements.
- [pageIndicators](xcuielementtypequeryprovider/pageindicators.md): A query that matches page-indicator control elements.
- [pickerWheels](xcuielementtypequeryprovider/pickerwheels.md): A query that matches picker-wheel control elements.
- [pickers](xcuielementtypequeryprovider/pickers.md): A query that matches picker control elements.
- [popUpButtons](xcuielementtypequeryprovider/popupbuttons.md): A query that matches popup-button control elements.
- [popovers](xcuielementtypequeryprovider/popovers.md): A query that matches popover view elements.
- [progressIndicators](xcuielementtypequeryprovider/progressindicators.md): A query that matches progress-indicator control elements.
- [radioButtons](xcuielementtypequeryprovider/radiobuttons.md): A query that matches radio-button control elements.
- [radioGroups](xcuielementtypequeryprovider/radiogroups.md): A query that matches radio group elements.
- [ratingIndicators](xcuielementtypequeryprovider/ratingindicators.md): A query that matches rating-indicator view elements.
- [relevanceIndicators](xcuielementtypequeryprovider/relevanceindicators.md): A query that matches relevance-indicator view elements.
- [rulerMarkers](xcuielementtypequeryprovider/rulermarkers.md): A query that matches ruler marker elements.
- [rulers](xcuielementtypequeryprovider/rulers.md): A query that matches ruler view elements.
- [scrollBars](xcuielementtypequeryprovider/scrollbars.md): A query that matches scroll bar elements.
- [scrollViews](xcuielementtypequeryprovider/scrollviews.md): A query that matches scroll view elements.
- [searchFields](xcuielementtypequeryprovider/searchfields.md): A query that matches search field elements.
- [secureTextFields](xcuielementtypequeryprovider/securetextfields.md): A query that matches secure text field elements.
- [segmentedControls](xcuielementtypequeryprovider/segmentedcontrols.md): A query that matches segmented control elements.
- [sheets](xcuielementtypequeryprovider/sheets.md): A query that matches sheet elements.
- [sliders](xcuielementtypequeryprovider/sliders.md): A query that matches slider elements.
- [splitGroups](xcuielementtypequeryprovider/splitgroups.md): A query that matches split group elements.
- [splitters](xcuielementtypequeryprovider/splitters.md): A query that matches splitter elements.
- [staticTexts](xcuielementtypequeryprovider/statictexts.md): A query that matches static-text view elements.
- [statusBars](xcuielementtypequeryprovider/statusbars.md): A query that matches status bar elements.
- [statusItems](xcuielementtypequeryprovider/statusitems.md): A query that matches status item elements.
- [steppers](xcuielementtypequeryprovider/steppers.md): A query that matches stepper elements.
- [switches](xcuielementtypequeryprovider/switches.md): A query that matches switch control elements.
- [tabBars](xcuielementtypequeryprovider/tabbars.md): A query that matches tab bar elements.
- [tabGroups](xcuielementtypequeryprovider/tabgroups.md): A query that matches tab group elements.
- [tableColumns](xcuielementtypequeryprovider/tablecolumns.md): A query that matches table column elements.
- [tableRows](xcuielementtypequeryprovider/tablerows.md): A query that matches table row elements.
- [tables](xcuielementtypequeryprovider/tables.md): A query that matches table elements.
- [tabs](xcuielementtypequeryprovider/tabs.md): A query that matches tab elements.
- [textFields](xcuielementtypequeryprovider/textfields.md): A query that matches text field elements.
- [textViews](xcuielementtypequeryprovider/textviews.md): A query that matches text view elements.
- [timelines](xcuielementtypequeryprovider/timelines.md): A query that matches timeline view elements.
- [toggles](xcuielementtypequeryprovider/toggles.md): A query that matches toggle control elements.
- [toolbarButtons](xcuielementtypequeryprovider/toolbarbuttons.md): A query that matches toolbar button elements.
- [toolbars](xcuielementtypequeryprovider/toolbars.md): A query that matches toolbar elements.
- [touchBars](xcuielementtypequeryprovider/touchbars.md): A query that matches touch bar elements.
- [valueIndicators](xcuielementtypequeryprovider/valueindicators.md): A query that matches value indicator elements.
- [webViews](xcuielementtypequeryprovider/webviews.md): A query that matches web view elements.
- [windows](xcuielementtypequeryprovider/windows.md): A query that matches window elements.

## Relationships

### Conforming Types

- [XCUIElement](xcuielement.md)
- [XCUIElementQuery](xcuielementquery.md)
- [XCUISiriService](xcuisiriservice.md)

## See Also

### UI element queries

- [XCUIElementQuery](xcuielementquery.md): An object that defines the search criteria a test uses to identify UI elements.
