> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/canloadobject(ofclass:)-3eig9](https://developer.apple.com/documentation/foundation/nsitemprovider/canloadobject(ofclass:)-3eig9)

# canLoadObject(ofClass:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a Boolean value indicating whether an item provider can load objects of a specified class.

## Declaration

```swift
func canLoadObject(ofClass aClass: any NSItemProviderReading.Type) -> Bool
```

## Parameters

- `aClass`: The object class for comparison.

<a id="return-value"></a>

## Return Value

`true` if the item provider can load objects of the class.

## See Also

### Querying the provider’s contents

- [canLoadObject(ofClass:)](canloadobject%28ofclass_%29-40grc.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasItemConformingToTypeIdentifier(\_:)](hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [hasRepresentationConforming(toTypeIdentifier:fileOptions:)](hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiers(fileOptions:)](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.

# canLoadObjectOfClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a Boolean value indicating whether an item provider can load objects of a specified class.

## Declaration

```objectivec
- (BOOL) canLoadObjectOfClass:(Class<NSItemProviderReading> *) aClass;
```

## Parameters

- `aClass`: The object class for comparison.

<a id="return-value"></a>

## Return Value

`true` if the item provider can load objects of the class.

## See Also

### Querying the provider’s contents

- [hasItemConformingToTypeIdentifier:](hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [hasRepresentationConformingToTypeIdentifier:fileOptions:](hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiersWithFileOptions:](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.
