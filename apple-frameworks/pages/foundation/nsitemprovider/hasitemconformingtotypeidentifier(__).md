> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/hasitemconformingtotypeidentifier(_:)](https://developer.apple.com/documentation/foundation/nsitemprovider/hasitemconformingtotypeidentifier(_:))

# hasItemConformingToTypeIdentifier(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.

## Declaration

```swift
func hasItemConformingToTypeIdentifier(_ typeIdentifier: String) -> Bool
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.

## See Also

### Querying the provider’s contents

- [canLoadObject(ofClass:)](canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [canLoadObject(ofClass:)](canloadobject%28ofclass_%29-40grc.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasRepresentationConforming(toTypeIdentifier:fileOptions:)](hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiers(fileOptions:)](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.

# hasItemConformingToTypeIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.

## Declaration

```objectivec
- (BOOL) hasItemConformingToTypeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.

## See Also

### Querying the provider’s contents

- [canLoadObjectOfClass:](canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasRepresentationConformingToTypeIdentifier:fileOptions:](hasrepresentationconforming%28totypeidentifier_fileoptions_%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiersWithFileOptions:](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.
