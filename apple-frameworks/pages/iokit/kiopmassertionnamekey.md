> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionnamekey](https://developer.apple.com/documentation/iokit/kiopmassertionnamekey)

# kIOPMAssertionNameKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The CFDictionary key for assertion name. Setting this key is required when you're creating an assertion.

## Declaration

```objectivec
#define kIOPMAssertionNameKey
```

<a id="discussion"></a>

## Discussion

`kIOPMAssertionNameKey` describes the the activity the assertion is protecting. The creator should specify a CFString value for this key in the dictionary passed to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md)

The assertion name is separate from the assertion type's behavior - specify a CFString like "Checking mail" or "Compiling" that describes the task that this assertion protects.

The CFString you associate with this key does not have to be localizable (macOS will not attempt to localize it.)

Describe your assertion as thoroughly as possible. See these other keys that can you can also set to add explanation to an assertion: OPTIONAL [kIOPMAssertionDetailsKey](kiopmassertiondetailskey.md) OPTIONAL [kIOPMAssertionHumanReadableReasonKey](kiopmassertionhumanreadablereasonkey.md) OPTIONAL [kIOPMAssertionLocalizationBundlePathKey](kiopmassertionlocalizationbundlepathkey.md)
