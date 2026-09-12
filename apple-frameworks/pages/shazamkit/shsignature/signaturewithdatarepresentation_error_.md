> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsignature/signaturewithdatarepresentation:error:](https://developer.apple.com/documentation/shazamkit/shsignature/signaturewithdatarepresentation:error:)

# signatureWithDataRepresentation:error:

**Interface language:** Objective-C

**Framework:** ShazamKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a signature object from raw data.

## Declaration

```objectivec
+ (SHSignature *) signatureWithDataRepresentation:(NSData *) dataRepresentation error:(NSError **) error;
```

## Parameters

- `dataRepresentation`: The raw data for the signature.
- `error`: The error that occurs; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

A signature if the raw data is a valid signature; otherwise, `nil`.

## See Also

### Creating a signature object

- [initWithDataRepresentation:error:](init%28datarepresentation_%29.md): Creates a signature object from raw data.
