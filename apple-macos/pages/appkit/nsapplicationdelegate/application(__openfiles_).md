> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:openfiles:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:openfiles:))

# application(\_:openFiles:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate to open the specified files.

## Declaration

```swift
@MainActor optional func application(_ sender: NSApplication, openFiles filenames: [String])
```

## Parameters

- `sender`: The application object associated with the delegate.
- `filenames`: An array of `NSString` objects containing the names of the files to open..

<a id="Discussion"></a>

## Discussion

Identical to [application(\_:openFile:)](application%28__openfile_%29.md) except that the receiver opens multiple files corresponding to the file names in the `filenames` array. Delegates should invoke the [reply(toOpenOrPrint:)](../nsapplication/reply%28toopenorprint_%29.md) method upon success or failure, or when the user cancels the operation.

## See Also

### Opening Files

- [application(\_:open:)](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application(\_:openFile:)](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application(\_:openFileWithoutUI:)](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application(\_:openTempFile:)](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [applicationShouldOpenUntitledFile(\_:)](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile(\_:)](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.

# application:openFiles: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate to open the specified files.

## Declaration

```objectivec
- (void) application:(NSApplication *) sender openFiles:(NSArray<NSString *> *) filenames;
```

## Parameters

- `sender`: The application object associated with the delegate.
- `filenames`: An array of `NSString` objects containing the names of the files to open..

<a id="Discussion"></a>

## Discussion

Identical to [application:openFile:](application%28__openfile_%29.md) except that the receiver opens multiple files corresponding to the file names in the `filenames` array. Delegates should invoke the [replyToOpenOrPrint:](../nsapplication/reply%28toopenorprint_%29.md) method upon success or failure, or when the user cancels the operation.

## See Also

### Opening Files

- [application:openURLs:](application%28__open_%29.md): Tells the delegate to open the resource at the specified URL.
- [application:openFile:](application%28__openfile_%29.md): Returns a Boolean value that indicates if the app opens the specified file.
- [application:openFileWithoutUI:](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.
- [application:openTempFile:](application%28__opentempfile_%29.md): Returns a Boolean value that indicates if the app opens the specified temporary file.
- [applicationShouldOpenUntitledFile:](applicationshouldopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app can open an untitled file.
- [applicationOpenUntitledFile:](applicationopenuntitledfile%28__%29.md): Returns a Boolean value that indicates if the app opens an untitled file.
