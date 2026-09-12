> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/automatic-observation-tracking](https://developer.apple.com/documentation/uikit/automatic-observation-tracking)

# Automatic observation tracking (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Simplify updating views when data changes by making updates in methods that support automatic observation tracking.

<a id="Overview"></a>

## Overview

Use automatic observation tracking to update your views in response to model object changes without manually invalidating views. Mark your model classes with the [Observable](https://developer.apple.com/documentation/observation/observable) macro, then read model properties in methods like [updateProperties()](uiview/updateproperties%28%29.md) or [layoutSubviews()](uiview/layoutsubviews%28%29.md). UIKit tracks which properties you access and automatically calls these methods again when those properties change. This approach eliminates the need to manually call methods like [setNeedsLayout()](uiview/setneedslayout%28%29.md) or [setNeedsDisplay()](uiview/setneedsdisplay%28%29.md) after updating model data, reducing opportunities for bugs and outdated displays.

These methods support automatic observation tracking in views, view controllers, presentation controllers, buttons, collection view cells, table view cells, and table view headers and footers. For more information, see [Updating views automatically with observation tracking in UIKit](updating-views-automatically-with-observation-tracking-in-uikit.md).

## Topics

### Observing data in views

- [updateProperties()](uiview/updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [layoutSubviews()](uiview/layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints()](uiview/updateconstraints%28%29.md): Updates constraints for the view.
- [draw(\_:)](uiview/draw%28__%29.md): Draws the view’s image within the passed-in rectangle.

### Observing data in view controllers

- [updateProperties()](uiviewcontroller/updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [viewWillLayoutSubviews()](uiviewcontroller/viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews()](uiviewcontroller/viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints()](uiviewcontroller/updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
- [updateContentUnavailableConfiguration(using:)](uiviewcontroller/updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.

### Observing data in presentation controllers

- [containerViewWillLayoutSubviews()](uipresentationcontroller/containerviewwilllayoutsubviews%28%29.md): Notifies the presentation controller that layout is about to begin on the views of the container view.
- [containerViewDidLayoutSubviews()](uipresentationcontroller/containerviewdidlayoutsubviews%28%29.md): Notifies the presentation controller when layout ends on the views of the container view.

### Observing data in buttons

- [updateConfiguration()](uibutton/updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](uibutton/configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.

### Observing data in collection view cells

- [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uicollectionviewcell/configurationupdatehandler-7rqbu.md): A block for handling updates to the cell’s configuration using the current state.

### Observing data in table view cells

- [updateConfiguration(using:)](uitableviewcell/updateconfiguration%28using_%29.md): Updates the cell’s configuration using the current state.
- [configurationUpdateHandler](uitableviewcell/configurationupdatehandler-974.md): A block for handling updates to the cell’s configuration using the current state.

### Observing data in table header and footer views

- [updateConfiguration(using:)](uitableviewheaderfooterview/updateconfiguration%28using_%29.md): Updates the view’s configuration using the current state.
- [configurationUpdateHandler](uitableviewheaderfooterview/configurationupdatehandler-49slo.md): A block for handling updates to the view’s configuration using the current state.

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [init(sectionProvider:)](uicollectionviewcompositionallayout/init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
- [init(sectionProvider:configuration:)](uicollectionviewcompositionallayout/init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.

## See Also

### Data observation

- [Updating views automatically with observation tracking in UIKit](updating-views-automatically-with-observation-tracking-in-uikit.md): Use Swift Observation and automatic tracking to update your views in response to model data updates.

# Automatic observation tracking (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Simplify updating views when data changes by making updates in methods that support automatic observation tracking.

<a id="Overview"></a>

## Overview

Use automatic observation tracking to update your views in response to model object changes without manually invalidating views. Mark your model classes with the [Observable](https://developer.apple.com/documentation/observation/observable) macro, then read model properties in methods like [updateProperties](uiview/updateproperties%28%29.md) or [layoutSubviews](uiview/layoutsubviews%28%29.md). UIKit tracks which properties you access and automatically calls these methods again when those properties change. This approach eliminates the need to manually call methods like [setNeedsLayout](uiview/setneedslayout%28%29.md) or [setNeedsDisplay](uiview/setneedsdisplay%28%29.md) after updating model data, reducing opportunities for bugs and outdated displays.

These methods support automatic observation tracking in views, view controllers, presentation controllers, buttons, collection view cells, table view cells, and table view headers and footers. For more information, see [Updating views automatically with observation tracking in UIKit](updating-views-automatically-with-observation-tracking-in-uikit.md).

## Topics

### Observing data in views

- [updateProperties](uiview/updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [layoutSubviews](uiview/layoutsubviews%28%29.md): Lays out subviews.
- [updateConstraints](uiview/updateconstraints%28%29.md): Updates constraints for the view.
- [drawRect:](uiview/draw%28__%29.md): Draws the view’s image within the passed-in rectangle.

### Observing data in view controllers

- [updateProperties](uiviewcontroller/updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [viewWillLayoutSubviews](uiviewcontroller/viewwilllayoutsubviews%28%29.md): Notifies the view controller that its view is about to lay out its subviews.
- [viewDidLayoutSubviews](uiviewcontroller/viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints](uiviewcontroller/updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.

### Observing data in presentation controllers

- [containerViewWillLayoutSubviews](uipresentationcontroller/containerviewwilllayoutsubviews%28%29.md): Notifies the presentation controller that layout is about to begin on the views of the container view.
- [containerViewDidLayoutSubviews](uipresentationcontroller/containerviewdidlayoutsubviews%28%29.md): Notifies the presentation controller when layout ends on the views of the container view.

### Observing data in buttons

- [updateConfiguration](uibutton/updateconfiguration%28%29.md): Updates the button configuration in response to a button state change.
- [configurationUpdateHandler](uibutton/configurationupdatehandler-swift.property.md): A closure that executes when the button state changes.

### Observing data in collection view cells

- [configurationUpdateHandler](uicollectionviewcell/configurationupdatehandler-ajhn.md): A block for handling updates to the cell’s configuration using the current state.

### Observing data in table view cells

- [configurationUpdateHandler](uitableviewcell/configurationupdatehandler-746ya.md): A block for handling updates to the cell’s configuration using the current state.

### Observing data in table header and footer views

- [configurationUpdateHandler](uitableviewheaderfooterview/configurationupdatehandler-3oji2.md): A block for handling updates to the view’s configuration using the current state.

### Observing data in collection view layouts

- [UICollectionViewCompositionalLayoutSectionProvider](uicollectionviewcompositionallayoutsectionprovider.md): A closure that creates and returns each of the layout’s sections.
- [initWithSectionProvider:](uicollectionviewcompositionallayout/init%28sectionprovider_%29.md): Creates a compositional layout object with a section provider to supply the layout’s sections.
- [initWithSectionProvider:configuration:](uicollectionviewcompositionallayout/init%28sectionprovider_configuration_%29.md): Creates a compositional layout object with a section provider and an additional configuration.

## See Also

### Data observation

- [Updating views automatically with observation tracking in UIKit](updating-views-automatically-with-observation-tracking-in-uikit.md): Use Swift Observation and automatic tracking to update your views in response to model data updates.
