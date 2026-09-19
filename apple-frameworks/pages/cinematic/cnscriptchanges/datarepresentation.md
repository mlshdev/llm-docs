> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscriptchanges/datarepresentation

# dataRepresentation

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Persistent data representation of changes for later restoration.

## Declaration

```objectivec
@property (readonly) NSData * dataRepresentation;
```

<a id="Discussion"></a>

## Discussion

The script changes are only used with the original Cinematic movie from which the script came from.
