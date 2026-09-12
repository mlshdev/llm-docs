> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensiontab/takesnapshot(using:for:completionhandler:)](https://developer.apple.com/documentation/webkit/wkwebextensiontab/takesnapshot(using:for:completionhandler:))

# takeSnapshot(using:for:completionHandler:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to capture a snapshot of the current webpage as an image.

## Declaration

```swift
optional func takeSnapshot(using configuration: WKSnapshotConfiguration, for context: WKWebExtensionContext, completionHandler: @escaping (UIImage?, (any Error)?) -> Void)
```

```swift
optional func snapshot(using configuration: WKSnapshotConfiguration, for context: WKWebExtensionContext) async throws -> UIImage?
```

```swift
optional func takeSnapshot(using configuration: WKSnapshotConfiguration, for context: WKWebExtensionContext, completionHandler: @escaping (NSImage?, (any Error)?) -> Void)
```

```swift
optional func snapshot(using configuration: WKSnapshotConfiguration, for context: WKWebExtensionContext) async throws -> NSImage?
```

## Parameters

- `configuration`: An object that specifies how the snapshot is configured.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. The block takes two arguments: the captured image of the webpage (or `nil` if capturing failed) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Defaults to capturing the visible area of the tab’s web view if not implemented.

# takeSnapshotUsingConfiguration:forWebExtensionContext:completionHandler: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Called to capture a snapshot of the current webpage as an image.

## Declaration

```objectivec
- (void) takeSnapshotUsingConfiguration:(WKSnapshotConfiguration *) configuration forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(UIImage *webpageImage, NSError *error)) completionHandler;
```

```objectivec
- (void) takeSnapshotUsingConfiguration:(WKSnapshotConfiguration *) configuration forWebExtensionContext:(WKWebExtensionContext *) context completionHandler:(void (^)(NSImage *webpageImage, NSError *error)) completionHandler;
```

## Parameters

- `configuration`: An object that specifies how the snapshot is configured.
- `context`: The context in which the web extension is running.
- `completionHandler`: A block that must be called upon completion. The block takes two arguments: the captured image of the webpage (or `nil` if capturing failed) and an error, which should be provided if any errors occurred.

<a id="discussion"></a>

## Discussion

Defaults to capturing the visible area of the tab’s web view if not implemented.
