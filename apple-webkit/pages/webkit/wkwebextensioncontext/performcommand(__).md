> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/performcommand(_:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/performcommand(_:))

# performCommand(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Performs the specified command, triggering events specific to this extension.

## Declaration

```swift
func performCommand(_ command: WKWebExtension.Command)
```

## Parameters

- `command`: The command to be performed.

<a id="discussion"></a>

## Discussion

This method performs the given command as if it was triggered by a user gesture within the context of the focused window and active tab.

# performCommand: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Performs the specified command, triggering events specific to this extension.

## Declaration

```objectivec
- (void) performCommand:(WKWebExtensionCommand *) command;
```

## Parameters

- `command`: The command to be performed.

<a id="discussion"></a>

## Discussion

This method performs the given command as if it was triggered by a user gesture within the context of the focused window and active tab.
