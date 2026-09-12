> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplanedescriptormap/descriptor(for:)](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplanedescriptormap/descriptor(for:))

# descriptor(for:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the auxiliary plane descriptor for the given plane type, or `nil` if none has been set.

## Declaration

```swift
func descriptor(for plane: MTLTensorPlaneType) -> MTLTensorAuxiliaryPlaneDescriptor?
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The descriptor for the given plane type, or `nil`.

# descriptorForPlane: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the auxiliary plane descriptor for the given plane type, or `nil` if none has been set.

## Declaration

```objectivec
- (MTLTensorAuxiliaryPlaneDescriptor *) descriptorForPlane:(MTLTensorPlaneType) plane;
```

## Parameters

- `plane`: The plane type to look up.

<a id="return-value"></a>

## Return Value

The descriptor for the given plane type, or `nil`.
