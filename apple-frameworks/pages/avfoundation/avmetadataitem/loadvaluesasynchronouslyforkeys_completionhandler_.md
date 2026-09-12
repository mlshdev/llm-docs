> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitem/loadvaluesasynchronouslyforkeys:completionhandler:](https://developer.apple.com/documentation/avfoundation/avmetadataitem/loadvaluesasynchronouslyforkeys:completionhandler:)

# loadValuesAsynchronouslyForKeys:completionHandler:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the object to load the values of any of the specified keys that aren’t already loaded.

## Declaration

```objectivec
- (void) loadValuesAsynchronouslyForKeys:(NSArray<NSString *> *) keys completionHandler:(void (^)()) handler;
```

## Parameters

- `keys`: An array of [NSString](../../foundation/nsstring.md) objects, each of which represents one of the required keys.
- `handler`: The block to invoke when loading succeeds, fails, or is canceled.

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
- [statusOfValueForKey:error:](statusofvalueforkey_error_.md): Reports whether the value for a given key is immediately available without blocking.
