> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/tecconversioninfo](https://developer.apple.com/documentation/coreservices/tecconversioninfo)

# TECConversionInfo

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Contains text encoding conversion information.

## Declaration

```objectivec
typedef struct TECConversionInfo {
    ...
} TECConversionInfo;
```

<a id="overview"></a>

## Overview

When you call the function [TECGetDirectTextEncodingConversions](1571834-tecgetdirecttextencodingconversi.md), you pass an array of text encoding conversion information structures. The function fills these structures with information about each type of supported conversion.

## Topics

### Instance Properties

- [destinationEncoding](tecconversioninfo/1571800-destinationencoding.md): The text encoding specification for the destination text.
- [reserved1](tecconversioninfo/1571813-reserved1.md): Reserved.
- [reserved2](tecconversioninfo/1571797-reserved2.md): Reserved.
- [sourceEncoding](tecconversioninfo/1571810-sourceencoding.md): The text encoding specification for the source text.
