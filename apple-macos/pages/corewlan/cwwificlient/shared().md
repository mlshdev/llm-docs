> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwwificlient/shared()](https://developer.apple.com/documentation/corewlan/cwwificlient/shared())

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
