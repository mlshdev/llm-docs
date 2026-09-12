> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/urlschemehandlers](https://developer.apple.com/documentation/webkit/webpage/configuration/urlschemehandlers)

# urlSchemeHandlers

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Allows registering an object to load resources associated with a specified URL scheme.

## Declaration

```swift
@MainActor var urlSchemeHandlers: [URLScheme : any URLSchemeHandler]
```
