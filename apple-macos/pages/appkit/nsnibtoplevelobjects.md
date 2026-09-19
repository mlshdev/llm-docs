> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsnibtoplevelobjects

# NSNibTopLevelObjects

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.8)

An `NSMutableArray` object that, if present, is populated with the top-level objects of the newly instantiated nib.

## Declaration

```objectivec
extern NSString * NSNibTopLevelObjects;
```

<a id="Discussion"></a>

## Discussion

Because you must allocate this array, you are responsible for its disposal. This key is optional.

## See Also

### Constants

- [NSNibOwner](nsnibowner.md): Deprecated. The external object that is responsible for the instantiated nib.
