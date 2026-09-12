> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/eventkituibundle()](https://developer.apple.com/documentation/eventkitui/eventkituibundle())

# EventKitUIBundle() (Swift)

**Framework:** EventKit UI  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Use to access resources within the app bundle.

## Declaration

```swift
func EventKitUIBundle() -> Bundle!
```

<a id="Discussion"></a>

## Discussion

A *bundle* is a directory with a standardized hierarchical structure that holds executable code and the resources used by that code. Bundles organize their contained resources into well-defined subdirectories.

By using a bundle object, you can access a bundle’s resources without knowing the structure of the bundle. The bundle object provides a single interface for locating items, taking into account the bundle structure, user preferences, available localizations, and other relevant factors.

# EventKitUIBundle (Objective-C)

**Framework:** EventKit UI  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Use to access resources within the app bundle.

## Declaration

```objectivec
extern NSBundle *EventKitUIBundle();
```

<a id="Discussion"></a>

## Discussion

A *bundle* is a directory with a standardized hierarchical structure that holds executable code and the resources used by that code. Bundles organize their contained resources into well-defined subdirectories.

By using a bundle object, you can access a bundle’s resources without knowing the structure of the bundle. The bundle object provides a single interface for locating items, taking into account the bundle structure, user preferences, available localizations, and other relevant factors.
