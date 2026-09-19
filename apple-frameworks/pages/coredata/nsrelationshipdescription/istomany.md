> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsrelationshipdescription/istomany

# isToMany (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the relationship can contain many managed objects.

## Declaration

```swift
var isToMany: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [maxCount](maxcount.md) is equal to `1`, implying a to-one relationship, this property returns [false](https://developer.apple.com/documentation/swift/false); otherwise, it returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Cardinality

- [minCount](mincount.md): The minimum number of managed objects the relationship can reference.
- [maxCount](maxcount.md): The maximum number of managed objects the relationship can reference.

# toMany (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value that indicates whether the relationship can contain many managed objects.

## Declaration

```objectivec
@property (readonly, getter=isToMany) BOOL toMany;
```

<a id="Discussion"></a>

## Discussion

If [maxCount](maxcount.md) is equal to `1`, implying a to-one relationship, this property returns [false](https://developer.apple.com/documentation/swift/false); otherwise, it returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring Cardinality

- [minCount](mincount.md): The minimum number of managed objects the relationship can reference.
- [maxCount](maxcount.md): The maximum number of managed objects the relationship can reference.
