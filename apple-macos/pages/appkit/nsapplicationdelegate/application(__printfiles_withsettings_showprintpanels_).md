> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:printfiles:withsettings:showprintpanels:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:printfiles:withsettings:showprintpanels:))

# application(\_:printFiles:withSettings:showPrintPanels:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a value that indicates if the app prints the specified files.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, printFiles fileNames: [String], withSettings printSettings: [NSPrintInfo.AttributeKey : Any], showPrintPanels: Bool) -> NSApplication.PrintReply
```

## Parameters

- `application`: The application object that is handling the printing.
- `fileNames`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the name of a file to print.
- `printSettings`: A dictionary containing `NSPrintInfo`-compatible print job attributes.
- `showPrintPanels`: A Boolean that specifies whether the print panel should be displayed for each file printed. Print progress indicators will be presented even if this value is [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A constant indicating whether printing was successful. For a list of possible values, see [NSApplication.PrintReply](../nsapplication/printreply.md).

<a id="Discussion"></a>

## Discussion

Return `NSPrintingReplyLater` if the result of printing cannot be returned immediately, for example, if printing will cause the presentation of a sheet. If your method returns `NSPrintingReplyLater` it must always invoke the `NSApplication` method [reply(toOpenOrPrint:)](../nsapplication/reply%28toopenorprint_%29.md)\] when the entire print operation has been completed, successfully or not.

This delegate method replaces `application:printFiles:`, which is now deprecated. If your application delegate only implements the deprecated method, it is still invoked, and `NSApplication` uses private functionality to arrange for the print settings to take effect.

## See Also

### Printing

- [application(\_:printFile:)](application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [NSApplication.PrintReply](../nsapplication/printreply.md): Constants that indicate the outcome of a print request.

# application:printFiles:withSettings:showPrintPanels: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a value that indicates if the app prints the specified files.

## Declaration

```objectivec
- (NSApplicationPrintReply) application:(NSApplication *) application printFiles:(NSArray<NSString *> *) fileNames withSettings:(NSDictionary<NSString *,id> *) printSettings showPrintPanels:(BOOL) showPrintPanels;
```

## Parameters

- `application`: The application object that is handling the printing.
- `fileNames`: An array of [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, each of which contains the name of a file to print.
- `printSettings`: A dictionary containing `NSPrintInfo`-compatible print job attributes.
- `showPrintPanels`: A Boolean that specifies whether the print panel should be displayed for each file printed. Print progress indicators will be presented even if this value is [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A constant indicating whether printing was successful. For a list of possible values, see [NSApplicationPrintReply](../nsapplication/printreply.md).

<a id="Discussion"></a>

## Discussion

Return `NSPrintingReplyLater` if the result of printing cannot be returned immediately, for example, if printing will cause the presentation of a sheet. If your method returns `NSPrintingReplyLater` it must always invoke the `NSApplication` method [replyToOpenOrPrint:](../nsapplication/reply%28toopenorprint_%29.md)\] when the entire print operation has been completed, successfully or not.

This delegate method replaces `application:printFiles:`, which is now deprecated. If your application delegate only implements the deprecated method, it is still invoked, and `NSApplication` uses private functionality to arrange for the print settings to take effect.

## See Also

### Printing

- [application:printFile:](application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [NSApplicationPrintReply](../nsapplication/printreply.md): Constants that indicate the outcome of a print request.
