> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasesoundasset/data

# data (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A storage buffer for the sound asset.

## Declaration

```swift
var data: Data? { get }
```

<a id="Discussion"></a>

## Discussion

This property has a value when an app creates the asset with [registerSoundAsset(data:identifier:format:normalizationMode:)](../phaseassetregistry/registersoundasset%28data_identifier_format_normalizationmode_%29.md); otherwise the value is `nil`.

## See Also

### Accessing Sound Data

- [url](url.md): The URL of the sound asset.

# data (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A storage buffer for the sound asset.

## Declaration

```objectivec
@property (readonly, nullable) NSData * data;
```

<a id="Discussion"></a>

## Discussion

This property has a value when an app creates the asset with [registerSoundAssetWithData:identifier:format:normalizationMode:error:](../phaseassetregistry/registersoundasset%28data_identifier_format_normalizationmode_%29.md); otherwise the value is `nil`.

## See Also

### Accessing Sound Data

- [url](url.md): The URL of the sound asset.
