> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/osbundleusagedescriptionkey](https://developer.apple.com/documentation/systemextensions/osbundleusagedescriptionkey)

# OSBundleUsageDescriptionKey (Swift)

**Framework:** System Extensions  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells the user why the app is trying to install a driver extension bundle.

## Declaration

```swift
let OSBundleUsageDescriptionKey: String
```

<a id="Discussion"></a>

## Discussion

This key is required for all DriverKit extensions and must be in the extension’s `Info.plist` file. Failure to include this key results in an error at activation time. For system extensions that are not DriverKit extensions, use [NSSystemExtensionUsageDescriptionKey](nssystemextensionusagedescriptionkey.md) instead.

## See Also

### Usage descriptions

- [NSSystemExtensionUsageDescriptionKey](nssystemextensionusagedescriptionkey.md): A message that tells the user why the app is trying to install a system extension bundle.

# OSBundleUsageDescriptionKey (Objective-C)

**Framework:** System Extensions  
**Kind:** Global Variable  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 10.15+

A message that tells the user why the app is trying to install a driver extension bundle.

## Declaration

```objectivec
extern NSString * const OSBundleUsageDescriptionKey;
```

<a id="Discussion"></a>

## Discussion

This key is required for all DriverKit extensions and must be in the extension’s `Info.plist` file. Failure to include this key results in an error at activation time. For system extensions that are not DriverKit extensions, use [NSSystemExtensionUsageDescriptionKey](nssystemextensionusagedescriptionkey.md) instead.

## See Also

### Usage descriptions

- [NSSystemExtensionUsageDescriptionKey](nssystemextensionusagedescriptionkey.md): A message that tells the user why the app is trying to install a system extension bundle.
