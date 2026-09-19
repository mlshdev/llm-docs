> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzefisignaturelist/init(contentsof:)

# init(contentsOf:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a signature list from a file.

## Declaration

```swift
init(contentsOf url: URL) throws
```

## Parameters

- `url`: The URL to a file containing signature data.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a signature list from a file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The URL to a file containing signature data.
- `error`: If not `nil`, assigned with the error if the initialization fails.
