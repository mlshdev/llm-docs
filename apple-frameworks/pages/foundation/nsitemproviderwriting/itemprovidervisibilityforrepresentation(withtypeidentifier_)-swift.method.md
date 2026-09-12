> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderwriting/itemprovidervisibilityforrepresentation(withtypeidentifier:)-swift.method](https://developer.apple.com/documentation/foundation/nsitemproviderwriting/itemprovidervisibilityforrepresentation(withtypeidentifier:)-swift.method)

# itemProviderVisibilityForRepresentation(withTypeIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asks the item provider for the representation visibility specification for the given UTI.

## Declaration

```swift
optional func itemProviderVisibilityForRepresentation(withTypeIdentifier typeIdentifier: String) -> NSItemProviderRepresentationVisibility
```

## Parameters

- `typeIdentifier`: A uniform type identifier (UTI).

<a id="return-value"></a>

## Return Value

A representation visibility specification for the given UTI.

## See Also

### Getting the representation visibility specification

- [itemProviderVisibilityForRepresentation(withTypeIdentifier:)](itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.type.method.md): Asks the item provider for the default representation visibility specification for the given UTI.

# itemProviderVisibilityForRepresentationWithTypeIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asks the item provider for the representation visibility specification for the given UTI.

## Declaration

```objectivec
- (NSItemProviderRepresentationVisibility) itemProviderVisibilityForRepresentationWithTypeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `typeIdentifier`: A uniform type identifier (UTI).

<a id="return-value"></a>

## Return Value

A representation visibility specification for the given UTI.

## See Also

### Getting the representation visibility specification

- [itemProviderVisibilityForRepresentationWithTypeIdentifier:](itemprovidervisibilityforrepresentation%28withtypeidentifier_%29-swift.type.method.md): Asks the item provider for the default representation visibility specification for the given UTI.
