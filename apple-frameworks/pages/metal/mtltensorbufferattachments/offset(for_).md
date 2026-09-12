> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorbufferattachments/offset(for:)](https://developer.apple.com/documentation/metal/mtltensorbufferattachments/offset(for:))

# offset(for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the byte offset into the buffer for the given plane.

## Declaration

```swift
func offset(for plane: MTLTensorPlaneType) -> Int
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The byte offset for the given plane.

# offsetForPlane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the byte offset into the buffer for the given plane.

## Declaration

```objectivec
- (NSUInteger) offsetForPlane:(MTLTensorPlaneType) plane;
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The byte offset for the given plane.
