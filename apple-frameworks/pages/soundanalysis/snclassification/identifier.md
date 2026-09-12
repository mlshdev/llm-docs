> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassification/identifier](https://developer.apple.com/documentation/soundanalysis/snclassification/identifier)

# identifier (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A prediction label that’s one of the classifications a sound classifier’s underlying model defines.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

An example `identifier` might be a string like `laughter` or `applause`*.* The sound classifier’s underlying model defines the possible string values, which are typically technical names that you don’t directly present in your app’s user interface.

## See Also

### Inspecting a Classification

- [confidence](confidence.md): The confidence value the model has in its prediction.

# identifier (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A prediction label that’s one of the classifications a sound classifier’s underlying model defines.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

An example `identifier` might be a string like `laughter` or `applause`*.* The sound classifier’s underlying model defines the possible string values, which are typically technical names that you don’t directly present in your app’s user interface.

## See Also

### Inspecting a Classification

- [confidence](confidence.md): The confidence value the model has in its prediction.
