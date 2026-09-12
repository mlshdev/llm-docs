> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationshouldopenuntitledfile(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationshouldopenuntitledfile(_:))

# applicationShouldOpenUntitledFile(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app can open an untitled file.

## Declaration

```swift
@MainActor optional func applicationShouldOpenUntitledFile(_ sender: NSApplication) -> Bool
```

## Parameters

- `sender`: The application object associated with the delegate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application should open a new untitled file or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Use this method to decide whether the application should open a new, untitled file. Note that [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md) is invoked if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Opening Files

- [application(\_:open:)](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openFileWithoutUI:)](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application(\_:openTempFile:)](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application(\_:openFiles:)](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

# applicationShouldOpenUntitledFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app can open an untitled file.

## Declaration

```objectivec
- (BOOL) applicationShouldOpenUntitledFile:(NSApplication *) sender;
```

## Parameters

- `sender`: The application object associated with the delegate.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the application should open a new untitled file or [false](https://developer.apple.com/documentation/swift/false) if it should not.

<a id="Discussion"></a>

## Discussion

Use this method to decide whether the application should open a new, untitled file. Note that [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md) is invoked if this method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Opening Files

- [application:openURLs:](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openFileWithoutUI:](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application:openTempFile:](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application:openFiles:](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.
