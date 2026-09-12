> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/contextforextension:](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/contextforextension:)

# contextForExtension:

**Interface language:** Objective-C

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a web extension context initialized with the specified extension.

## Declaration

```objectivec
+ (instancetype) contextForExtension:(WKWebExtension *) extension;
```

## Parameters

- `extension`: The extension to use for the new web extension context.

<a id="return-value"></a>

## Return Value

An initialized web extension context.
