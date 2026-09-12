> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcuticon/init(type:)](https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon/init(type:))

# init(type:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon using a system-defined image.

## Declaration

```swift
convenience init(type: UIApplicationShortcutIcon.IconType)
```

## Parameters

- `type`: The system-defined image to use for the icon. For a list of possible images, see the [UIApplicationShortcutIcon.IconType](icontype.md) enumeration.

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified system image.

<a id="Discussion"></a>

## Discussion

Use this method to create icons for actions supported by the system. Users expect system-defined action images to be used only for the intended action.

## See Also

### Creating a quick action icon

- [init(templateImageName:)](init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [init(systemImageName:)](init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [init(contact:)](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.

# iconWithType: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon using a system-defined image.

## Declaration

```objectivec
+ (instancetype) iconWithType:(UIApplicationShortcutIconType) type;
```

## Parameters

- `type`: The system-defined image to use for the icon. For a list of possible images, see the [UIApplicationShortcutIconType](icontype.md) enumeration.

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified system image.

<a id="Discussion"></a>

## Discussion

Use this method to create icons for actions supported by the system. Users expect system-defined action images to be used only for the intended action.

## See Also

### Creating a quick action icon

- [iconWithTemplateImageName:](init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [iconWithSystemImageName:](init%28systemimagename_%29.md): Creates a Home Screen quick action icon using a system symbol image.
- [iconWithContact:](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.
