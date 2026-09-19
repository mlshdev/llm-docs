> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nssortdescriptor/comparator

# comparator (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The comparator for the sort descriptor.

## Declaration

```swift
var comparator: Comparator { get }
```

<a id="Discussion"></a>

## Discussion

Call this property only for sort descriptors initialized with [init(key:ascending:comparator:)](init%28key_ascending_comparator_%29.md).

## See Also

### Getting Information About a Sort Descriptor

- [ascending](ascending.md): A Boolean value that indicates whether the receiver specifies sorting in ascending order.
- [key](key.md): The key that specifies the property to compare during sorting.
- [keyPath](keypath.md): The key path that specifies the property to compare during sorting.
- [selector](selector.md): The selector for comparing objects.

# comparator (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The comparator for the sort descriptor.

## Declaration

```objectivec
@property (readonly) NSComparator comparator;
```

<a id="Discussion"></a>

## Discussion

Call this property only for sort descriptors initialized with [initWithKey:ascending:comparator:](init%28key_ascending_comparator_%29.md).

## See Also

### Getting Information About a Sort Descriptor

- [ascending](ascending.md): A Boolean value that indicates whether the receiver specifies sorting in ascending order.
- [key](key.md): The key that specifies the property to compare during sorting.
- [selector](selector.md): The selector for comparing objects.
