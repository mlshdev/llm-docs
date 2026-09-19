> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvfillextendedpixelscallbackdata/refcon

# refCon (Swift)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A pointer to application-defined data that is passed to your custom pixel fill function.

## Declaration

```swift
var refCon: UnsafeMutableRawPointer?
```

## See Also

### Properties

- [fillCallBack](fillcallback.md)
- [version](version.md): The version of this fill algorithm.

# refCon (Objective-C)

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A pointer to application-defined data that is passed to your custom pixel fill function.

## Declaration

```objectivec
void * refCon;
```

## See Also

### Properties

- [fillCallBack](fillcallback.md)
- [version](version.md): The version of this fill algorithm.
