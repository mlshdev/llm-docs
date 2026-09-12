> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstringnormalizationform](https://developer.apple.com/documentation/corefoundation/cfstringnormalizationform)

# CFStringNormalizationForm (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unicode normalization forms as described in Unicode Technical Report #15.

## Declaration

```swift
enum CFStringNormalizationForm
```

## Topics

### Constants

- [CFStringNormalizationForm.D](cfstringnormalizationform/d.md): Canonical decomposition.
- [CFStringNormalizationForm.KD](cfstringnormalizationform/kd.md): Compatibility decomposition.
- [CFStringNormalizationForm.C](cfstringnormalizationform/c.md): Canonical decomposition followed by canonical composition.
- [CFStringNormalizationForm.KC](cfstringnormalizationform/kc.md): Compatibility decomposition followed by canonical composition.

### Initializers

- [init(rawValue:)](cfstringnormalizationform/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Transform Identifiers for CFStringTransform](transform-identifiers-for-cfstringtransform.md): Constants that identify transforms used with [CFStringTransform(\_:\_:\_:\_:)](cfstringtransform%28________%29.md).

# CFStringNormalizationForm (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Unicode normalization forms as described in Unicode Technical Report #15.

## Declaration

```objectivec
enum CFStringNormalizationForm : CFIndex;
```

## Topics

### Constants

- [kCFStringNormalizationFormD](cfstringnormalizationform/d.md): Canonical decomposition.
- [kCFStringNormalizationFormKD](cfstringnormalizationform/kd.md): Compatibility decomposition.
- [kCFStringNormalizationFormC](cfstringnormalizationform/c.md): Canonical decomposition followed by canonical composition.
- [kCFStringNormalizationFormKC](cfstringnormalizationform/kc.md): Compatibility decomposition followed by canonical composition.

## See Also

### Constants

- [Transform Identifiers for CFStringTransform](transform-identifiers-for-cfstringtransform.md): Constants that identify transforms used with [CFStringTransform](cfstringtransform%28________%29.md).
