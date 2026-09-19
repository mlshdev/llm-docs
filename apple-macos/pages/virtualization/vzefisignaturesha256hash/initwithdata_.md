> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzefisignaturesha256hash/initwithdata:

# initWithData:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a signature from SHA-256 hash data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: Data containing the SHA-256 hash.

<a id="discussion"></a>

## Discussion

The hash data must be exactly 32 bytes in length. If data isn’t exactly 32 bytes, the framework raises an exception.
