> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/hascommands](https://developer.apple.com/documentation/webkit/wkwebextension/hascommands)

# hasCommands (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension includes commands that users can invoke.

## Declaration

```swift
var hasCommands: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension contains one or more commands that can be performed by the user. These commands should be accessible via keyboard shortcuts, menu items, or other user interface elements provided by the app. The list of commands can be accessed via [commands](../wkwebextensioncontext/commands.md) on an extension context, and invoked via [performCommand(\_:)](../wkwebextensioncontext/performcommand%28__%29.md).

# hasCommands (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

A Boolean value indicating whether the extension includes commands that users can invoke.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasCommands;
```

<a id="discussion"></a>

## Discussion

If this property is `YES`, the extension contains one or more commands that can be performed by the user. These commands should be accessible via keyboard shortcuts, menu items, or other user interface elements provided by the app. The list of commands can be accessed via [commands](../wkwebextensioncontext/commands.md) on an extension context, and invoked via [performCommand:](../wkwebextensioncontext/performcommand%28__%29.md).
