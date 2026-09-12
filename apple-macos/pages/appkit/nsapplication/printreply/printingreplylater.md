> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/printreply/printingreplylater](https://developer.apple.com/documentation/appkit/nsapplication/printreply/printingreplylater)

# NSApplication.PrintReply.printingReplyLater (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

## Declaration

```swift
case printingReplyLater
```

<a id="Discussion"></a>

## Discussion

The result of printing cannot be returned immediately, for example, if printing will cause the presentation of a sheet. If your method returns `NSPrintingReplyLater` it must always invoke [reply(toOpenOrPrint:)](../reply%28toopenorprint_%29.md) when the entire print operation has been completed, successfully or not.

## See Also

### Constants

- [NSApplication.PrintReply.printingCancelled](printingcancelled.md): Printing was cancelled.
- [NSApplication.PrintReply.printingSuccess](printingsuccess.md): Printing was successful.
- [NSApplication.PrintReply.printingFailure](printingfailure.md): Printing failed.

# NSPrintingReplyLater (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

## Declaration

```objectivec
NSPrintingReplyLater
```

<a id="Discussion"></a>

## Discussion

The result of printing cannot be returned immediately, for example, if printing will cause the presentation of a sheet. If your method returns `NSPrintingReplyLater` it must always invoke [replyToOpenOrPrint:](../reply%28toopenorprint_%29.md) when the entire print operation has been completed, successfully or not.

## See Also

### Constants

- [NSPrintingCancelled](printingcancelled.md): Printing was cancelled.
- [NSPrintingSuccess](printingsuccess.md): Printing was successful.
- [NSPrintingFailure](printingfailure.md): Printing failed.
