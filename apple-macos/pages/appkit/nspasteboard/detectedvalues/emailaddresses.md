> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspasteboard/detectedvalues/emailaddresses

# emailAddresses

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An array of email addresses that the data detection system identifies.

## Declaration

```swift
var emailAddresses: [DDMatchEmailAddress] { get }
```

## See Also

### Email and web values

- [links](links.md): An array of web links that the data detection system identifies.
- [probableWebSearch](probablewebsearch.md): A string that the data detection system identifies as a probable web search item, suitable for implementing “Paste and Search”.
- [probableWebURL](probableweburl.md): A string that the data detection system identifies as a probable web URL, suitable for implementing “Paste and Go”.
