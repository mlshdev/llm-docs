> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/duplicate(using:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/duplicate(using:for:completionhandler:))

# duplicate(using:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to duplicate the tab.

## Declaration

```swift
optional func duplicate(using configuration: WKWebExtension.TabConfiguration, for context: WKWebExtensionContext, completionHandler: @escaping ((any WKWebExtensionTab)?, (any Error)?) -> Void)
```

```swift
optional func duplicate(using configuration: WKWebExtension.TabConfiguration, for context: WKWebExtensionContext) async throws -> (any WKWebExtensionTab)?
```

## Parameters

- `configuration`: The tab configuration influencing the duplicated tab’s properties.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes two arguments: the duplicated tab (or \\c nil if no tab was created) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

This is equivalent to the user selecting to duplicate the tab through a menu item, with the specified configuration.

No action is performed if not implemented.

# duplicateUsingConfiguration:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to duplicate the tab.

## Declaration

```objectivec
- (void) duplicateUsingConfiguration:(WKWebExtensionTabConfiguration *) configuration forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(id<WKWebExtensionTab>duplicatedTab, NSError *error)) completionHandler;
```

## Parameters

- `configuration`: The tab configuration influencing the duplicated tab’s properties.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. It takes two arguments: the duplicated tab (or \\c nil if no tab was created) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

This is equivalent to the user selecting to duplicate the tab through a menu item, with the specified configuration.

No action is performed if not implemented.
