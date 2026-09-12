> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/init(classifieridentifier:)](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/init(classifieridentifier:))

# init(classifierIdentifier:) (Swift)

**Framework:** Sound Analysis  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a request that uses the framework’s built-in sound classification model.

## Declaration

```swift
init(classifierIdentifier: SNClassifierIdentifier) throws
```

## Parameters

- `classifierIdentifier`: A sound classifier version identifier, such as [version1](../snclassifieridentifier/version1.md).

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

## See Also

### Creating a Request

- [init(mlModel:)](init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [SNClassifierIdentifier](../snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.

# initWithClassifierIdentifier:error: (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a request that uses the framework’s built-in sound classification model.

## Declaration

```objectivec
- (instancetype) initWithClassifierIdentifier:(SNClassifierIdentifier) classifierIdentifier error:(NSError **) error;
```

## Parameters

- `classifierIdentifier`: A sound classifier version identifier, such as [SNClassifierIdentifierVersion1](../snclassifieridentifier/version1.md).
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise, `nil`.

## Mentioned In

- [Classifying Sounds in an Audio File](../classifying-sounds-in-an-audio-file.md)

## See Also

### Creating a Request

- [initWithMLModel:error:](init%28mlmodel_%29-6rmee.md): Creates a request that uses a custom sound classification model.
- [SNClassifierIdentifier](../snclassifieridentifier.md): An identifier that represents the versions of the framework’s sound classifier.
