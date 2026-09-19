> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/copymemorydescriptor

# CopyMemoryDescriptor

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t CopyMemoryDescriptor(IOBufferMemoryDescriptor **mem);
```

## Parameters

- `mem`: The pointer to the IOBufferMemoryDescriptor object

<a id="return-value"></a>

## Return Value

0 in case of success. Negative in case of an error.

<a id="discussion"></a>

## Discussion

Function to get the Memory descriptor created in the Create function
