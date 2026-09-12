> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/avsystemrouting/avsystemroutecontroller-4teia/supportedextensionavailable](https://developer.apple.com/documentation/avsystemrouting/avsystemroutecontroller-4teia/supportedextensionavailable)

# supportedExtensionAvailable

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A Boolean value that indicates whether a supported system routing extension is available.

## Declaration

```objectivec
@property (class, nonatomic, readonly, getter=isSupportedExtensionAvailable) BOOL supportedExtensionAvailable;
```

<a id="discussion"></a>

## Discussion

This property is `YES` when the app has declared support for at least one form of system routing in its `Info.plist` and a matching extension is installed:

- one or more protocols listed under `MDESupportedProtocols` and at least one installed extension matches, or
- `MDESupportsUniversalURLPlayback` set to `true`, with an installed extension that supports URL playback.

If neither key is declared, or no installed extension matches the declared support, this property is `NO`.

Check this property before attempting to use the routing controller to ensure that the necessary system support is available for your app’s routing requirements.
