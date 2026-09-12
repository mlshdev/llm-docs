> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unnotificationactionicon/init(systemimagename:)](https://developer.apple.com/documentation/usernotifications/unnotificationactionicon/init(systemimagename:))

# init(systemImageName:) (Swift)

**Framework:** User Notifications  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action icon by using a system symbol image.

## Declaration

```swift
convenience init(systemImageName: String)
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images. Download this app from the design resources page at [developer.apple.com](https://developer.apple.com/design/resources/).

<a id="return-value"></a>

## Return Value

An action icon that the system initializes with the system symbol image that your app specifies.

## See Also

### Essentials

- [init(templateImageName:)](init%28templateimagename_%29.md): Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.

# iconWithSystemImageName: (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an action icon by using a system symbol image.

## Declaration

```objectivec
+ (instancetype) iconWithSystemImageName:(NSString *) systemImageName;
```

## Parameters

- `systemImageName`: The name of the system symbol image. Use the SF Symbols app to look up the names of system symbol images. Download this app from the design resources page at [developer.apple.com](https://developer.apple.com/design/resources/).

<a id="return-value"></a>

## Return Value

An action icon that the system initializes with the system symbol image that your app specifies.

## See Also

### Essentials

- [iconWithTemplateImageName:](init%28templateimagename_%29.md): Creates an action icon based on an image in your app’s bundle, preferably in an asset catalog.
