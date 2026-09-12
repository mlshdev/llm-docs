> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnanimalidentifier](https://developer.apple.com/documentation/vision/vnanimalidentifier)

# VNAnimalIdentifier (Swift)

**Framework:** Vision  
**Kind:** Structure

An animal identifier string.

## Declaration

```swift
struct VNAnimalIdentifier
```

## Topics

### Animals

- [cat](vnanimalidentifier/cat.md): An animal identifier for cats.
- [dog](vnanimalidentifier/dog.md): An animal identifier for dogs.

### Initializers

- [init(rawValue:)](vnanimalidentifier/init%28rawvalue_%29.md): Creates an identifier with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying Animals

- [supportedIdentifiers()](vnrecognizeanimalsrequest/supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [knownAnimalIdentifiers(forRevision:)](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.

# VNAnimalIdentifier (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias

An animal identifier string.

## Declaration

```objectivec
typedef NSString * VNAnimalIdentifier;
```

## Topics

### Animals

- [VNAnimalIdentifierCat](vnanimalidentifier/cat.md): An animal identifier for cats.
- [VNAnimalIdentifierDog](vnanimalidentifier/dog.md): An animal identifier for dogs.

## See Also

### Identifying Animals

- [supportedIdentifiersAndReturnError:](vnrecognizeanimalsrequest/supportedidentifiers%28%29.md): Returns the identifiers of the animals that the request detects.
- [knownAnimalIdentifiersForRevision:error:](vnrecognizeanimalsrequest/knownanimalidentifiers%28forrevision_%29.md): Deprecated. Returns a list of animal identifiers the recognition algorithm supports for the specified revision.
