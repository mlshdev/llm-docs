> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/nssystemextensionusagedescriptionkey](https://developer.apple.com/documentation/systemextensions/nssystemextensionusagedescriptionkey)

# NSSystemExtensionUsageDescriptionKey (Swift)

**Framework:** System Extensions  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells the user why the app is trying to install a system extension bundle.

## Declaration

```swift
let NSSystemExtensionUsageDescriptionKey: String
```

<a id="Discussion"></a>

## Discussion

This key is required for all system extensions except DriverKit extensions, and must be in the extension’s `Info.plist` file. Failure to include this key results in an error at activation time. For DriverKit extensions, use [OSBundleUsageDescriptionKey](osbundleusagedescriptionkey.md) instead.

## See Also

### Usage descriptions

- [OSBundleUsageDescriptionKey](osbundleusagedescriptionkey.md): A message that tells the user why the app is trying to install a driver extension bundle.

# NSSystemExtensionUsageDescriptionKey (Objective-C)

**Framework:** System Extensions  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells the user why the app is trying to install a system extension bundle.

## Declaration

```objectivec
extern NSString * const NSSystemExtensionUsageDescriptionKey;
```

<a id="Discussion"></a>

## Discussion

This key is required for all system extensions except DriverKit extensions, and must be in the extension’s `Info.plist` file. Failure to include this key results in an error at activation time. For DriverKit extensions, use [OSBundleUsageDescriptionKey](osbundleusagedescriptionkey.md) instead.

## See Also

### Usage descriptions

- [OSBundleUsageDescriptionKey](osbundleusagedescriptionkey.md): A message that tells the user why the app is trying to install a driver extension bundle.
