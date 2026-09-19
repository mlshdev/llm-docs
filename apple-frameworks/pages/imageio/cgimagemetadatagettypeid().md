> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imageio/cgimagemetadatagettypeid()

# CGImageMetadataGetTypeID() (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for metadata objects.

## Declaration

```swift
func CGImageMetadataGetTypeID() -> CFTypeID
```

<a id="return-value"></a>

## Return Value

The type identifier for [CGImageMetadata](cgimagemetadata.md) and [CGMutableImageMetadata](cgmutableimagemetadata.md) objects.

# CGImageMetadataGetTypeID (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the type identifier for metadata objects.

## Declaration

```objectivec
extern CFTypeID CGImageMetadataGetTypeID();
```

<a id="return-value"></a>

## Return Value

The type identifier for [CGImageMetadataRef](cgimagemetadata.md) and [CGMutableImageMetadataRef](cgmutableimagemetadata.md) objects.
