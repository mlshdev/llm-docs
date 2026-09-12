> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/detectwebpagelocale(for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/detectwebpagelocale(for:completionhandler:))

# detectWebpageLocale(for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to detect the locale of the webpage currently loaded in the tab.

## Declaration

```swift
optional func detectWebpageLocale(for context: WKWebExtensionContext, completionHandler: @escaping (Locale?, (any Error)?) -> Void)
```

```swift
optional func detectWebpageLocale(for context: WKWebExtensionContext) async throws -> Locale?
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. The block takes two arguments: the detected locale (or `nil` if the locale is unknown) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.

# detectWebpageLocaleForWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to detect the locale of the webpage currently loaded in the tab.

## Declaration

```objectivec
- (void) detectWebpageLocaleForWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSLocale *locale, NSError *error)) completionHandler;
```

## Parameters

- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. The block takes two arguments: the detected locale (or `nil` if the locale is unknown) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

No action is performed if not implemented.
