> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifieridentifier](https://developer.apple.com/documentation/soundanalysis/snclassifieridentifier)

# SNClassifierIdentifier (Swift)

**Framework:** Sound Analysis  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier that represents the versions of the framework’s sound classifier.

## Declaration

```swift
struct SNClassifierIdentifier
```

## Topics

### Selecting a Sound Classifier

- [version1](snclassifieridentifier/version1.md): Version 1 of the sound classifier.

### Creating an Identifier

- [init(rawValue:)](snclassifieridentifier/init%28rawvalue_%29.md): Creates an identifier for a sound classifier.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Request

- [init(mlModel:)](snclassifysoundrequest/init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [init(classifierIdentifier:)](snclassifysoundrequest/init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.

# SNClassifierIdentifier (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An identifier that represents the versions of the framework’s sound classifier.

## Declaration

```objectivec
typedef NSString * SNClassifierIdentifier;
```

## Topics

### Selecting a Sound Classifier

- [SNClassifierIdentifierVersion1](snclassifieridentifier/version1.md): Version 1 of the sound classifier.

## See Also

### Creating a Request

- [initWithMLModel:error:](snclassifysoundrequest/init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [initWithClassifierIdentifier:error:](snclassifysoundrequest/init%28classifieridentifier_%29.md): Creates a request that uses the framework’s built-in sound classification model.
