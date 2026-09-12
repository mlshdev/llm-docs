> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:openfilewithoutui:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:openfilewithoutui:))

# application(\_:openFileWithoutUI:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.

## Declaration

```swift
@MainActor optional func application(_ sender: Any, openFileWithoutUI filename: String) -> Bool
```

## Parameters

- `sender`: The object that sent the command.
- `filename`: The name of the file to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Sent directly by `sender` to the delegate to request that the file `filename` be opened as a linked file. The method should open the file without bringing up its application’s user interface—that is, work with the file is under programmatic control of `sender`, rather than under keyboard control of the user.

## See Also

### Related Documentation

- [application(\_:printFile:)](application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.

### Opening Files

- [application(\_:open:)](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openTempFile:)](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application(\_:openFiles:)](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile(\_:)](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

# application:openFileWithoutUI: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.

## Declaration

```objectivec
- (BOOL) application:(id) sender openFileWithoutUI:(NSString *) filename;
```

## Parameters

- `sender`: The object that sent the command.
- `filename`: The name of the file to open.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully opened or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

Sent directly by `sender` to the delegate to request that the file `filename` be opened as a linked file. The method should open the file without bringing up its application’s user interface—that is, work with the file is under programmatic control of `sender`, rather than under keyboard control of the user.

## See Also

### Related Documentation

- [application:printFile:](application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.

### Opening Files

- [application:openURLs:](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openTempFile:](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [application:openFiles:](application%28__openfiles_%29.md): Tells the delegate to open the specified files.
- [applicationShouldOpenUntitledFile:](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.
