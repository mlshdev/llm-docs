> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/startspeaking(_:)](https://developer.apple.com/documentation/webkit/webview-swift.class/startspeaking(_:))

# startSpeaking(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that starts speaking the selected text or all text if there’s no selection.

## Declaration

```swift
func startSpeaking(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

Speech continues asynchronously until the end of the text or until terminated by invoking the [stopSpeaking(\_:)](stopspeaking%28__%29.md) method. This method behaves similar to the [startSpeaking(\_:)](https://developer.apple.com/documentation/appkit/nstextview/startspeaking%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Controlling Speakable Text

- [stopSpeaking(\_:)](stopspeaking%28__%29.md): An action method that stops speaking that is in progress.

# startSpeaking: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS

An action method that starts speaking the selected text or all text if there’s no selection.

## Declaration

```objectivec
- (void) startSpeaking:(id) sender;
```

## Parameters

- `sender`: The object that sent this message.

<a id="Discussion"></a>

## Discussion

Speech continues asynchronously until the end of the text or until terminated by invoking the [stopSpeaking:](stopspeaking%28__%29.md) method. This method behaves similar to the [startSpeaking:](https://developer.apple.com/documentation/appkit/nstextview/startspeaking%28_:%29) method in [NSTextView](https://developer.apple.com/documentation/appkit/nstextview).

## See Also

### Controlling Speakable Text

- [stopSpeaking:](stopspeaking%28__%29.md): An action method that stops speaking that is in progress.
