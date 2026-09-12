> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-deprecated](https://developer.apple.com/documentation/swiftui/view-deprecated)

# Deprecated modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Review unsupported modifiers and their replacements.

<a id="Overview"></a>

## Overview

Avoid using deprecated modifiers in your app. Select a modifier to see the replacement that you should use instead.

## Topics

### Accessibility modifiers

- [accessibility(label:)](view/accessibility%28label_%29.md): Deprecated. Adds a label to the view that describes its contents.
- [accessibility(value:)](view/accessibility%28value_%29.md): Deprecated. Adds a textual description of the value that the view contains.
- [accessibility(hidden:)](view/accessibility%28hidden_%29.md): Deprecated. Specifies whether to hide this view from system accessibility features.
- [accessibility(identifier:)](view/accessibility%28identifier_%29.md): Deprecated. Uses the specified string to identify the view.
- [accessibility(selectionIdentifier:)](view/accessibility%28selectionidentifier_%29.md): Deprecated. Sets a selection identifier for this view’s accessibility element.
- [accessibility(hint:)](view/accessibility%28hint_%29.md): Deprecated. Communicates to the user what happens after performing the view’s action.
- [accessibility(activationPoint:)](view/accessibility%28activationpoint_%29.md): Deprecated. Specifies the point where activations occur in the view.
- [accessibility(inputLabels:)](view/accessibility%28inputlabels_%29.md): Deprecated. Sets alternate input labels with which users identify a view.
- [accessibility(addTraits:)](view/accessibility%28addtraits_%29.md): Deprecated. Adds the given traits to the view.
- [accessibility(removeTraits:)](view/accessibility%28removetraits_%29.md): Deprecated. Removes the given traits from this view.
- [accessibility(sortPriority:)](view/accessibility%28sortpriority_%29.md): Deprecated. Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

### Appearance modifiers

- [colorScheme(\_:)](view/colorscheme%28__%29.md): Deprecated. Sets this view’s color scheme.
- [listRowPlatterColor(\_:)](view/listrowplattercolor%28__%29.md): Deprecated. Sets the color that the system applies to the row background when this view is placed in a list.
- [background(\_:alignment:)](view/background%28__alignment_%29.md): Deprecated. Layers the given view behind this view.
- [overlay(\_:alignment:)](view/overlay%28__alignment_%29.md): Deprecated. Layers a secondary view in front of this view.
- [foregroundColor(\_:)](view/foregroundcolor%28__%29.md): Deprecated. Sets the color of the foreground elements displayed by this view.
- [complicationForeground()](view/complicationforeground%28%29.md): Deprecated. Promotes this view to the foreground in a complication.

### Text modifiers

- [autocapitalization(\_:)](view/autocapitalization%28__%29.md): Deprecated. Sets whether to apply auto-capitalization to this view.
- [disableAutocorrection(\_:)](view/disableautocorrection%28__%29.md): Deprecated. Sets whether to disable autocorrection for this view.

### Auxiliary view modifiers

- [navigationBarTitle(\_:)](view/navigationbartitle%28__%29.md): Deprecated. Sets the title in the navigation bar for this view.
- [navigationBarTitle(\_:displayMode:)](view/navigationbartitle%28__displaymode_%29.md): Deprecated. Sets the title and display mode in the navigation bar for this view.
- [navigationBarItems(leading:)](view/navigationbaritems%28leading_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(leading:trailing:)](view/navigationbaritems%28leading_trailing_%29.md): Deprecated. Sets the navigation bar items for this view.
- [navigationBarItems(trailing:)](view/navigationbaritems%28trailing_%29.md): Deprecated. Configures the navigation bar items for this view.
- [navigationBarHidden(\_:)](view/navigationbarhidden%28__%29.md): Deprecated. Hides the navigation bar for this view.
- [statusBar(hidden:)](view/statusbar%28hidden_%29.md): Deprecated. Sets the visibility of the status bar.
- [contextMenu(\_:)](view/contextmenu%28__%29.md): Deprecated. Adds a context menu to the view.

### Style modifiers

- [menuButtonStyle(\_:)](view/menubuttonstyle%28__%29.md): Deprecated. Sets the style for menu buttons within this view.
- [navigationViewStyle(\_:)](view/navigationviewstyle%28__%29.md): Deprecated. Sets the style for navigation views within this view.

### Layout modifiers

- [frame()](view/frame%28%29.md): Deprecated. Positions this view within an invisible frame.
- [edgesIgnoringSafeArea(\_:)](view/edgesignoringsafearea%28__%29.md): Deprecated. Changes the view’s proposed area to extend outside the screen’s safe areas.
- [coordinateSpace(name:)](view/coordinatespace%28name_%29.md): Deprecated. Assigns a name to the view’s coordinate space, so other code can operate on dimensions like points and sizes relative to the named space.

### Graphics and rendering modifiers

- [accentColor(\_:)](view/accentcolor%28__%29.md): Deprecated. Sets the accent color for this view and the views it contains.
- [mask(\_:)](view/mask%28__%29.md): Deprecated. Masks this view using the alpha channel of the given view.
- [animation(\_:)](view/animation%28__%29-1hc0p.md): Deprecated. Applies the given animation to all animatable values within this view.
- [cornerRadius(\_:antialiased:)](view/cornerradius%28__antialiased_%29.md): Deprecated. Clips this view to its bounding frame, with the specified corner radius.

### Input and events modifiers

- [dropDestination(for:action:isTargeted:)](view/dropdestination%28for_action_istargeted_%29.md): Deprecated. Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.
- [onChange(of:perform:)](view/onchange%28of_perform_%29.md): Deprecated. Adds an action to perform when the given value changes.
- [onTapGesture(count:coordinateSpace:perform:)](view/ontapgesture%28count_coordinatespace_perform_%29-36x9h.md): Deprecated. Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onLongPressGesture(minimumDuration:maximumDistance:pressing:perform:)](view/onlongpressgesture%28minimumduration_maximumdistance_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:pressing:perform:)](view/onlongpressgesture%28minimumduration_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onPasteCommand(of:perform:)](view/onpastecommand%28of_perform_%29-4f78f.md): Deprecated. Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](view/onpastecommand%28of_validator_perform_%29-964k1.md): Deprecated. Adds an action to perform in response to the system’s Paste command with items that you validate.
- [onDrop(of:delegate:)](view/ondrop%28of_delegate_%29-2vr9o.md): Deprecated. Defines the destination for a drag and drop operation with the same size and position as this view, with behavior controlled by the given delegate.
- [onDrop(of:isTargeted:perform:)](view/ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [focusable(\_:onFocusChange:)](view/focusable%28__onfocuschange_%29.md): Deprecated. Specifies if the view is focusable and, if so, adds an action to perform when the view comes into focus.
- [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29-8gyrl.md): Deprecated. Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.

### View presentation modifiers

- [actionSheet(isPresented:content:)](view/actionsheet%28ispresented_content_%29.md): Deprecated. Presents an action sheet when a given condition is true.
- [actionSheet(item:content:)](view/actionsheet%28item_content_%29.md): Deprecated. Presents an action sheet using the given item as a data source for the sheet’s content.
- [alert(isPresented:content:)](view/alert%28ispresented_content_%29.md): Deprecated. Presents an alert to the user.
- [alert(item:content:)](view/alert%28item_content_%29.md): Deprecated. Presents an alert to the user.

### Search modifiers

- [searchable(text:placement:prompt:suggestions:)](view/searchable%28text_placement_prompt_suggestions_%29.md): Deprecated. Marks this view as searchable, which configures the display of a search field.

### Tab modifiers

- [tabItem(\_:)](view/tabitem%28__%29.md): Deprecated. Sets the tab bar item associated with this view.

### Generating image modifiers

- [imagePlaygroundPersonalizationPolicy(\_:)](view/imageplaygroundpersonalizationpolicy%28__%29.md): Deprecated. Policy determining whether to support the usage of people in the playground or not.

### Technology-specific modifiers

- [postToPhotosSharedAlbumSheet(isPresented:items:photoLibrary:defaultAlbumIdentifier:completion:)](view/posttophotossharedalbumsheet%28ispresented_items_photolibrary_defaultalbumidentifier_completion_%29.md): Deprecated. Presents an “Add to Shared Album” sheet that allows the user to post the given items to a shared album.
- [offerCodeRedemption(isPresented:onCompletion:)](view/offercoderedemption%28ispresented_oncompletion_%29.md): Deprecated.
- [subscriptionPromotionalOffer(offer:signature:)](view/subscriptionpromotionaloffer%28offer_signature_%29.md): Deprecated. Selects a promotional offer to apply to a purchase a customer makes from a subscription store view.
