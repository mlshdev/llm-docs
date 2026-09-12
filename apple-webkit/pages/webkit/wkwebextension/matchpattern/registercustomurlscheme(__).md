> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/registercustomurlscheme(_:)](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/registercustomurlscheme(_:))

# registerCustomURLScheme(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Registers a custom URL scheme that can be used in match patterns.

## Declaration

```swift
class func registerCustomURLScheme(_ urlScheme: String)
```

## Parameters

- `urlScheme`: The custom URL scheme to register.

<a id="discussion"></a>

## Discussion

This method should be used to register any custom URL schemes used by the app for the extension base URLs, other than `webkit-extension`, or if extensions should have access to other supported URL schemes when using `<all_urls>`.

# registerCustomURLScheme: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Registers a custom URL scheme that can be used in match patterns.

## Declaration

```objectivec
+ (void) registerCustomURLScheme:(NSString *) urlScheme;
```

## Parameters

- `urlScheme`: The custom URL scheme to register.

<a id="discussion"></a>

## Discussion

This method should be used to register any custom URL schemes used by the app for the extension base URLs, other than `webkit-extension`, or if extensions should have access to other supported URL schemes when using `<all_urls>`.
