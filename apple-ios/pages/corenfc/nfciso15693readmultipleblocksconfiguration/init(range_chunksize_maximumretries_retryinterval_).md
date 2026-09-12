> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso15693readmultipleblocksconfiguration/init(range:chunksize:maximumretries:retryinterval:)](https://developer.apple.com/documentation/corenfc/nfciso15693readmultipleblocksconfiguration/init(range:chunksize:maximumretries:retryinterval:))

# init(range:chunkSize:maximumRetries:retryInterval:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```swift
init(range: NSRange, chunkSize: Int, maximumRetries: Int, retryInterval: TimeInterval)
```

## Parameters

- `range`: Read range specify by the starting block index and the total number of blocks.
- `chunkSize`: Specify number of blocks parameter for the Read multiple blocks command.
- `maximumRetries`: Maximum number of retry attempt when tag response is not received.
- `retryInterval`: Time interval wait between each retry attempt.

# initWithRange:chunkSize:maximumRetries:retryInterval: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

## Declaration

```objectivec
- (instancetype) initWithRange:(NSRange) range chunkSize:(NSUInteger) chunkSize maximumRetries:(NSUInteger) maximumRetries retryInterval:(NSTimeInterval) retryInterval;
```

## Parameters

- `range`: Read range specify by the starting block index and the total number of blocks.
- `chunkSize`: Specify number of blocks parameter for the Read multiple blocks command.
- `maximumRetries`: Maximum number of retry attempt when tag response is not received.
- `retryInterval`: Time interval wait between each retry attempt.
