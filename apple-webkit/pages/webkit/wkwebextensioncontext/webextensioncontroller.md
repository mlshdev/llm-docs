> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/wkwebextensioncontext/webextensioncontroller

# webExtensionController (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The extension controller this context is loaded in, otherwise `nil` if it isn’t loaded.

## Declaration

```swift
weak var webExtensionController: WKWebExtensionController? { get }
```

# webExtensionController (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The extension controller this context is loaded in, otherwise `nil` if it isn’t loaded.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) WKWebExtensionController * webExtensionController;
```
