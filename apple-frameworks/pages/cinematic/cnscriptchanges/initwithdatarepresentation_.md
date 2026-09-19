> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnscriptchanges/initwithdatarepresentation:

# initWithDataRepresentation:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a previously saved data representation.

## Declaration

```objectivec
- (instancetype) initWithDataRepresentation:(NSData *) dataRepresentation;
```

## Parameters

- `dataRepresentation`: Persistent data representation of changes for later restoration.

<a id="return-value"></a>

## Return Value

An object of a previously saved data representation.
