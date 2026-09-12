> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environment-values](https://developer.apple.com/documentation/swiftui/environment-values)

# Environment values

**Framework:** SwiftUI  
**Kind:** API Collection

Share data throughout a view hierarchy using the environment.

<a id="Overview"></a>

## Overview

Views in SwiftUI can react to configuration information that they read from the environment using an [Environment](environment.md) property wrapper.

![](https://developer.apple.com/images/com.apple.SwiftUI/environment-values-hero@2x.png)

A view inherits its environment from its container view, subject to explicit changes from an [environment(\_:\_:)](view/environment%28____%29.md) view modifier, or by implicit changes from one of the many modifiers that operate on environment values. As a result, you can configure a entire hierarchy of views by modifying the environment of the group’s container.

You can find many built-in environment values in the [EnvironmentValues](environmentvalues.md) structure. You can also create a custom [EnvironmentValues](environmentvalues.md) property by defining a new property in an extension to the environment values structure and applying the [Entry()](entry%28%29.md) macro to the variable declaration.

## Topics

### Accessing environment values

- [Environment](environment.md): A property wrapper that reads a value from a view’s environment.
- [EnvironmentValues](environmentvalues.md): A collection of environment values propagated through a view hierarchy.

### Creating custom environment values

- [Entry()](entry%28%29.md): Creates an environment values, transaction, container values, or focused values entry.
- [EnvironmentKey](environmentkey.md): A key for accessing values in the environment.

### Modifying the environment of a view

- [environment(\_:)](view/environment%28__%29.md): Places an observable object in the view’s environment.
- [environment(\_:\_:)](view/environment%28____%29.md): Sets the environment value of the specified key path to the given value.
- [transformEnvironment(\_:transform:)](view/transformenvironment%28__transform_%29.md): Transforms the environment value of the specified key path with the given function.

### Modifying the environment of a scene

- [environment(\_:)](scene/environment%28__%29.md): Places an observable object in the scene’s environment.
- [environment(\_:\_:)](scene/environment%28____%29.md): Sets the environment value of the specified key path to the given value.
- [transformEnvironment(\_:transform:)](scene/transformenvironment%28__transform_%29.md): Transforms the environment value of the specified key path with the given function.

## See Also

### Data and storage

- [Model data](model-data.md): Manage the data that your app uses to drive its interface.
- [Preferences](preferences.md): Indicate configuration preferences from views to their container views.
- [Persistent storage](persistent-storage.md): Store data for use across sessions of your app.
