> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/subdata(with:)](https://developer.apple.com/documentation/foundation/nsdata/subdata(with:))

# subdata(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.

## Declaration

```swift
func subdata(with range: NSRange) -> Data
```

## Parameters

- `range`: The range in the receiver from which to get the data. If this range is not within the data object’s range of bytes, [rangeException](../nsexceptionname/rangeexception.md) is raised.

<a id="return-value"></a>

## Return Value

A data object containing the receiver’s bytes that fall within the limits specified by `range`.

<a id="Discussion"></a>

## Discussion

A sample using this method can be found in [Working With Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingBinaryData.html#//apple_ref/doc/uid/20000717).

## See Also

### Finding Data

- [range(of:options:in:)](range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.
- [NSData.SearchOptions](searchoptions.md): Options for method used to search data objects.

# subdataWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new data object containing the data object’s bytes that fall within the limits specified by a given range.

## Declaration

```objectivec
- (NSData *) subdataWithRange:(NSRange) range;
```

## Parameters

- `range`: The range in the receiver from which to get the data. If this range is not within the data object’s range of bytes, [NSRangeException](../nsexceptionname/rangeexception.md) is raised.

<a id="return-value"></a>

## Return Value

A data object containing the receiver’s bytes that fall within the limits specified by `range`.

<a id="Discussion"></a>

## Discussion

A sample using this method can be found in [Working With Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingBinaryData.html#//apple_ref/doc/uid/20000717).

## See Also

### Finding Data

- [rangeOfData:options:range:](range%28of_options_in_%29.md): Finds and returns the range of the first occurrence of the given data, within the given range, subject to given options.
- [NSDataSearchOptions](searchoptions.md): Options for method used to search data objects.
