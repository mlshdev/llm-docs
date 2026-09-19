> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nspersistentstore/corespotlightexporter

# coreSpotlightExporter (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The spotlight exporter associated with this persistent store.

## Declaration

```swift
var coreSpotlightExporter: NSCoreDataCoreSpotlightDelegate { get }
```

<a id="Discussion"></a>

## Discussion

Spotlight support isn’t available in a compatible iPad or iPhone app running in visionOS.

# coreSpotlightExporter (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The spotlight exporter associated with this persistent store.

## Declaration

```objectivec
@property (nonatomic, readonly) NSCoreDataCoreSpotlightDelegate * coreSpotlightExporter;
```

<a id="Discussion"></a>

## Discussion

Spotlight support isn’t available in a compatible iPad or iPhone app running in visionOS.
