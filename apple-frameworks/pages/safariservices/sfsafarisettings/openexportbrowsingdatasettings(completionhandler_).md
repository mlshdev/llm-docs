> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafarisettings/openexportbrowsingdatasettings(completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafarisettings/openexportbrowsingdatasettings(completionhandler:))

# openExportBrowsingDataSettings(completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Presents the Export Browsing Data sheet from Safari Settings.

## Declaration

```swift
class func openExportBrowsingDataSettings(completionHandler: (@MainActor @Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func openExportBrowsingDataSettings() async throws
```

## Parameters

- `completionHandler`: A block the system calls after the operation completes, with an optional error parameter.

  - **error**: `nil` if the export sheet opens successfully; otherwise, an error that indicates the reason for the failure.

## Mentioned In

- [Importing data exported from Safari](../importing-data-exported-from-safari.md)

<a id="discussion"></a>

## Discussion

This method presents the same data export sheet accessible in Safari’s settings, which enables someone to export their browsing data to a file. The data includes page visit history, reading list information, bookmarks, passwords, payment cards, and browser extensions.

The method returns an error unless you call it while your app is in the foreground.

For information on the file format and steps to import the data, see [Importing data exported from Safari](../importing-data-exported-from-safari.md).

# openExportBrowsingDataSettingsWithCompletionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Presents the Export Browsing Data sheet from Safari Settings.

## Declaration

```objectivec
+ (void) openExportBrowsingDataSettingsWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A block the system calls after the operation completes, with an optional error parameter.

  - **error**: `nil` if the export sheet opens successfully; otherwise, an error that indicates the reason for the failure.

## Mentioned In

- [Importing data exported from Safari](../importing-data-exported-from-safari.md)

<a id="discussion"></a>

## Discussion

This method presents the same data export sheet accessible in Safari’s settings, which enables someone to export their browsing data to a file. The data includes page visit history, reading list information, bookmarks, passwords, payment cards, and browser extensions.

The method returns an error unless you call it while your app is in the foreground.

For information on the file format and steps to import the data, see [Importing data exported from Safari](../importing-data-exported-from-safari.md).
