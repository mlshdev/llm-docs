> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/pmresolution](https://developer.apple.com/documentation/applicationservices/core_printing/pmresolution)

# PMResolution

**Interface language:** Objective-C

**Framework:** Application Services

A data structure that contains printing resolution information.

## Declaration

```objectivec
struct PMResolution {
   double hRes;
   double vRes;
};
```

<a id="overview"></a>

## Overview

The functions [PMGetResolution](1805451-pmgetresolution.md) and [PMPrinterGetPrinterResolution](1805554-pmprintergetprinterresolution.md) use this structure to return printing resolution information. Your application can pass this information to the function [PMSetResolution](1805452-pmsetresolution.md).

## Topics

### Fields

- [hRes](../pmresolution/1460032-hres.md): The horizontal resolution in dots per inch (dpi).
- [vRes](../pmresolution/1464671-vres.md): The vertical resolution in dots per inch (dpi).
