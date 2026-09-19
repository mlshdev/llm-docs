> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nednsproxyprovider/systemdnssettings

# systemDNSSettings (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The current system DNS settings.

## Declaration

```swift
var systemDNSSettings: [NEDNSSettings]? { get }
```

<a id="Discussion"></a>

## Discussion

You can use key-value observing to watch for changes on this parameter.

# systemDNSSettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The current system DNS settings.

## Declaration

```objectivec
@property (readonly, nullable) NSArray<NEDNSSettings *> * systemDNSSettings;
```

<a id="Discussion"></a>

## Discussion

You can use key-value observing to watch for changes on this parameter.
