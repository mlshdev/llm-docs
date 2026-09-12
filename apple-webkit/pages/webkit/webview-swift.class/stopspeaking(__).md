> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/stopspeaking(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/stopspeaking(_:))

# stopSpeaking(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that stops speaking that is in progress.

## Declaration

```swift
func stopSpeaking(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method stops speech that was previously started with [startSpeaking(\_:)](startspeaking%28__%29.md). This method behaves similar to the [stopSpeaking(\_:)](https://developer.apple.com/documentation/appkit/nstextview/stopspeaking%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Controlling Speakable Text

- [startSpeaking(\_:)](startspeaking%28__%29.md): An action method that starts speaking the selected text or all text if there’s no selection.

# stopSpeaking: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that stops speaking that is in progress.

## Declaration

```objectivec
- (void) stopSpeaking:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

This action method stops speech that was previously started with [startSpeaking:](startspeaking%28__%29.md). This method behaves similar to the [stopSpeaking:](https://developer.apple.com/documentation/appkit/nstextview/stopspeaking%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Controlling Speakable Text

- [startSpeaking:](startspeaking%28__%29.md): An action method that starts speaking the selected text or all text if there’s no selection.
