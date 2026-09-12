> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/diskimagekit/diskimage/stackablelayer](https://developer.apple.com/documentation/diskimagekit/diskimage/stackablelayer)

# DiskImage.StackableLayer

**Framework:** DiskImageKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+

A marker protocol that stackable disk image layer configuration objects conform to.

## Declaration

```swift
protocol StackableLayer
```

<a id="overview"></a>

## Overview

The [appending(\_:)](appending%28__%29-3pfqg.md) method accepts objects that conform to this protocol.  For more information about image layering, see [StackedImage](../stackedimage.md).

## Relationships

### Conforming Types

- [ASIFLayerCreationConfiguration](../asiflayercreationconfiguration.md)

## See Also

### Appending layers and resizing existing images

- [appending(\_:)](appending%28__%29-4wifj.md): Appends a layer to this disk image, creating or extending a stack.
