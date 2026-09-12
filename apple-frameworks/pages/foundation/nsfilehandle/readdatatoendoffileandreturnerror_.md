> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilehandle/readdatatoendoffileandreturnerror:](https://developer.apple.com/documentation/foundation/nsfilehandle/readdatatoendoffileandreturnerror:)

# readDataToEndOfFileAndReturnError:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Reads the available data synchronously up to the end of file or maximum number of bytes.

## Declaration

```objectivec
- (NSData *) readDataToEndOfFileAndReturnError:(NSError **) error;
```

## Parameters

- `error`: When the return value is `nil`, this provides an [NSError](../nserror.md) indicating why the read operation failed.

<a id="return-value"></a>

## Return Value

The data available through the file handle up to the maximum size that can be represented by an [NSData](../nsdata.md) object or, if a communications channel, until an end-of-file indicator is returned.

<a id="Discussion"></a>

## Discussion

This method invokes [readDataOfLength:](../filehandle/readdata%28oflength_%29.md) as part of its implementation.

## See Also

### Reading from a file handle synchronously

- [availableData](../filehandle/availabledata.md): The data currently available in the receiver.
- [readDataUpToLength:error:](readdatauptolength_error_.md): Reads data synchronously up to the specified number of bytes.
