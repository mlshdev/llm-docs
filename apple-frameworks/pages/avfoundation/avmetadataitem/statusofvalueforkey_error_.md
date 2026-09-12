> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/statusofvalueforkey:error:](https://developer.apple.com/documentation/avfoundation/avmetadataitem/statusofvalueforkey:error:)

# statusOfValueForKey:error:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Reports whether the value for a given key is immediately available without blocking.

## Declaration

```objectivec
- (AVKeyValueStatus) statusOfValueForKey:(NSString *) key error:(NSError **) outError;
```

## Parameters

- `key`: The key whose status you want.
- `outError`: If the status of the value for the key is [AVKeyValueStatusFailed](../avkeyvaluestatus/failed.md), upon return contains an [NSError](../../foundation/nserror.md) object that describes the failure that occurred.

<a id="return-value"></a>

## Return Value

The current loading status of the value for `key`.

<a id="Discussion"></a>

## Discussion

For full discussion, see [AVAsynchronousKeyValueLoading](../avasynchronouskeyvalueloading.md).

## See Also

### Accessing values

- [value](value.md): Deprecated. The value of the metadata item.
- [extraAttributes](extraattributes.md): Deprecated. A dictionary of additional attributes for a metadata item.
- [stringValue](stringvalue.md): Deprecated. The value of the metadata item as a string.
- [numberValue](numbervalue.md): Deprecated. The value of the metadata item as a number.
- [dateValue](datevalue.md): Deprecated. The value of the metadata item as a date.
- [dataValue](datavalue.md): Deprecated. The value of the metadata item as a data value.
- [loadValuesAsynchronouslyForKeys:completionHandler:](loadvaluesasynchronouslyforkeys_completionhandler_.md): Tells the object to load the values of any of the specified keys that aren’t already loaded.
