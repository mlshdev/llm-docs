> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfsafarisettings/openextensionssettings(foridentifiers:completionhandler:)](https://developer.apple.com/documentation/safariservices/sfsafarisettings/openextensionssettings(foridentifiers:completionhandler:))

# openExtensionsSettings(forIdentifiers:completionHandler:) (Swift)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · visionOS 26.2+

Presents the extensions pane from Safari Settings.

## Declaration

```swift
class func openExtensionsSettings(forIdentifiers extensionIdentifiers: [String], completionHandler: (@MainActor @Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func openExtensionsSettings(forIdentifiers extensionIdentifiers: [String]) async throws
```

## Parameters

- `extensionIdentifiers`: An array of extension identifiers. If the value is a single identifier, Settings opens to that extension’s detail view. If you specify multiple identifiers, Settings opens to the Safari Extensions pane with the specified extensions selected.
- `completionHandler`: A block the system calls after the operation completes, with an optional error parameter.

  - **error**: `nil` if Safari Extensions Settings opens successfully; otherwise, an error that indicates the reason for the failure.

<a id="discussion"></a>

## Discussion

The method returns an error unless you call it while your app is in the foreground.

# openExtensionsSettingsForIdentifiers:completionHandler: (Objective-C)

**Framework:** Safari Services  
**Kind:** Type Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · visionOS 26.2+

Presents the extensions pane from Safari Settings.

## Declaration

```objectivec
+ (void) openExtensionsSettingsForIdentifiers:(NSArray<NSString *> *) extensionIdentifiers completionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `extensionIdentifiers`: An array of extension identifiers. If the value is a single identifier, Settings opens to that extension’s detail view. If you specify multiple identifiers, Settings opens to the Safari Extensions pane with the specified extensions selected.
- `completionHandler`: A block the system calls after the operation completes, with an optional error parameter.

  - **error**: `nil` if Safari Extensions Settings opens successfully; otherwise, an error that indicates the reason for the failure.

<a id="discussion"></a>

## Discussion

The method returns an error unless you call it while your app is in the foreground.
