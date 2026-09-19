> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkidentitydocumentdescriptor/elements

# elements (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A list of identity elements to request.

## Declaration

```swift
var elements: [PKIdentityElement] { get }
```

## See Also

### Inspecting elements

- [issuerIdentifiers](issueridentifiers.md): A list of X.509 authority key identifiers your app accepts.
- [PKIdentityElement](../pkidentityelement.md): An object that represents the elements an app requests from identity documents.

# elements (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A list of identity elements to request.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PKIdentityElement *> * elements;
```

## See Also

### Inspecting elements

- [issuerIdentifiers](issueridentifiers.md): A list of X.509 authority key identifiers your app accepts.
- [PKIdentityElement](../pkidentityelement.md): An object that represents the elements an app requests from identity documents.
