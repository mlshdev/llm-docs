> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corewlan/cwwificlient/shared()

# shared() (Swift)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.10+

The shared Wi-Fi client object.

## Declaration

```swift
class func shared() -> CWWiFiClient
```

<a id="Discussion"></a>

## Discussion

Each process spawns its own shared instance.

# sharedWiFiClient (Objective-C)

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.10+

The shared Wi-Fi client object.

## Declaration

```objectivec
+ (CWWiFiClient *) sharedWiFiClient;
```

<a id="Discussion"></a>

## Discussion

Each process spawns its own shared instance.
