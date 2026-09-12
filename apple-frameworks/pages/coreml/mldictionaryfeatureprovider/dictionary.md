> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mldictionaryfeatureprovider/dictionary](https://developer.apple.com/documentation/coreml/mldictionaryfeatureprovider/dictionary)

# dictionary (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The backing dictionary.

## Declaration

```swift
var dictionary: [String : MLFeatureValue] { get }
```

## See Also

### Accessing the features

- [subscript(\_:)](subscript%28__%29.md): Subscript interface for the feature provider to pass through to the dictionary.

# dictionary (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The backing dictionary.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDictionary<NSString *,MLFeatureValue *> * dictionary;
```

## See Also

### Accessing the features

- [objectForKeyedSubscript:](subscript%28__%29.md): Subscript interface for the feature provider to pass through to the dictionary.
