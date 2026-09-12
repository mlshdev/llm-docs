> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningparameters/forcewifiscan](https://developer.apple.com/documentation/matter/mtrcommissioningparameters/forcewifiscan)

# forceWiFiScan (Swift)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Whether to force a network scan before requesting Wi-Fi credentials. The default is NO.

## Declaration

```swift
var forceWiFiScan: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Even if this value is NO a scan may still be performed.

This value will be ignored if Wi-Fi credentials are provided or not needed.

NOTE: Not all APIs that take MTRCommissioningParameters pay attention to this flag.

# forceWiFiScan (Objective-C)

**Framework:** Matter  
**Kind:** Instance Property  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Whether to force a network scan before requesting Wi-Fi credentials. The default is NO.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL forceWiFiScan;
```

<a id="discussion"></a>

## Discussion

Even if this value is NO a scan may still be performed.

This value will be ignored if Wi-Fi credentials are provided or not needed.

NOTE: Not all APIs that take MTRCommissioningParameters pay attention to this flag.
