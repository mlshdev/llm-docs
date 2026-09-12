> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/hasrepresentationconforming(totypeidentifier:fileoptions:)](https://developer.apple.com/documentation/foundation/nsitemprovider/hasrepresentationconforming(totypeidentifier:fileoptions:))

# hasRepresentationConforming(toTypeIdentifier:fileOptions:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.

## Declaration

```swift
func hasRepresentationConforming(toTypeIdentifier typeIdentifier: String, fileOptions: NSItemProviderFileOptions = []) -> Bool
```

<a id="Discussion"></a>

## Discussion

To check all registered UTIs for type conformance, pass the value `0` in the `fileOptions` parameter.

## See Also

### Querying the provider’s contents

- [canLoadObject(ofClass:)](canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [canLoadObject(ofClass:)](canloadobject%28ofclass_%29-40grc.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasItemConformingToTypeIdentifier(\_:)](hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiers(fileOptions:)](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.

# hasRepresentationConformingToTypeIdentifier:fileOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier and to specified open-in-place behavior.

## Declaration

```objectivec
- (BOOL) hasRepresentationConformingToTypeIdentifier:(NSString *) typeIdentifier fileOptions:(NSItemProviderFileOptions) fileOptions;
```

<a id="Discussion"></a>

## Discussion

To check all registered UTIs for type conformance, pass the value `0` in the `fileOptions` parameter.

## See Also

### Querying the provider’s contents

- [canLoadObjectOfClass:](canloadobject%28ofclass_%29-3eig9.md): Returns a Boolean value indicating whether an item provider can load objects of a specified class.
- [hasItemConformingToTypeIdentifier:](hasitemconformingtotypeidentifier%28__%29.md): Returns a Boolean value indicating whether an item provider contains a data representation conforming to a specified universal type identifier file options parameter with a value of zero.
- [registeredTypeIdentifiers](registeredtypeidentifiers.md): Returns the array of type identifiers for the item provider, in the same order they were registered.
- [registeredTypeIdentifiersWithFileOptions:](registeredtypeidentifiers%28fileoptions_%29.md): Returns an array with a subset of type identifiers for the item provider, according to the specified file options, in the same order they were registered.
