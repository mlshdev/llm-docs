> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/host/isequal(to:)

# isEqual(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Indicates whether the receiver represents the same host as another `NSHost` object.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
func isEqual(to aHost: Host) -> Bool
```

## Parameters

- `aHost`: Host to compare the receiver to.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver and `host` share at least one network address; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.

# isEqualToHost: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Indicates whether the receiver represents the same host as another `NSHost` object.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
- (BOOL) isEqualToHost:(NSHost *) aHost;
```

## Parameters

- `aHost`: Host to compare the receiver to.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the receiver and `host` share at least one network address; [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Related Documentation

- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
