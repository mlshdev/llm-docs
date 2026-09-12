> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchwebauthtokenoperation/init()](https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/init())

# init() (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.1+ · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch operation.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You must set [apiToken](apitoken.md) before you execute the operation or add it to a queue.

## See Also

### Creating a Fetch Token Operation

- [init(apiToken:)](init%28apitoken_%29-14712.md): Creates a fetch operation for the specified API token.

# init (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.1+ · visionOS 1.0+ · watchOS 3.0+

Creates an empty fetch operation.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

You must set [APIToken](apitoken.md) before you execute the operation or add it to a queue.

## See Also

### Creating a Fetch Token Operation

- [initWithAPIToken:](init%28apitoken_%29-14712.md): Creates a fetch operation for the specified API token.
