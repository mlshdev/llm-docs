> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebviewconfiguration/urlschemehandler(forurlscheme:)](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration/urlschemehandler(forurlscheme:))

# urlSchemeHandler(forURLScheme:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the currently registered handler object for the specified URL scheme.

## Declaration

```swift
func urlSchemeHandler(forURLScheme urlScheme: String) -> (any WKURLSchemeHandler)?
```

## Parameters

- `urlScheme`: The scheme to look up. Scheme names are case sensitive, must start with an ASCII letter, and may contain only ASCII letters, numbers, the “`+`” character, the “`-`” character, and the “`.`” character. If this parameter contains an empty string or the scheme name includes invalid characters, this method returns `nil`.

<a id="return-value"></a>

## Return Value

The handler object for the specified scheme, or `nil` if the scheme has no handler.

## See Also

### Adding handlers for custom URL schemes

- [setURLSchemeHandler(\_:forURLScheme:)](seturlschemehandler%28__forurlscheme_%29.md): Registers an object to load resources associated with the specified URL scheme.

# urlSchemeHandlerForURLScheme: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the currently registered handler object for the specified URL scheme.

## Declaration

```objectivec
- (id<WKURLSchemeHandler>) urlSchemeHandlerForURLScheme:(NSString *) urlScheme;
```

## Parameters

- `urlScheme`: The scheme to look up. Scheme names are case sensitive, must start with an ASCII letter, and may contain only ASCII letters, numbers, the “`+`” character, the “`-`” character, and the “`.`” character. If this parameter contains an empty string or the scheme name includes invalid characters, this method returns `nil`.

<a id="return-value"></a>

## Return Value

The handler object for the specified scheme, or `nil` if the scheme has no handler.

## See Also

### Adding handlers for custom URL schemes

- [setURLSchemeHandler:forURLScheme:](seturlschemehandler%28__forurlscheme_%29.md): Registers an object to load resources associated with the specified URL scheme.
