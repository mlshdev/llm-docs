> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/kosbooleanfalse

# kOSBooleanFalse

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The OSBoolean constant for `false`.

## Declaration

```objectivec
OSBoolean *const & kOSBooleanFalse;
```

<a id="discussion"></a>

## Discussion

kOSBooleanFalse is the OSBoolean constant for `false`. This object does not need to be retained or released (but it can be). Comparisons of the form `booleanObject == kOSBooleanFalse` are acceptable and are equivalent to `booleanObject->getValue() == false`.
