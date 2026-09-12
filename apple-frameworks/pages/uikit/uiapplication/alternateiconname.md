> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/alternateiconname](https://developer.apple.com/documentation/uikit/uiapplication/alternateiconname)

# alternateIconName (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

The name of the icon the system displays for the app.

## Declaration

```swift
var alternateIconName: String? { get }
```

<a id="Discussion"></a>

## Discussion

When the system is displaying one of your app’s alternate icons, the value of this property is the name of the alternate icon (from your app’s `Info.plist` file). When the system is displaying your app’s primary icon, the value of this property is `nil`.

## See Also

### Managing the app’s icon

- [supportsAlternateIcons](supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [setAlternateIconName(\_:completionHandler:)](setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.

# alternateIconName (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 10.2+ · visionOS 1.0+

The name of the icon the system displays for the app.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * alternateIconName;
```

<a id="Discussion"></a>

## Discussion

When the system is displaying one of your app’s alternate icons, the value of this property is the name of the alternate icon (from your app’s `Info.plist` file). When the system is displaying your app’s primary icon, the value of this property is `nil`.

## See Also

### Managing the app’s icon

- [supportsAlternateIcons](supportsalternateicons.md): A Boolean value that indicates whether the app is allowed to change its icon.
- [setAlternateIconName:completionHandler:](setalternateiconname%28__completionhandler_%29.md): Changes the icon the system displays for the app.
