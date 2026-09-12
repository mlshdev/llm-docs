> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/allowevaluation()](https://developer.apple.com/documentation/foundation/nssortdescriptor/allowevaluation())

# allowEvaluation() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded sort descriptor to allow evaluation.

## Declaration

```swift
func allowEvaluation()
```

<a id="Discussion"></a>

## Discussion

When securely decoding [NSSortDescriptor](../nssortdescriptor.md) objects that are encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate descriptors you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, and related properties to ensure no erroneous or malicious code will be executed. Once you’ve preflighted the sort descriptor, you can enable the sort descriptor for evaluation by calling [allowEvaluation()](allowevaluation%28%29.md).

## See Also

### Using Sort Descriptors

- [compare(\_:to:)](compare%28__to_%29.md): Returns a comparison result value that indicates the sort order of two objects.
- [reversedSortDescriptor](reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.

# allowEvaluation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Forces a securely decoded sort descriptor to allow evaluation.

## Declaration

```objectivec
- (void) allowEvaluation;
```

<a id="Discussion"></a>

## Discussion

When securely decoding [NSSortDescriptor](../nssortdescriptor.md) objects that are encoded using [NSSecureCoding](../nssecurecoding.md), evaluation is disabled because it is potentially unsafe to evaluate descriptors you get out of an archive.

Before you enable evaluation, you should validate key paths, selectors, and related properties to ensure no erroneous or malicious code will be executed. Once you’ve preflighted the sort descriptor, you can enable the sort descriptor for evaluation by calling [allowEvaluation](allowevaluation%28%29.md).

## See Also

### Using Sort Descriptors

- [compareObject:toObject:](compare%28__to_%29.md): Returns a comparison result value that indicates the sort order of two objects.
- [reversedSortDescriptor](reversedsortdescriptor.md): Returns a sort descriptor that reverses the sort order.
