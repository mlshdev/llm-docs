> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:open:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:open:))

# application(\_:open:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Tells the delegate to open the resource at the specified URL.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, open urls: [URL])
```

## Parameters

- `application`: Your singleton app object.
- `urls`: An array of URLs to open. The list does not include URLs for which your app has a defined document type.

<a id="Discussion"></a>

## Discussion

AppKit calls this method when your app is asked to open one or more URL-based resources. You must declare the URL types that your app supports in your `Info.plist` file using the `CFBundleURLTypes` key. The list can also include URLs for documents for which your app does not have an associated [NSDocument](../nsdocument.md) class. You configure document types using Xcode, or by adding the `CFBundleDocumentTypes` key to your `Info.plist` file.

If your delegate implements this method, AppKit does not call the [application(\_:openFile:)](application%28__openfile_%29.md) or [application(\_:openFiles:)](application%28__openfiles_%29.md) methods.

## See Also

### Opening Files

- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openFileWithoutUI:)](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application(\_:openTempFile:)](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application(\_:openFiles:)](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile(\_:)](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

# application:openURLs: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Tells the delegate to open the resource at the specified URL.

## Declaration

```objectivec
- (void) application:(NSApplication *) application openURLs:(NSArray<NSURL *> *) urls;
```

## Parameters

- `application`: Your singleton app object.
- `urls`: An array of URLs to open. The list does not include URLs for which your app has a defined document type.

<a id="Discussion"></a>

## Discussion

AppKit calls this method when your app is asked to open one or more URL-based resources. You must declare the URL types that your app supports in your `Info.plist` file using the `CFBundleURLTypes` key. The list can also include URLs for documents for which your app does not have an associated [NSDocument](../nsdocument.md) class. You configure document types using Xcode, or by adding the `CFBundleDocumentTypes` key to your `Info.plist` file.

If your delegate implements this method, AppKit does not call the [application:openFile:](application%28__openfile_%29.md) or [application:openFiles:](application%28__openfiles_%29.md) methods.

## See Also

### Opening Files

- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openFileWithoutUI:](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application:openTempFile:](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application:openFiles:](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile:](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.
