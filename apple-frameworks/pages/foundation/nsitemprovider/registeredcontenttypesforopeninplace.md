> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registeredcontenttypesforopeninplace](https://developer.apple.com/documentation/foundation/nsitemprovider/registeredcontenttypesforopeninplace)

# registeredContentTypesForOpenInPlace (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registered content types that the system can load as open-in-place files.

## Declaration

```swift
var registeredContentTypesForOpenInPlace: [UTType] { get }
```

## See Also

### Registering content types

- [registeredContentTypes](registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypes(conformingTo:)](registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.

# registeredContentTypesForOpenInPlace (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registered content types that the system can load as open-in-place files.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UTType *> * registeredContentTypesForOpenInPlace;
```

```objectivec
@property (atomic, copy, readonly) NSArray<UTType *> * registeredContentTypesForOpenInPlace;
```

## See Also

### Registering content types

- [registeredContentTypes](registeredcontenttypes.md): Registered content types in the order the app registers each type.
- [registeredContentTypesConformingToContentType:](registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.
