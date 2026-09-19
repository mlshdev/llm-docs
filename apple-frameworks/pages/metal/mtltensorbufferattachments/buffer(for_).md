> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltensorbufferattachments/buffer(for:)

# buffer(for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the buffer backing the given plane, or `nil` if none has been set.

## Declaration

```swift
func buffer(for plane: MTLTensorPlaneType) -> (any MTLBuffer)?
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The buffer for the given plane, or `nil`.

# bufferForPlane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the buffer backing the given plane, or `nil` if none has been set.

## Declaration

```objectivec
- (id<MTLBuffer>) bufferForPlane:(MTLTensorPlaneType) plane;
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The buffer for the given plane, or `nil`.
