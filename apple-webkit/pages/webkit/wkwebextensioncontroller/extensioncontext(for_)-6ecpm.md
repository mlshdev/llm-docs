> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontroller/extensioncontext(for:)-6ecpm](https://developer.apple.com/documentation/webkit/wkwebextensioncontroller/extensioncontext(for:)-6ecpm)

# extensionContext(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a loaded extension context for the specified extension.

## Declaration

```swift
func extensionContext(for extension: WKWebExtension) -> WKWebExtensionContext?
```

## Parameters

- `extension`: An extension to lookup.

<a id="return-value"></a>

## Return Value

An extension context or `nil` if no match was found.

## See Also

### Related Documentation

- [extensions](extensions.md): A set of all the currently loaded extensions.

# extensionContextForExtension: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Returns a loaded extension context for the specified extension.

## Declaration

```objectivec
- (WKWebExtensionContext *) extensionContextForExtension:(WKWebExtension *) extension;
```

## Parameters

- `extension`: An extension to lookup.

<a id="return-value"></a>

## Return Value

An extension context or `nil` if no match was found.

## See Also

### Related Documentation

- [extensions](extensions.md): A set of all the currently loaded extensions.
