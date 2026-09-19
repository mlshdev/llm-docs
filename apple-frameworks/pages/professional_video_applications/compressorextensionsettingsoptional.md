> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/professional_video_applications/compressorextensionsettingsoptional

# CompressorExtensionSettingsOptional (Swift)

**Framework:** Professional Video Applications  
**Kind:** Protocol  
**Availability:** ProVideo Encoder Extensions 1.0+

An interface you use to receive updated values of source media attributes.

## Declaration

```swift
protocol CompressorExtensionSettingsOptional
```

<a id="overview"></a>

## Overview

When a user updates the source media settings for an encoding job, the Compressor app calls the [setJobSourceAttributes(\_:)](compressorextensionsettingsoptional/setjobsourceattributes%28__%29.md) method to pass the updated values to the encoder extension. Use the source media attributes to configure the encoding settings that have values set to automatic.

## Topics

### Setting Source Attributes

- [setJobSourceAttributes(\_:)](compressorextensionsettingsoptional/setjobsourceattributes%28__%29.md): Sets the source media attributes based on the given values.

# CompressorExtensionSettingsOptional (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Protocol

An interface you use to receive updated values of source media attributes.

## Declaration

```objectivec
@protocol CompressorExtensionSettingsOptional
```

<a id="overview"></a>

## Overview

When a user updates the source media settings for an encoding job, the Compressor app calls the [setJobSourceAttributes:](compressorextensionsettingsoptional/setjobsourceattributes%28__%29.md) method to pass the updated values to the encoder extension. Use the source media attributes to configure the encoding settings that have values set to automatic.

## Topics

### Setting Source Attributes

- [setJobSourceAttributes:](compressorextensionsettingsoptional/setjobsourceattributes%28__%29.md): Sets the source media attributes based on the given values.
