> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkerror/code/gameunrecognized](https://developer.apple.com/documentation/gamekit/gkerror/code/gameunrecognized)

# GKError.Code.gameUnrecognized (Swift)

**Framework:** GameKit  
**Kind:** Case  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The system can’t complete the requested operation because Game Center doesn’t recognize the app.

## Declaration

```swift
case gameUnrecognized
```

<a id="Discussion"></a>

## Discussion

Ensure the app’s `bundleID` is correct.

## See Also

### Configuration Errors

- [GKError.Code.notSupported](notsupported.md): The app doesn’t have Game Center enabled.
- [GKError.Code.appUnlisted](appunlisted.md): The system can’t complete the requested operation because the game isn’t available on the App Store.

# GKErrorGameUnrecognized (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration Case  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The system can’t complete the requested operation because Game Center doesn’t recognize the app.

## Declaration

```objectivec
GKErrorGameUnrecognized
```

<a id="Discussion"></a>

## Discussion

Ensure the app’s `bundleID` is correct.

## See Also

### Configuration Errors

- [GKErrorNotSupported](notsupported.md): The app doesn’t have Game Center enabled.
- [GKErrorAppUnlisted](appunlisted.md): The system can’t complete the requested operation because the game isn’t available on the App Store.
