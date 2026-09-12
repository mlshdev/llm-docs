> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/alertmessage](https://developer.apple.com/documentation/corenfc/cardsession/alertmessage)

# alertMessage

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A message to show on the alert action sheet after card emulation starts.

## Declaration

```swift
var alertMessage: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use this string to provide additional context about the NFC card emulation process. You can update this string in any thread context as long as the session is valid. Set this value prior to calling [startEmulation()](startemulation%28%29.md) to display an appropriate message.
