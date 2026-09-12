> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:printfile:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:printfile:))

# application(\_:printFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app prints the specified file in its entirety.

## Declaration

```swift
@MainActor optional func application(_ sender: NSApplication, printFile filename: String) -> Bool
```

## Parameters

- `sender`: The application object that is handling the printing.
- `filename`: The name of the file to print.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully printed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This message is sent directly by `theApplication` to the delegate. The application terminates (using the [terminate(\_:)](../nsapplication/terminate%28__%29.md) method) after this method returns.

If at all possible, this method should print the file without displaying the user interface. For example, if you pass the `-NSPrint` option to the TextEdit application, TextEdit assumes you want to print the entire contents of the specified file. However, if the application opens more complex documents, you may want to display a panel that lets the user choose exactly what they want to print.

## See Also

### Related Documentation

- [application(\_:openFileWithoutUI:)](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.

### Printing

- [application(\_:printFiles:withSettings:showPrintPanels:)](application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.
- [NSApplication.PrintReply](../nsapplication/printreply.md): Constants that indicate the outcome of a print request.

# application:printFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates if the app prints the specified file in its entirety.

## Declaration

```objectivec
- (BOOL) application:(NSApplication *) sender printFile:(NSString *) filename;
```

## Parameters

- `sender`: The application object that is handling the printing.
- `filename`: The name of the file to print.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file was successfully printed or [false](https://developer.apple.com/documentation/swift/false) if it was not.

<a id="Discussion"></a>

## Discussion

This message is sent directly by `theApplication` to the delegate. The application terminates (using the [terminate:](../nsapplication/terminate%28__%29.md) method) after this method returns.

If at all possible, this method should print the file without displaying the user interface. For example, if you pass the `-NSPrint` option to the TextEdit application, TextEdit assumes you want to print the entire contents of the specified file. However, if the application opens more complex documents, you may want to display a panel that lets the user choose exactly what they want to print.

## See Also

### Related Documentation

- [application:openFileWithoutUI:](application%28__openfilewithoutui_%29.md): Returns a Boolean value that indicates if the app opens the specified file without showing its user interface.

### Printing

- [application:printFiles:withSettings:showPrintPanels:](application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.
- [NSApplicationPrintReply](../nsapplication/printreply.md): Constants that indicate the outcome of a print request.
