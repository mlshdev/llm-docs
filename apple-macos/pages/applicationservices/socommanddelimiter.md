> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/socommanddelimiter](https://developer.apple.com/documentation/applicationservices/socommanddelimiter)

# soCommandDelimiter

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soCommandDelimiter: OSType { get }
```

<a id="discussion"></a>

## Discussion

Set the embedded speech command delimiter characters to be used for the speech channel. By default the opening delimiter is “`[[`” and the closing delimiter is “`]]`”. Your application might need to change these delimiters temporarily if those character sequences occur naturally in a text buffer that is to be spoken. Your application can also disable embedded command processing by passing empty delimiters (using two `NUL` ASCII characters).The `speechInfo` parameter is a pointer to a delimiter information structure, described in [DelimiterInfo](delimiterinfo.md).

This selector works with the `SetSpeechInfo` function.
