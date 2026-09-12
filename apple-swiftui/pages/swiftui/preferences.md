> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/preferences](https://developer.apple.com/documentation/swiftui/preferences)

# Preferences

**Framework:** SwiftUI  
**Kind:** API Collection

Indicate configuration preferences from views to their container views.

<a id="Overview"></a>

## Overview

Whereas you use the environment to configure the subviews of a view, you use preferences to send configuration information from subviews toward their container. However, unlike configuration information that flows down a view hierarchy from one container to many subviews, a single container needs to reconcile potentially conflicting preferences flowing up from its many subviews.

![](https://developer.apple.com/images/com.apple.SwiftUI/preferences-hero@2x.png)

When you use the [PreferenceKey](preferencekey.md) protocol to define a custom preference, you indicate how to merge preferences from multiple subviews. You can then set a value for the preference on a view using the [preference(key:value:)](view/preference%28key_value_%29.md) view modifier. Many built-in modifiers, like [navigationTitle(\_:)](view/navigationtitle%28__%29.md), rely on preferences to send configuration information to their container.

## Topics

### Setting preferences

- [preference(key:value:)](view/preference%28key_value_%29.md): Sets a value for the given preference.
- [transformPreference(\_:\_:)](view/transformpreference%28____%29.md): Applies a transformation to a preference value.

### Creating custom preferences

- [PreferenceKey](preferencekey.md): A named value produced by a view.

### Setting preferences based on geometry

- [anchorPreference(key:value:transform:)](view/anchorpreference%28key_value_transform_%29.md): Sets a value for the specified preference key, the value is a function of a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.
- [transformAnchorPreference(key:value:transform:)](view/transformanchorpreference%28key_value_transform_%29.md): Sets a value for the specified preference key, the value is a function of the key’s current value and a geometry value tied to the current coordinate space, allowing readers of the value to convert the geometry to their local coordinates.

### Responding to changes in preferences

- [onPreferenceChange(\_:perform:)](view/onpreferencechange%28__perform_%29.md): Adds an action to perform when the specified preference key’s value changes.

### Generating backgrounds and overlays from preferences

- [backgroundPreferenceValue(\_:\_:)](view/backgroundpreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [backgroundPreferenceValue(\_:alignment:\_:)](view/backgroundpreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as the background of the original view.
- [overlayPreferenceValue(\_:\_:)](view/overlaypreferencevalue%28____%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.
- [overlayPreferenceValue(\_:alignment:\_:)](view/overlaypreferencevalue%28__alignment___%29.md): Reads the specified preference value from the view, using it to produce a second view that is applied as an overlay to the original view.

## See Also

### Data and storage

- [Model data](model-data.md): Manage the data that your app uses to drive its interface.
- [Environment values](environment-values.md): Share data throughout a view hierarchy using the environment.
- [Persistent storage](persistent-storage.md): Store data for use across sessions of your app.
