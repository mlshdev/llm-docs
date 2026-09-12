> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:opentempfile:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:opentempfile:))

# application(\_:openTempFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app opens the specified temporary file.

## Declaration

```swift
@MainActor optional func application(_ sender: NSApplication, openTempFile filename: String) -> Bool
```

## Parameters

- `sender`: The application object associated with the delegate.
- `filename`: The name of the temporary file to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Sent directly by `theApplication` to the delegate. The method should attempt to open the file `filename`, returning [true](https://developer.apple.com/documentation/swift/true) if the file is successfully opened, and [false](https://developer.apple.com/documentation/swift/false) otherwise.

By design, a file opened through this method is assumed to be temporary—it’s the application’s responsibility to remove the file at the appropriate time.

## See Also

### Opening Files

- [application(\_:open:)](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openFileWithoutUI:)](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application(\_:openFiles:)](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile(\_:)](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

# application:openTempFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app opens the specified temporary file.

## Declaration

```objectivec
- (BOOL) application:(NSApplication *) sender openTempFile:(NSString *) filename;
```

## Parameters

- `sender`: The application object associated with the delegate.
- `filename`: The name of the temporary file to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Sent directly by `theApplication` to the delegate. The method should attempt to open the file `filename`, returning [true](https://developer.apple.com/documentation/swift/true) if the file is successfully opened, and [false](https://developer.apple.com/documentation/swift/false) otherwise.

By design, a file opened through this method is assumed to be temporary—it’s the application’s responsibility to remove the file at the appropriate time.

## See Also

### Opening Files

- [application:openURLs:](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openFileWithoutUI:](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application:openFiles:](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile:](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.
