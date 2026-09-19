> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1645753-anonymous/typerangedescriptor

# typeRangeDescriptor

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typeRangeDescriptor = 'rang'
```

<a id="discussion"></a>

## Discussion

Specifies a range descriptor that identifies two Apple event objects marking the beginning and end of a range of elements. The data for a range descriptor consists of two keyword-specified descriptors with the keywords `keyAERangeStart` and `keyAERangeStop`, respectively, which specify the first Apple event object in the desired range and the last Apple event object in the desired range.
