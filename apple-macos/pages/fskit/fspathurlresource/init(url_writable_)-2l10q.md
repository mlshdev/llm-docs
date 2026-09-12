> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fspathurlresource/init(url:writable:)-2l10q](https://developer.apple.com/documentation/fskit/fspathurlresource/init(url:writable:)-2l10q)

# init(url:writable:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a path URL resource.

## Declaration

```swift
init(url URL: URL, writable: Bool)
```

## Parameters

- `URL`: A URL in the system file space that represents the contents of a file system. This parameter uses the `file:` scheme.
- `writable`: A Boolean value that indicates whether the file system supports writing to the contents of the URL.

# initWithURL:writable: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Creates a path URL resource.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL writable:(BOOL) writable;
```

## Parameters

- `URL`: A URL in the system file space that represents the contents of a file system. This parameter uses the `file:` scheme.
- `writable`: A Boolean value that indicates whether the file system supports writing to the contents of the URL.
