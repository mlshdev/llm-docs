> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/wkextensiondelegateclassname](https://developer.apple.com/documentation/bundleresources/information-property-list/wkextensiondelegateclassname)

# WKExtensionDelegateClassName

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** watchOS 2.0+

The name of your watchOS app’s extension delegate.

## Details

`WKExtensionDelegateClassName`

<a id="Discussion"></a>

## Discussion

This key provides the name of a class that adopts the [WKExtensionDelegate](https://developer.apple.com/documentation/watchkit/wkextensiondelegate) protocol. Xcode automatically includes this key in the WatchKit extension’s information property list when you create a watchOS project from a template. You only modify this value when you rename or replace the extension delegate.

## See Also

### Extensions and services

- [NSExtension](nsextension.md): The properties of an app extension.
- [NSServices](nsservices.md): The services provided by an app.
- [UIApplicationShortcutWidget](uiapplicationshortcutwidget.md): The bundle ID of the widget that’s available as a Home screen quick action in apps that have more than one widget.
