> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafarisettings](https://developer.apple.com/documentation/safariservices/sfsafarisettings)

# SFSafariSettings (Swift)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 26.0+

A class that provides your app access to several of Safari’s settings options.

## Declaration

```swift
class SFSafariSettings
```

## Mentioned In

- [Importing data exported from Safari](importing-data-exported-from-safari.md)

<a id="overview"></a>

## Overview

This class allows your app to present Safari’s extension settings pane or the Export Browsing Data sheet, which enables a person to export their Safari browsing data to a file.

## Topics

### Accessing Safari extensions

- [openExtensionsSettings(forIdentifiers:completionHandler:)](sfsafarisettings/openextensionssettings%28foridentifiers_completionhandler_%29.md): Presents the extensions pane from Safari Settings.

### Exporting browsing data to a file

- [openExportBrowsingDataSettings(completionHandler:)](sfsafarisettings/openexportbrowsingdatasettings%28completionhandler_%29.md): Presents the Export Browsing Data sheet from Safari Settings.

### Type Methods

- [checkAutoFillUserNamesAndPasswordsEnabled(completionHandler:)](sfsafarisettings/checkautofillusernamesandpasswordsenabled%28completionhandler_%29.md): Query the value of the Safari settings toggle for AutoFill \> User names and passwords

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Safari content in your app

- [Importing data exported from Safari](importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFAuthenticationSession.CompletionHandler](sfauthenticationsession/completionhandler.md): The completion handler for an authentication session when the user cancels or finishes the login.

# SFSafariSettings (Objective-C)

**Framework:** Safari Services  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 26.0+

A class that provides your app access to several of Safari’s settings options.

## Declaration

```objectivec
@interface SFSafariSettings : NSObject
```

## Mentioned In

- [Importing data exported from Safari](importing-data-exported-from-safari.md)

<a id="overview"></a>

## Overview

This class allows your app to present Safari’s extension settings pane or the Export Browsing Data sheet, which enables a person to export their Safari browsing data to a file.

## Topics

### Accessing Safari extensions

- [openExtensionsSettingsForIdentifiers:completionHandler:](sfsafarisettings/openextensionssettings%28foridentifiers_completionhandler_%29.md): Presents the extensions pane from Safari Settings.

### Exporting browsing data to a file

- [openExportBrowsingDataSettingsWithCompletionHandler:](sfsafarisettings/openexportbrowsingdatasettings%28completionhandler_%29.md): Presents the Export Browsing Data sheet from Safari Settings.

### Type Methods

- [checkAutoFillUserNamesAndPasswordsEnabledWithCompletionHandler:](sfsafarisettings/checkautofillusernamesandpasswordsenabled%28completionhandler_%29.md): Query the value of the Safari settings toggle for AutoFill \> User names and passwords

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Safari content in your app

- [Importing data exported from Safari](importing-data-exported-from-safari.md): Transfer bookmarks, saved passwords, and other information between browsers.
- [SFSafariViewController](sfsafariviewcontroller.md): An object that provides a visible standard interface for browsing the web.
- [SFAuthenticationCompletionHandler](sfauthenticationsession/completionhandler.md): The completion handler for an authentication session when the user cancels or finishes the login.
