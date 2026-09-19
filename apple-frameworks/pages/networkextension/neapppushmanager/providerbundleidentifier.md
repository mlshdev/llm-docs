> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neapppushmanager/providerbundleidentifier

# providerBundleIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A string that contains the bundle identifier of the push provider.

## Declaration

```swift
var providerBundleIdentifier: String? { get set }
```

## See Also

### Inspecting provider properties

- [providerConfiguration](providerconfiguration.md): A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.

# providerBundleIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A string that contains the bundle identifier of the push provider.

## Declaration

```objectivec
@property (copy, nullable) NSString * providerBundleIdentifier;
```

## See Also

### Inspecting provider properties

- [providerConfiguration](providerconfiguration.md): A dictionary that contains vendor-specific key-value pairs, that you use to configure a provider.
