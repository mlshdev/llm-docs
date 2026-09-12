> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/init(appextensionbundle:)](https://developer.apple.com/documentation/webkit/wkwebextension/init(appextensionbundle:))

# init(appExtensionBundle:)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Creates a web extension initialized with a specified app extension bundle.

## Declaration

```swift
@MainActor @preconcurrency convenience init(appExtensionBundle: Bundle) async throws
```

## Parameters

- `appExtensionBundle`: The bundle to use for the new web extension.

<a id="discussion"></a>

## Discussion

The app extension bundle must contain a `manifest.json` file in its resources directory. If the manifest is invalid or missing, or the bundle is otherwise improperly configured, an error will be thrown.

> **Throws**

> An error if the manifest is invalid or missing, or the bundle is otherwise improperly configured.
