> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/printreply](https://developer.apple.com/documentation/appkit/nsapplication/printreply)

# NSApplication.PrintReply (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate the outcome of a print request.

## Declaration

```swift
enum PrintReply
```

## Topics

### Constants

- [NSApplication.PrintReply.printingCancelled](printreply/printingcancelled.md): Printing was cancelled.
- [NSApplication.PrintReply.printingSuccess](printreply/printingsuccess.md): Printing was successful.
- [NSApplication.PrintReply.printingFailure](printreply/printingfailure.md): Printing failed.
- [NSApplication.PrintReply.printingReplyLater](printreply/printingreplylater.md)

### Initializers

- [init(rawValue:)](printreply/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Printing

- [application(\_:printFile:)](../nsapplicationdelegate/application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [application(\_:printFiles:withSettings:showPrintPanels:)](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.

# NSApplicationPrintReply (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that indicate the outcome of a print request.

## Declaration

```objectivec
enum NSApplicationPrintReply : NSUInteger;
```

## Topics

### Constants

- [NSPrintingCancelled](printreply/printingcancelled.md): Printing was cancelled.
- [NSPrintingSuccess](printreply/printingsuccess.md): Printing was successful.
- [NSPrintingFailure](printreply/printingfailure.md): Printing failed.
- [NSPrintingReplyLater](printreply/printingreplylater.md)

## See Also

### Printing

- [application:printFile:](../nsapplicationdelegate/application%28__printfile_%29.md): Returns a Boolean value that indicates if the app prints the specified file in its entirety.
- [application:printFiles:withSettings:showPrintPanels:](../nsapplicationdelegate/application%28__printfiles_withsettings_showprintpanels_%29.md): Returns a value that indicates if the app prints the specified files.
