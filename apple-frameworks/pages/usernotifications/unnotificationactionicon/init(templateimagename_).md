> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionicon/init(templateimagename:)](https://developer.apple.com/documentation/usernotifications/unnotificationactionicon/init(templateimagename:))

# init(templateImageName:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.

## Declaration

```swift
convenience init(templateImageName: String)
```

## Parameters

- `templateImageName`: The name of a custom image in the app’s asset catalog. If the image isn’t in your app’s asset catalog, this method searches the app bundle for the image.

  You don’t need to specify the filename extension or the `@2x` or `@3x` modifiers for this name. This method retrieves the appropriate image based on the system and the available image resources.

<a id="return-value"></a>

## Return Value

An action icon initialized with the specified template image provided by your app.

## See Also

### Essentials

- [init(systemImageName:)](init%28systemimagename_%29.md): Creates an action icon by using a system symbol image.

# iconWithTemplateImageName: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.

## Declaration

```objectivec
+ (instancetype) iconWithTemplateImageName:(NSString *) templateImageName;
```

## Parameters

- `templateImageName`: The name of a custom image in the app’s asset catalog. If the image isn’t in your app’s asset catalog, this method searches the app bundle for the image.

  You don’t need to specify the filename extension or the `@2x` or `@3x` modifiers for this name. This method retrieves the appropriate image based on the system and the available image resources.

<a id="return-value"></a>

## Return Value

An action icon initialized with the specified template image provided by your app.

## See Also

### Essentials

- [iconWithSystemImageName:](init%28systemimagename_%29.md): Creates an action icon by using a system symbol image.
