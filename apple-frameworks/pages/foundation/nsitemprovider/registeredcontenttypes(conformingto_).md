> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsitemprovider/registeredcontenttypes(conformingto:)

# registeredContentTypes(conformingTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns an array of registered content types that conform to a specified content type.

## Declaration

```swift
func registeredContentTypes(conformingTo contentType: UTType) -> [UTType]
```

## Parameters

- `contentType`: The specified content type.

<a id="return-value"></a>

## Return Value

An array of registered content types.

## See Also

### Registering content types

- [registeredContentTypes](registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypesForOpenInPlace](registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.

# registeredContentTypesConformingToContentType: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns an array of registered content types that conform to a specified content type.

## Declaration

```objectivec
- (NSArray<UTType *> *) registeredContentTypesConformingToContentType:(UTType *) contentType;
```

## Parameters

- `contentType`: The specified content type.

<a id="return-value"></a>

## Return Value

An array of registered content types.

## See Also

### Registering content types

- [registeredContentTypes](registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypesForOpenInPlace](registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.
