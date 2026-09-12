> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/sortdescriptorwithkey:ascending:selector:](https://developer.apple.com/documentation/foundation/nssortdescriptor/sortdescriptorwithkey:ascending:selector:)

# sortDescriptorWithKey:ascending:selector:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a sort descriptor with the specified key path, ordering, and comparison selector.

## Declaration

```objectivec
+ (instancetype) sortDescriptorWithKey:(NSString *) key ascending:(BOOL) ascending selector:(SEL) selector;
```

## Parameters

- `key`: The key path for performing a comparison.

  For information about key paths, see [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i).
- `ascending`: [true](https://developer.apple.com/documentation/swift/true) if the receiver specifies sorting in ascending order; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `selector`: The method to use when comparing the properties of objects, for example [localizedStandardCompare:](../nsstring/localizedstandardcompare%28__%29.md). The selector must specify a method implemented by the value of the property identified by the key path. The selector used for the comparison is passed a single parameter, the object to compare against, and it returns the appropriate [NSComparisonResult](../comparisonresult.md) constant.

<a id="return-value"></a>

## Return Value

A sort descriptor that initializes with the specified key path, sort order, and comparison selector.

## See Also

### Creating a Sort Descriptor

- [sortDescriptorWithKey:ascending:](sortdescriptorwithkey_ascending_.md): Creates and returns a sort descriptor with the specified key path and ordering.
- [initWithKey:ascending:](init%28key_ascending_%29.md): Creates a sort descriptor with a specified string key path and sort order.
- [initWithKey:ascending:selector:](init%28key_ascending_selector_%29.md): Creates a sort descriptor with a specified string key path, ordering, and comparison selector.
- [sortDescriptorWithKey:ascending:comparator:](sortdescriptorwithkey_ascending_comparator_.md): Creates and returns a sort descriptor initialized with the specified key path and ordering, and a comparator block.
- [initWithKey:ascending:comparator:](init%28key_ascending_comparator_%29.md): Creates a sort descriptor with a specified string key path and ordering, and a comparator block.
- [initWithCoder:](init%28coder_%29.md): Creates a sort descriptor by decoding from the coder you specify.
