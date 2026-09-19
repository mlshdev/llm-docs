> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1572727-anonymous/formwhose

# formWhose

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
formWhose = 'whos'
```

<a id="discussion"></a>

## Discussion

Specifies a container of one or more objects and a test to perform on the objects.

The key data for `formWhose` is specified by a whose descriptor, which is a coerced Apple event record of descriptor type `typeWhoseDescriptor`. The data for a whose descriptor consists of two keyword-specified descriptors with the keywords `keyAEIndex` and `keyAETest`.

See also the description for `formTest`.
