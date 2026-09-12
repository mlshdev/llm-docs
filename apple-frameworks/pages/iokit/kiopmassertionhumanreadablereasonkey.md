> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionhumanreadablereasonkey](https://developer.apple.com/documentation/iokit/kiopmassertionhumanreadablereasonkey)

# kIOPMAssertionHumanReadableReasonKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Optional key that provides a localizable string for macOS to display PM Assertions in the GUI.

## Declaration

```objectivec
#define kIOPMAssertionHumanReadableReasonKey
```

<a id="discussion"></a>

## Discussion

The caller should specify this string in [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md). If present, macOS may display this string, localized to the user's language, to explain changes in system behavior caused by the assertion.

If set, the caller must also specify a bundle path for the key [kIOPMAssertionLocalizationBundlePathKey](kiopmassertionlocalizationbundlepathkey.md) The bundle at that path should contain localization info for the specified string.

This key may be specified in the dictionary passed to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md).

This key may be present in the dictionary returned from [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md).

Describe your assertion as thoroughly as possible. See these other keys that can you can set to add explanation to an assertion: REQUIRED [kIOPMAssertionNameKey](kiopmassertionnamekey.md) OPTIONAL [kIOPMAssertionDetailsKey](kiopmassertiondetailskey.md)
