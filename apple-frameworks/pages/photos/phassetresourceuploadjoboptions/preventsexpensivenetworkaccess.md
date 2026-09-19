> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phassetresourceuploadjoboptions/preventsexpensivenetworkaccess

# preventsExpensiveNetworkAccess (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Prevents expensive network access, such as cellular, for the service.

## Declaration

```swift
var preventsExpensiveNetworkAccess: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When `true`, the service only performs work for the associated configuration while the device has a non-expensive network connection (such as Wi-Fi or Ethernet); cellular connectivity is not used. Defaults to `false`.

# preventsExpensiveNetworkAccess (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Prevents expensive network access, such as cellular, for the service.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL preventsExpensiveNetworkAccess;
```

<a id="discussion"></a>

## Discussion

When `true`, the service only performs work for the associated configuration while the device has a non-expensive network connection (such as Wi-Fi or Ethernet); cellular connectivity is not used. Defaults to `false`.
