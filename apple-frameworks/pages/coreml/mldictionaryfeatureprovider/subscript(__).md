> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mldictionaryfeatureprovider/subscript(_:)](https://developer.apple.com/documentation/coreml/mldictionaryfeatureprovider/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Subscript interface for the feature provider to pass through to the dictionary.

## Declaration

```swift
subscript(featureName: String) -> MLFeatureValue? { get }
```

## See Also

### Accessing the features

- [dictionary](dictionary.md): The backing dictionary.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Subscript interface for the feature provider to pass through to the dictionary.

## Declaration

```objectivec
- (MLFeatureValue *) objectForKeyedSubscript:(NSString *) featureName;
```

## See Also

### Accessing the features

- [dictionary](dictionary.md): The backing dictionary.
