> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeatureprovider/featurenames](https://developer.apple.com/documentation/coreml/mlfeatureprovider/featurenames)

# featureNames (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of valid feature names.

## Declaration

```swift
var featureNames: Set<String> { get }
```

## See Also

### Accessing values

- [featureValue(for:)](featurevalue%28for_%29.md): Accesses the feature value given the feature’s name.

# featureNames (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The set of valid feature names.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * featureNames;
```

## See Also

### Accessing values

- [featureValueForName:](featurevalue%28for_%29.md): Accesses the feature value given the feature’s name.
