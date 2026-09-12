> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcuticon/init(systemimagename:)](https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon/init(systemimagename:))

# init(systemImageName:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon using a system symbol image.

## Declaration

```swift
convenience init(systemImageName: String)
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images. You can download this app from the design resources page at [developer.apple.com](https://developer.apple.com/design/resources/).

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified system symbol image.

## See Also

### Creating a quick action icon

- [init(type:)](init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [init(templateImageName:)](init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [init(contact:)](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.

# iconWithSystemImageName: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a Home Screen quick action icon using a system symbol image.

## Declaration

```objectivec
+ (instancetype) iconWithSystemImageName:(NSString *) systemImageName;
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images. You can download this app from the design resources page at [developer.apple.com](https://developer.apple.com/design/resources/).

<a id="return-value"></a>

## Return Value

A Home Screen quick action icon initialized with the specified system symbol image.

## See Also

### Creating a quick action icon

- [iconWithType:](init%28type_%29.md): Creates a Home Screen quick action icon using a system-defined image.
- [iconWithTemplateImageName:](init%28templateimagename_%29.md): Creates a Home Screen quick action icon based on an image in your app’s bundle, preferably in an asset catalog.
- [iconWithContact:](init%28contact_%29.md): Creates a Home Screen quick action icon from the picture for a contact or a monogram of the contact name if the picture is unavailable.
