> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsenumeratedirectoryresult/init(verifier:)](https://developer.apple.com/documentation/fskit/fsenumeratedirectoryresult/init(verifier:))

# init(verifier:) (Swift)

**Framework:** FSKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Creates a result for an directory enumeration operation.

## Declaration

```swift
init?(verifier currentVerifier: UInt64)
```

## Parameters

- `currentVerifier`: An `FSDirectoryVerifier` value that reflects the directory’s current version. FSKit uses this value to detect whether the directory contents changed since the last enumeration call.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an enumerate-directory result

- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.

# initWithVerifier: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a result for an directory enumeration operation.

## Declaration

```objectivec
- (instancetype) initWithVerifier:(FSDirectoryVerifier) currentVerifier;
```

## Parameters

- `currentVerifier`: An `FSDirectoryVerifier` value that reflects the directory’s current version. FSKit uses this value to detect whether the directory contents changed since the last enumeration call.

<a id="return-value"></a>

## Return Value

A populated result instance, or `nil` if validation fails.

## See Also

### Creating an enumerate-directory result

- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
- [FSDirectoryVerifier](../fsdirectoryverifier.md): A tool to detect whether the directory contents changed since the last call to enumerate a directory.
