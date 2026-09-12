> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mldictionaryfeatureprovider/init(dictionary:)](https://developer.apple.com/documentation/coreml/mldictionaryfeatureprovider/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates the feature provider based on a dictionary.

## Declaration

```swift
init(dictionary: [String : Any]) throws
```

## Parameters

- `dictionary`: The dictionary of feature names and feature values.

# initWithDictionary:error: (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates the feature provider based on a dictionary.

## Declaration

```objectivec
- (instancetype) initWithDictionary:(NSDictionary<NSString *,id> *) dictionary error:(NSError **) error;
```

## Parameters

- `dictionary`: The dictionary of feature names and feature values.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.
