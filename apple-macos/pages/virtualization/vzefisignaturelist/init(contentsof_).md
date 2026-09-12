> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzefisignaturelist/init(contentsof:)](https://developer.apple.com/documentation/virtualization/vzefisignaturelist/init(contentsof:))

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
