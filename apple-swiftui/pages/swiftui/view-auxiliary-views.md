> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view-auxiliary-views](https://developer.apple.com/documentation/swiftui/view-auxiliary-views)

# Auxiliary view modifiers

**Framework:** SwiftUI  
**Kind:** API Collection

Add and configure supporting views, like toolbars and context menus.

<a id="Overview"></a>

## Overview

Use these modifiers to manage supplemental views that present context-specific controls and information. For example, you can add titles and buttons to navigation bars, manage the status bar, create context menus, and add badges to many different kinds of views.

## Topics

### Navigation titles

- [Configure your apps navigation titles](configure-your-apps-navigation-titles.md): Use a navigation title to display the current navigation state of an interface.
- [navigationTitle(\_:)](view/navigationtitle%28__%29.md): Configures the view’s title for purposes of navigation, using a localized string resource.
- [navigationSubtitle(\_:)](view/navigationsubtitle%28__%29.md): Configures the view’s subtitle for purposes of navigation, using a localized string resource.

### Navigation title configuration

- [navigationDocument(\_:)](view/navigationdocument%28__%29.md): Configures the view’s document for purposes of navigation.
- [navigationDocument(\_:preview:)](view/navigationdocument%28__preview_%29.md): Configures the view’s document for purposes of navigation.

### Navigation bars

- [navigationBarBackButtonHidden(\_:)](view/navigationbarbackbuttonhidden%28__%29.md): Hides the navigation bar back button for the view.
- [navigationBarTitleDisplayMode(\_:)](view/navigationbartitledisplaymode%28__%29.md): Configures the title display mode for this view.

### Navigation stacks and columns

- [navigationDestination(for:destination:)](view/navigationdestination%28for_destination_%29.md): Associates a destination view with a presented data type for use within a navigation stack.
- [navigationDestination(isPresented:destination:)](view/navigationdestination%28ispresented_destination_%29.md): Associates a destination view with a binding that can be used to push the view onto a [NavigationStack](navigationstack.md).
- [navigationDestination(item:destination:)](view/navigationdestination%28item_destination_%29.md): Associates a destination view with a bound value for use within a navigation stack or navigation split view
- [navigationSplitViewColumnWidth(\_:)](view/navigationsplitviewcolumnwidth%28__%29.md): Sets a fixed, preferred width for the column containing this view.
- [navigationSplitViewColumnWidth(min:ideal:max:)](view/navigationsplitviewcolumnwidth%28min_ideal_max_%29.md): Sets a flexible, preferred width for the column containing this view.
- [navigationLinkIndicatorVisibility(\_:)](view/navigationlinkindicatorvisibility%28__%29.md): Configures whether navigation links show a disclosure indicator.
- [navigationTransition(\_:)](view/navigationtransition%28__%29.md): Sets the navigation transition style for this view.

### Scroll view edges

- [scrollEdgeEffectStyle(\_:for:)](view/scrolledgeeffectstyle%28__for_%29.md): Configures the scroll edge effect style for scroll views within this hierarchy.
- [scrollEdgeEffectHidden(\_:for:)](view/scrolledgeeffecthidden%28__for_%29.md): Hides any scroll edge effects for scroll views within this hierarchy.

### Tab views

- [defaultAdaptableTabBarPlacement(\_:)](view/defaultadaptabletabbarplacement%28__%29.md): Specifies the default placement for the tabs in a tab view using the adaptable sidebar style.
- [defaultTabBarPlacement(\_:)](view/defaulttabbarplacement%28__%29.md): Specifies the preferred placement for the tabs of a [TabView](tabview.md) in the [sidebarAdaptable](tabviewstyle/sidebaradaptable.md) style on platforms where the tab bar cannot adapt between different representations, and only one representation can be shown.
- [sectionActions(content:)](view/sectionactions%28content_%29.md): Adds custom actions to a section.
- [tabBarMinimizeBehavior(\_:)](view/tabbarminimizebehavior%28__%29.md): Sets the behavior for tab bar minimization.
- [tabViewBottomAccessory(content:)](view/tabviewbottomaccessory%28content_%29.md): Places a view as the bottom accessory of the tab view.
- [tabViewBottomAccessory(isEnabled:content:)](view/tabviewbottomaccessory%28isenabled_content_%29.md): Places a view as the bottom accessory of the tab view. Use this modifier to dynamically show and hide the accessory view.
- [tabViewCustomization(\_:)](view/tabviewcustomization%28__%29.md): Specifies the customizations to apply to the sidebar representation of the tab view.
- [tabViewSearchActivation(\_:)](view/tabviewsearchactivation%28__%29.md): Configures the activation and deactivation behavior of search in the search tab.
- [tabViewSidebarHeader(content:)](view/tabviewsidebarheader%28content_%29.md): Adds a custom header to the sidebar of a tab view.
- [tabViewSidebarFooter(content:)](view/tabviewsidebarfooter%28content_%29.md): Adds a custom footer to the sidebar of a tab view.
- [tabViewSidebarBottomBar(content:)](view/tabviewsidebarbottombar%28content_%29.md): Adds a custom bottom bar to the sidebar of a tab view.

### Toolbars

For information about toolbars, see [Toolbars](toolbars.md).

- [toolbar(content:)](view/toolbar%28content_%29.md): Populates the toolbar or navigation bar with the specified items.
- [toolbar(id:content:)](view/toolbar%28id_content_%29.md): Populates the toolbar or navigation bar with the specified items, allowing for user customization.
- [toolbar(\_:for:)](view/toolbar%28__for_%29.md): Deprecated. Specifies the visibility of a bar managed by SwiftUI.
- [contentToolbar(for:content:)](view/contenttoolbar%28for_content_%29.md): Populates the toolbar of the specified content view type with the views you provide.
- [toolbar(removing:)](view/toolbar%28removing_%29.md): Remove a toolbar item present by default
- [toolbarVisibility(\_:for:)](view/toolbarvisibility%28__for_%29.md): Specifies the visibility of a bar managed by SwiftUI.
- [toolbarBackground(\_:for:)](view/toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarBackgroundVisibility(\_:for:)](view/toolbarbackgroundvisibility%28__for_%29.md): Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.
- [toolbarItemHidden(\_:)](view/toolbaritemhidden%28__%29.md): Hides an individual view within a control group toolbar item.
- [toolbarForegroundStyle(\_:for:)](view/toolbarforegroundstyle%28__for_%29.md): Specifies the preferred foreground style of bars managed by SwiftUI.
- [toolbarColorScheme(\_:for:)](view/toolbarcolorscheme%28__for_%29.md): Specifies the preferred color scheme of a bar managed by SwiftUI.
- [toolbarOverflowMenu(content:)](view/toolbaroverflowmenu%28content_%29.md): Configures the overflow menu of a toolbar.
- [toolbarRole(\_:)](view/toolbarrole%28__%29.md): Configures the semantic role for the content populating the toolbar.
- [toolbarMinimizationBehavior(\_:for:)](view/toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [toolbarMinimizationRestoration(\_:for:)](view/toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](view/toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
- [toolbarTitleMenu(content:)](view/toolbartitlemenu%28content_%29.md): Configure the title menu of a toolbar.
- [toolbarTitleDisplayMode(\_:)](view/toolbartitledisplaymode%28__%29.md): Configures the toolbar title display mode for this view.
- [ornament(visibility:attachmentAnchor:contentAlignment:ornament:)](view/ornament%28visibility_attachmentanchor_contentalignment_ornament_%29.md): Presents an ornament.

### Context menus

For information about menus in your app, see [Menus and commands](menus-and-commands.md).

- [contextMenu(menuItems:)](view/contextmenu%28menuitems_%29.md): Deprecated. Adds a context menu to a view.
- [contextMenu(menuItems:preview:)](view/contextmenu%28menuitems_preview_%29.md): Adds a context menu with a custom preview to a view.
- [contextMenu(forSelectionType:menu:primaryAction:)](view/contextmenu%28forselectiontype_menu_primaryaction_%29.md): Adds an item-based context menu to a view.

### Badges

- [badge(\_:)](view/badge%28__%29.md): Generates a badge for the view from a localized string resource.
- [badgeProminence(\_:)](view/badgeprominence%28__%29.md): Specifies the prominence of badges created by this view.

### Lists

- [sectionIndexLabel(\_:)](view/sectionindexlabel%28__%29.md): Sets the label that is used in a section index to point to this section, typically only a single character long.

### Help text

- [help(\_:)](view/help%28__%29.md): Adds help text to a view using a localized string resource that you provide.

### Status bar

- [statusBarHidden(\_:)](view/statusbarhidden%28__%29.md): Deprecated. Sets the visibility of the status bar.

### External displays

- [sceneAccessory(content:)](view/sceneaccessory%28content_%29.md): Defines any scene accessories associated with `self`.

### Touch Bar

- [touchBar(content:)](view/touchbar%28content_%29.md): Sets the content that the Touch Bar displays.
- [touchBar(\_:)](view/touchbar%28__%29.md): Sets the Touch Bar content to be shown in the Touch Bar when applicable.
- [touchBarItemPrincipal(\_:)](view/touchbaritemprincipal%28__%29.md): Sets principal views that have special significance to this Touch Bar.
- [touchBarCustomizationLabel(\_:)](view/touchbarcustomizationlabel%28__%29.md): Sets a user-visible string that identifies the view’s functionality.
- [touchBarItemPresence(\_:)](view/touchbaritempresence%28__%29.md): Sets the behavior of the user-customized view.

## See Also

### Configuring view elements

- [Accessibility modifiers](view-accessibility.md): Make your SwiftUI apps accessible to everyone, including people with disabilities.
- [Appearance modifiers](view-appearance.md): Configure a view’s foreground and background styles, controls, and visibility.
- [Text and symbol modifiers](view-text-and-symbols.md): Manage the rendering, selection, and entry of text in your view.
- [Chart view modifiers](view-chart-view.md): Configure charts that you declare with Swift Charts.
