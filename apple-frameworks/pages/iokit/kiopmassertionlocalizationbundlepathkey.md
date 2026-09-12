> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionlocalizationbundlepathkey](https://developer.apple.com/documentation/iokit/kiopmassertionlocalizationbundlepathkey)

# kIOPMAssertionLocalizationBundlePathKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Refers to a CFURL, as a CFString, identifying the path to the caller's bundle, which contains localization info.

## Declaration

```objectivec
#define kIOPMAssertionLocalizationBundlePathKey
```

<a id="discussion"></a>

## Discussion

The bundle must contain localizations for [kIOPMAssertionHumanReadableReasonKey](kiopmassertionhumanreadablereasonkey.md)

This key may be specified in the dictionary passed to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md).

This key may be present in the dictionary returned from [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md).
