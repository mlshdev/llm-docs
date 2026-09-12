> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/kosbooleantrue](https://developer.apple.com/documentation/kernel/kosbooleantrue)

# kOSBooleanTrue

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

The OSBoolean constant for `true`.

## Declaration

```objectivec
OSBoolean *const & kOSBooleanTrue;
```

<a id="discussion"></a>

## Discussion

kOSBooleanTrue is the OSBoolean constant for `true`. This object does not need to be retained or released (but it can be). Comparisons of the form `booleanObject == kOSBooleanTrue` are acceptable and are equivalent to `booleanObject->getValue() == true`.
