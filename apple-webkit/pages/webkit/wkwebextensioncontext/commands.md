> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextensioncontext/commands

# commands (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The commands associated with the extension.

## Declaration

```swift
var commands: [WKWebExtension.Command] { get }
```

<a id="discussion"></a>

## Discussion

Provides all commands registered within the extension. Each command represents an action or behavior available for the web extension.

## See Also

### Related Documentation

- [performCommand(\_:)](performcommand%28__%29.md): Performs the specified command, triggering events specific to this extension.

# commands (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The commands associated with the extension.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<WKWebExtensionCommand *> * commands;
```

<a id="discussion"></a>

## Discussion

Provides all commands registered within the extension. Each command represents an action or behavior available for the web extension.

## See Also

### Related Documentation

- [performCommand:](performcommand%28__%29.md): Performs the specified command, triggering events specific to this extension.
