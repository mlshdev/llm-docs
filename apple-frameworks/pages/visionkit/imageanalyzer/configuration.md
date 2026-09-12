> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalyzer/configuration](https://developer.apple.com/documentation/visionkit/imageanalyzer/configuration)

# ImageAnalyzer.Configuration

**Framework:** VisionKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 13.0+ · visionOS 1.0+

A configuration that specifies the types of items and locales that the image analyzer recognizes.

## Declaration

```swift
struct Configuration
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="overview"></a>

## Overview

Create an `ImageAnalyzer.Configuration` structure to specify the criteria when analyzing an image. Then pass the configuration object to the `ImageAnalyzer` [analyze(\_:configuration:)](analyze%28__configuration_%29.md) or similar method to find the items you want.

## Topics

### Creating configurations

- [init(\_:)](configuration/init%28__%29.md): Creates a configuration that an image analyzer uses to find items.
- [analysisTypes](configuration/analysistypes.md): The types of items that the image analyzer looks for in the image.
- [ImageAnalyzer.AnalysisTypes](analysistypes.md): The types of items that an image analyzer looks for in an image.

### Recognizing languages

- [locales](configuration/locales.md): The languages to use in text items that the image analyzer recognizes.
