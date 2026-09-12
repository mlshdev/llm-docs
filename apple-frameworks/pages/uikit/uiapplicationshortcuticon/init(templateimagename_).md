> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcuticon/init(templateimagename:)](https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon/init(templateimagename:))

# init(templateImageName:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.

## Declaration

```swift
convenience init(templateImageName: String)
```

## Parameters

- `templateImageName`: The name of a custom image in the app’s asset catalog. If the image isn’t in your app’s asset catalog, this method searches the app bundle for the image.

  You don’t need to specify the filename extension or the `@2x` or `@3x` modifiers for this name. This method retrieves the appropriate image based on the system and the available image resources.

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified template image provided by your app.

<a id="Discussion"></a>

## Discussion

Use this method to create icons based on custom artwork that you provide. If the image name you specify doesn’t correspond to a valid image resource in your app bundle, the system won’t display an icon.

For more information about designing custom images, see [Providing images for different appearances](../providing-images-for-different-appearances.md).

## See Also

### Creating a quick action icon

- [init(type:)](init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [init(systemImageName:)](init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [init(contact:)](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.

# iconWithTemplateImageName: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.

## Declaration

```objectivec
+ (instancetype) iconWithTemplateImageName:(NSString *) templateImageName;
```

## Parameters

- `templateImageName`: The name of a custom image in the app’s asset catalog. If the image isn’t in your app’s asset catalog, this method searches the app bundle for the image.

  You don’t need to specify the filename extension or the `@2x` or `@3x` modifiers for this name. This method retrieves the appropriate image based on the system and the available image resources.

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified template image provided by your app.

<a id="Discussion"></a>

## Discussion

Use this method to create icons based on custom artwork that you provide. If the image name you specify doesn’t correspond to a valid image resource in your app bundle, the system won’t display an icon.

For more information about designing custom images, see [Providing images for different appearances](../providing-images-for-different-appearances.md).

## See Also

### Creating a quick action icon

- [iconWithType:](init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [iconWithSystemImageName:](init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [iconWithContact:](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.
