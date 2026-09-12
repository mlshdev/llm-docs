> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registeredcontenttypes](https://developer.apple.com/documentation/foundation/nsitemprovider/registeredcontenttypes)

# registeredContentTypes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registered content types in the order the app registers each type.

## Declaration

```swift
var registeredContentTypes: [UTType] { get }
```

<a id="Discussion"></a>

## Discussion

You app should register content types in order of fidelity. The system uses content types that appear earlier in the array.

## See Also

### Registering content types

- [registeredContentTypesForOpenInPlace](registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.
- [registeredContentTypes(conformingTo:)](registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.

# registeredContentTypes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registered content types in the order the app registers each type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UTType *> * registeredContentTypes;
```

```objectivec
@property (atomic, copy, readonly) NSArray<UTType *> * registeredContentTypes;
```

<a id="Discussion"></a>

## Discussion

You app should register content types in order of fidelity. The system uses content types that appear earlier in the array.

## See Also

### Registering content types

- [registeredContentTypesForOpenInPlace](registeredcontenttypesforopeninplace.md): Registered content types that the system can load as open-in-place files.
- [registeredContentTypesConformingToContentType:](registeredcontenttypes%28conformingto_%29.md): Returns an array of registered content types that conform to a specified content type.
