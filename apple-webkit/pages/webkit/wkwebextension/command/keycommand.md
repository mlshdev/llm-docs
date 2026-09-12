> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/command/keycommand](https://developer.apple.com/documentation/webkit/wkwebextension/command/keycommand)

# keyCommand (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

A key command representation of the web extension command for use in the responder chain.

## Declaration

```swift
@NSCopying var keyCommand: UIKeyCommand? { get }
```

<a id="discussion"></a>

## Discussion

Provides a [UIKeyCommand](https://developer.apple.com/documentation/uikit/uikeycommand) instance representing the web extension command, ready for integration in the app.

The property is `nil` if no shortcut is defined. Otherwise, the key command is fully configured with the necessary input key and modifier flags to perform the associated command upon activation. It can be included in a view controller or other responder’s [keyCommands](https://developer.apple.com/documentation/uikit/uiresponder/keycommands) property, enabling keyboard activation and discoverability of the web extension command.

# keyCommand (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · visionOS 2.4+

A key command representation of the web extension command for use in the responder chain.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIKeyCommand * keyCommand;
```

<a id="discussion"></a>

## Discussion

Provides a [UIKeyCommand](https://developer.apple.com/documentation/uikit/uikeycommand) instance representing the web extension command, ready for integration in the app.

The property is `nil` if no shortcut is defined. Otherwise, the key command is fully configured with the necessary input key and modifier flags to perform the associated command upon activation. It can be included in a view controller or other responder’s [keyCommands](https://developer.apple.com/documentation/uikit/uiresponder/keycommands) property, enabling keyboard activation and discoverability of the web extension command.
