> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioextensiblepaniclog/appenddata](https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/appenddata)

# AppendData

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t AppendData(OSData *data);
```

## Parameters

- `data`: Data to be inserted

<a id="return-value"></a>

## Return Value

0 in case of success. Negative in case of an error.

<a id="discussion"></a>

## Discussion

This function is called to insert data into the buffer.

This function overwrites the data in the buffer. The write starts from last written byte and continues until ‘len’
